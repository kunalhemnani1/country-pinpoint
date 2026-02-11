type ResultScreenProps = {
    solved: boolean;
    answer: string;
    guesses: string[];
    totalPlayers: number;
    guessDistribution: number[];
};

export const ResultScreen = ({
    solved,
    answer,
    guesses,
    totalPlayers,
    guessDistribution,
}: ResultScreenProps) => {
    const guessCount = guesses.length;
    const maxDist = Math.max(...guessDistribution, 1);
    const labels = ['1st', '2nd', '3rd', '4th', '5th', '✗'];

    return (
        <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
            {/* Result Header */}
            <div className="text-center space-y-3">
                <div className={`text-5xl ${solved ? '' : 'opacity-60'}`}>
                    {solved ? '🎉' : '😔'}
                </div>
                <h2
                    className={`text-2xl font-bold ${solved ? 'text-emerald-400' : 'text-red-400'
                        }`}
                >
                    {solved ? 'Correct!' : 'Better luck next time!'}
                </h2>
                <div className="space-y-1">
                    <p className="text-gray-400 text-sm">The answer was</p>
                    <p className="text-3xl font-bold text-white tracking-wide">{answer}</p>
                </div>
                {solved && (
                    <p className="text-sm text-gray-400">
                        You got it in <span className="text-[#e94560] font-bold">{guessCount}</span>{' '}
                        {guessCount === 1 ? 'guess' : 'guesses'}!
                    </p>
                )}
            </div>

            {/* Stats */}
            {totalPlayers > 0 && (
                <div className="bg-[#1a1a2e] rounded-xl p-5 border border-[#533483]/30 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                            Community Stats
                        </h3>
                        <span className="text-xs text-gray-500">{totalPlayers} players</span>
                    </div>
                    <div className="space-y-2">
                        {guessDistribution.map((count, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-xs text-gray-400 w-6 text-right font-mono">
                                    {labels[i]}
                                </span>
                                <div className="flex-1 h-6 bg-[#0f3460]/30 rounded-md overflow-hidden">
                                    <div
                                        className={`h-full rounded-md transition-all duration-700 flex items-center justify-end pr-2 ${i === guessCount - 1 && solved
                                                ? 'bg-emerald-500'
                                                : i === 5
                                                    ? 'bg-red-500/60'
                                                    : 'bg-[#533483]/60'
                                            }`}
                                        style={{
                                            width: `${Math.max((count / maxDist) * 100, count > 0 ? 12 : 0)}%`,
                                        }}
                                    >
                                        {count > 0 && (
                                            <span className="text-[10px] text-white font-bold">{count}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Share */}
            <div className="text-center">
                <p className="text-xs text-gray-500 mt-2">
                    New puzzle available daily!
                </p>
            </div>
        </div>
    );
};
