import { useCallback, useEffect, useState, useRef } from 'react';
import type {
  InitResponse,
  GuessResponse,
  GameState,
  Clue,
} from '../../shared/api';

type PinpointState = {
  gameState: GameState | null;
  clues: Clue[];
  username: string | null;
  loading: boolean;
  submitting: boolean;
  totalPlayers: number;
  guessDistribution: number[];
  lastGuessCorrect: boolean | null;
};

export const usePinpoint = () => {
  const [state, setState] = useState<PinpointState>({
    gameState: null,
    clues: [],
    username: null,
    loading: true,
    submitting: false,
    totalPlayers: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0],
    lastGuessCorrect: null,
  });
  const initCalled = useRef(false);

  useEffect(() => {
    if (initCalled.current) return;
    initCalled.current = true;

    const init = async () => {
      try {
        const res = await fetch('/api/init');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: InitResponse = await res.json();
        if (data.type !== 'init') throw new Error('Unexpected response');
        setState({
          gameState: data.gameState,
          clues: data.clues,
          username: data.username,
          loading: false,
          submitting: false,
          totalPlayers: data.totalPlayers,
          guessDistribution: data.guessDistribution,
          lastGuessCorrect: null,
        });
      } catch (err) {
        console.error('Failed to init game', err);
        setState((prev) => ({ ...prev, loading: false }));
      }
    };
    void init();
  }, []);

  const submitGuess = useCallback(async (guess: string) => {
    if (!guess.trim()) return;

    setState((prev) => ({ ...prev, submitting: true }));

    try {
      const res = await fetch('/api/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess: guess.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: GuessResponse = await res.json();

      setState((prev) => ({
        ...prev,
        gameState: data.gameState,
        clues: data.clues,
        submitting: false,
        totalPlayers: data.totalPlayers,
        guessDistribution: data.guessDistribution,
        lastGuessCorrect: data.correct,
      }));
    } catch (err) {
      console.error('Failed to submit guess', err);
      setState((prev) => ({ ...prev, submitting: false }));
    }
  }, []);

  return {
    ...state,
    submitGuess,
    isGameOver: state.gameState?.solved || state.gameState?.failed || false,
  };
};
