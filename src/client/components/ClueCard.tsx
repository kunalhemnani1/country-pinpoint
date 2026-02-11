import type { Clue } from '../../shared/api';

type ClueCardProps = {
    clue: Clue;
    index: number;
    total: number;
    isNew: boolean;
};

const categoryIcons: Record<string, string> = {
    'Tradition': '🏮',
    'History': '📜',
    'Culture': '🎭',
    'Geography': '🌍',
    'Landmark': '🏛️',
    'Nature': '🌿',
    'Science': '🔬',
    'Food': '🍽️',
    'Economy': '💰',
    'Technology': '💻',
    'Sports': '⚽',
    'Governance': '⚖️',
    'Education': '📚',
    'Stat': '📊',
};

export const ClueCard = ({ clue, index, total, isNew }: ClueCardProps) => {
    const icon = categoryIcons[clue.category] || '💡';
    const difficultyColors = [
        'from-[#e94560]/20 to-[#e94560]/5 border-[#e94560]/30',
        'from-[#ff6b6b]/20 to-[#ff6b6b]/5 border-[#ff6b6b]/30',
        'from-[#feca57]/20 to-[#feca57]/5 border-[#feca57]/30',
        'from-[#48dbfb]/20 to-[#48dbfb]/5 border-[#48dbfb]/30',
        'from-[#0abde3]/20 to-[#0abde3]/5 border-[#0abde3]/30',
    ];

    return (
        <div
            className={`bg-gradient-to-r ${difficultyColors[index] || difficultyColors[0]} border rounded-xl p-4 transition-all duration-500 ${isNew ? 'animate-slide-in' : ''
                }`}
        >
            <div className="flex items-start gap-3">
                <div className="flex flex-col items-center gap-1 shrink-0">
                    <span className="text-lg">{icon}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {index + 1}/{total}
                    </span>
                </div>
                <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                        {clue.category}
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">{clue.text}</p>
                </div>
            </div>
        </div>
    );
};
