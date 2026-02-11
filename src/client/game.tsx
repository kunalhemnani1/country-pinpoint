import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { usePinpoint } from './hooks/usePinpoint';
import { ClueCard } from './components/ClueCard';
import { CountrySearch } from './components/CountrySearch';
import { GuessHistory } from './components/GuessHistory';
import { ResultScreen } from './components/ResultScreen';

const MAX_GUESSES = 5;

export const App = () => {
  const {
    gameState,
    clues,
    loading,
    submitting,
    submitGuess,
    isGameOver,
    totalPlayers,
    guessDistribution,
  } = usePinpoint();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0a0a1a]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#533483]/30 border-t-[#e94560] rounded-full animate-spin" />
        </div>
        <p className="text-gray-500 mt-4 text-sm">Loading puzzle...</p>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0a0a1a]">
        <p className="text-red-400 text-sm">Failed to load puzzle. Please try again.</p>
      </div>
    );
  }

  const guessesLeft = MAX_GUESSES - gameState.guesses.length;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a1a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-sm border-b border-[#533483]/20">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌍</span>
            <div>
              <h1 className="text-base font-bold bg-gradient-to-r from-[#e94560] to-[#533483] bg-clip-text text-transparent leading-tight">
                Country Pinpoint
              </h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Daily Puzzle</p>
            </div>
          </div>
          {!isGameOver && (
            <div className="flex items-center gap-1.5">
              {Array.from({ length: MAX_GUESSES }, (_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i < gameState.guesses.length
                      ? 'bg-red-500/60'
                      : 'bg-[#533483]/40'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 space-y-6">
        {!isGameOver ? (
          <>
            {/* Clue Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Clues Revealed
                </h2>
                <span className="text-xs text-gray-500">
                  {guessesLeft} {guessesLeft === 1 ? 'guess' : 'guesses'} remaining
                </span>
              </div>
              <div className="space-y-3">
                {clues.map((clue, i) => (
                  <ClueCard
                    key={`${clue.category}-${i}`}
                    clue={clue}
                    index={i}
                    total={MAX_GUESSES}
                    isNew={i === clues.length - 1 && gameState.guesses.length > 0}
                  />
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <div className="space-y-2">
              <CountrySearch
                onSelect={submitGuess}
                disabled={isGameOver}
                submitting={submitting}
              />
              {submitting && (
                <p className="text-center text-xs text-gray-500 animate-pulse">
                  Checking your answer...
                </p>
              )}
            </div>

            {/* Guess History */}
            {gameState.guesses.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Your Guesses
                </h2>
                <GuessHistory
                  guesses={gameState.guesses}
                  answer={gameState.answer}
                  maxGuesses={MAX_GUESSES}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {/* Result */}
            <ResultScreen
              solved={gameState.solved}
              answer={gameState.answer || ''}
              guesses={gameState.guesses}
              totalPlayers={totalPlayers}
              guessDistribution={guessDistribution}
            />

            {/* Show all clues after game over */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                All Clues
              </h2>
              {clues.map((clue, i) => (
                <ClueCard
                  key={`${clue.category}-${i}`}
                  clue={clue}
                  index={i}
                  total={MAX_GUESSES}
                  isNew={false}
                />
              ))}
            </div>

            {/* Guess History */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Your Guesses
              </h2>
              <GuessHistory
                guesses={gameState.guesses}
                answer={gameState.answer}
                maxGuesses={MAX_GUESSES}
              />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#533483]/10 py-3">
        <p className="text-center text-[10px] text-gray-600">
          🌍 Country Pinpoint — Guess the country from the clues
        </p>
      </footer>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
