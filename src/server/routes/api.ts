import { Hono } from 'hono';
import { context, redis, reddit } from '@devvit/web/server';
import type {
  InitResponse,
  GuessRequest,
  GuessResponse,
  GameState,
  Clue,
} from '../../shared/api';
import { getTodaysPuzzle } from '../../shared/puzzles';

type ErrorResponse = {
  status: 'error';
  message: string;
};

const MAX_GUESSES = 5;

const getGameStateKey = (postId: string, username: string): string =>
  `game:${postId}:${username}`;

const getStatsKey = (postId: string): string =>
  `stats:${postId}`;

const getDistributionKey = (postId: string): string =>
  `dist:${postId}`;

const getCluesForState = (gameState: GameState, allClues: Clue[]): Clue[] => {
  return allClues.slice(0, gameState.revealedClues);
};

const getStats = async (postId: string): Promise<{ totalPlayers: number; guessDistribution: number[] }> => {
  const [totalStr, distStr] = await Promise.all([
    redis.get(getStatsKey(postId)),
    redis.get(getDistributionKey(postId)),
  ]);
  const totalPlayers = totalStr ? parseInt(totalStr) : 0;
  const guessDistribution = distStr ? JSON.parse(distStr) : [0, 0, 0, 0, 0, 0];
  return { totalPlayers, guessDistribution };
};

export const api = new Hono();

api.get('/init', async (c) => {
  const { postId } = context;

  if (!postId) {
    return c.json<ErrorResponse>(
      { status: 'error', message: 'postId is required but missing from context' },
      400
    );
  }

  try {
    const [username] = await Promise.all([
      reddit.getCurrentUsername(),
    ]);

    const user = username ?? 'anonymous';
    const puzzle = getTodaysPuzzle();
    const stateKey = getGameStateKey(postId, user);
    const savedState = await redis.get(stateKey);

    let gameState: GameState;

    if (savedState) {
      gameState = JSON.parse(savedState);
    } else {
      gameState = {
        puzzleId: puzzle.id,
        guesses: [],
        revealedClues: 1,
        solved: false,
        failed: false,
        answer: null,
      };
      await redis.set(stateKey, JSON.stringify(gameState));
    }

    const clues = getCluesForState(gameState, puzzle.clues);
    const { totalPlayers, guessDistribution } = await getStats(postId);

    return c.json<InitResponse>({
      type: 'init',
      postId,
      username: user,
      gameState,
      clues,
      totalPlayers,
      guessDistribution,
    });
  } catch (error) {
    console.error(`API Init Error for post ${postId}:`, error);
    const errorMessage = error instanceof Error
      ? `Initialization failed: ${error.message}`
      : 'Unknown error during initialization';
    return c.json<ErrorResponse>({ status: 'error', message: errorMessage }, 400);
  }
});

api.post('/guess', async (c) => {
  const { postId } = context;
  if (!postId) {
    return c.json<ErrorResponse>(
      { status: 'error', message: 'postId is required' },
      400
    );
  }

  try {
    const { guess } = await c.req.json<GuessRequest>();
    const username = (await reddit.getCurrentUsername()) ?? 'anonymous';
    const puzzle = getTodaysPuzzle();
    const stateKey = getGameStateKey(postId, username);
    const savedState = await redis.get(stateKey);

    if (!savedState) {
      return c.json<ErrorResponse>(
        { status: 'error', message: 'Game not initialized' },
        400
      );
    }

    const gameState: GameState = JSON.parse(savedState);

    if (gameState.solved || gameState.failed) {
      const clues = getCluesForState(gameState, puzzle.clues);
      const stats = await getStats(postId);
      return c.json<GuessResponse>({
        type: 'guess',
        correct: gameState.solved,
        gameState,
        clues,
        ...stats,
      });
    }

    const normalizedGuess = guess.trim().toLowerCase();
    const normalizedAnswer = puzzle.country.toLowerCase();
    const correct = normalizedGuess === normalizedAnswer;

    gameState.guesses.push(guess.trim());

    if (correct) {
      gameState.solved = true;
      gameState.answer = puzzle.country;
      // Record stats
      await redis.incrBy(getStatsKey(postId), 1);
      const distStr = await redis.get(getDistributionKey(postId));
      const dist: number[] = distStr ? JSON.parse(distStr) : [0, 0, 0, 0, 0, 0];
      dist[gameState.guesses.length - 1] = (dist[gameState.guesses.length - 1] || 0) + 1;
      await redis.set(getDistributionKey(postId), JSON.stringify(dist));
    } else {
      gameState.revealedClues = Math.min(gameState.revealedClues + 1, MAX_GUESSES);

      if (gameState.guesses.length >= MAX_GUESSES) {
        gameState.failed = true;
        gameState.answer = puzzle.country;
        // Record stats - failed
        await redis.incrBy(getStatsKey(postId), 1);
        const distStr = await redis.get(getDistributionKey(postId));
        const dist: number[] = distStr ? JSON.parse(distStr) : [0, 0, 0, 0, 0, 0];
        dist[5] = (dist[5] || 0) + 1;
        await redis.set(getDistributionKey(postId), JSON.stringify(dist));
      }
    }

    await redis.set(stateKey, JSON.stringify(gameState));

    const clues = getCluesForState(gameState, puzzle.clues);
    const stats = await getStats(postId);

    return c.json<GuessResponse>({
      type: 'guess',
      correct,
      gameState,
      clues,
      ...stats,
    });
  } catch (error) {
    console.error(`API Guess Error:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return c.json<ErrorResponse>({ status: 'error', message: errorMessage }, 400);
  }
});
