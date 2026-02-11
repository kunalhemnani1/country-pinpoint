export type Clue = {
  category: string;
  text: string;
};

export type Puzzle = {
  id: number;
  country: string;
  clues: [Clue, Clue, Clue, Clue, Clue];
};

export type GameState = {
  puzzleId: number;
  guesses: string[];
  revealedClues: number;
  solved: boolean;
  failed: boolean;
  answer: string | null;
};

export type InitResponse = {
  type: 'init';
  postId: string;
  username: string;
  gameState: GameState;
  clues: Clue[];
  totalPlayers: number;
  guessDistribution: number[];
};

export type GuessRequest = {
  guess: string;
};

export type GuessResponse = {
  type: 'guess';
  correct: boolean;
  gameState: GameState;
  clues: Clue[];
  totalPlayers: number;
  guessDistribution: number[];
};

export type StatsResponse = {
  totalPlayers: number;
  guessDistribution: number[];
  averageScore: number;
};
