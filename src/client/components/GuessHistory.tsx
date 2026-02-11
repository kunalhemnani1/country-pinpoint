type GuessHistoryProps = {
    guesses: string[];
    answer: string | null;
    maxGuesses: number;
};

export const GuessHistory = ({ guesses, answer, maxGuesses }: GuessHistoryProps) => {
    const slots = Array.from({ length: maxGuesses }, (_, i) => {
        const guess = guesses[i];
        if (!guess) {
            return { status: 'empty' as const, text: '' };
        }
        if (answer && guess.toLowerCase() === answer.toLowerCase()) {
            return { status: 'correct' as const, text: guess };
        }
        return { status: 'wrong' as const, text: guess };
    });

    return (
        <div className="w-full max-w-md mx-auto space-y-2">
            {slots.map((slot, i) => (
                <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${slot.status === 'correct'
                            ? 'bg-emerald-500/20 border border-emerald-500/40'
                            : slot.status === 'wrong'
                                ? 'bg-red-500/10 border border-red-500/20'
                                : 'bg-[#1a1a2e]/50 border border-[#533483]/20'
                        }`}
                >
                    <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${slot.status === 'correct'
                                ? 'bg-emerald-500 text-white'
                                : slot.status === 'wrong'
                                    ? 'bg-red-500/60 text-white'
                                    : 'bg-[#533483]/30 text-gray-500'
                            }`}
                    >
                        {slot.status === 'correct' ? '✓' : slot.status === 'wrong' ? '✗' : i + 1}
                    </div>
                    <span
                        className={`text-sm ${slot.status === 'correct'
                                ? 'text-emerald-400 font-semibold'
                                : slot.status === 'wrong'
                                    ? 'text-red-400 line-through'
                                    : 'text-gray-600'
                            }`}
                    >
                        {slot.text || '—'}
                    </span>
                </div>
            ))}
        </div>
    );
};
