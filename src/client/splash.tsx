import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-screen bg-[#0a0a1a] gap-6 px-4">
      {/* Globe Animation */}
      <div className="relative">
        <div className="text-6xl animate-float">🌍</div>
        <div className="absolute -inset-4 bg-[#e94560]/10 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#e94560] via-[#c94b7c] to-[#533483] bg-clip-text text-transparent">
          Country Pinpoint
        </h1>
        <p className="text-sm text-gray-400 max-w-[260px] leading-relaxed">
          Can you guess the country from 5 cryptic clues? Start with the hardest — each wrong guess reveals an easier hint.
        </p>
      </div>

      {/* Info Cards */}
      <div className="flex gap-4 text-center">
        <div className="bg-[#1a1a2e] border border-[#533483]/30 rounded-xl px-4 py-3 space-y-1">
          <p className="text-lg font-bold text-[#e94560]">5</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Clues</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#533483]/30 rounded-xl px-4 py-3 space-y-1">
          <p className="text-lg font-bold text-[#e94560]">5</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Guesses</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#533483]/30 rounded-xl px-4 py-3 space-y-1">
          <p className="text-lg font-bold text-[#e94560]">∞</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Daily</p>
        </div>
      </div>

      {/* Play Button */}
      <button
        className="bg-gradient-to-r from-[#e94560] to-[#533483] text-white font-bold px-8 py-3 rounded-full cursor-pointer transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#e94560]/25 active:scale-95 text-sm uppercase tracking-wider"
        onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
      >
        Play Now
      </button>

      {/* Username */}
      <p className="text-xs text-gray-600">
        Playing as <span className="text-gray-400">{context.username ?? 'Guest'}</span>
      </p>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
