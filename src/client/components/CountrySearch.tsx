import React, { useState, useRef, useEffect, useMemo } from 'react';
import { countries } from '../../shared/countries';

type CountrySearchProps = {
    onSelect: (country: string) => void;
    disabled: boolean;
    submitting: boolean;
};

export const CountrySearch = ({ onSelect, disabled, submitting }: CountrySearchProps) => {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filtered = useMemo(() => {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        return countries.filter((c) => c.toLowerCase().includes(q)).slice(0, 6);
    }, [query]);

    const handleSelect = (country: string) => {
        onSelect(country);
        setQuery('');
        setShowDropdown(false);
        setHighlightedIndex(0);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setShowDropdown(true);
        setHighlightedIndex(0);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const selected = filtered[highlightedIndex];
            if (selected) handleSelect(selected);
        } else if (e.key === 'Escape') {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
            ) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="flex gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => setShowDropdown(true)}
                    onKeyDown={handleKeyDown}
                    disabled={disabled || submitting}
                    placeholder="Type a country name..."
                    className="flex-1 px-4 py-3 bg-[#1a1a2e] border border-[#533483]/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e94560] focus:ring-1 focus:ring-[#e94560] transition-all text-sm"
                />
            </div>
            {showDropdown && filtered.length > 0 && (
                <div
                    ref={dropdownRef}
                    className="absolute z-50 w-full mt-1 bg-[#16213e] border border-[#533483]/50 rounded-xl overflow-hidden shadow-2xl"
                >
                    {filtered.map((country, i) => (
                        <button
                            key={country}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer ${i === highlightedIndex
                                    ? 'bg-[#e94560]/20 text-[#e94560]'
                                    : 'text-gray-300 hover:bg-[#533483]/20'
                                }`}
                            onClick={() => handleSelect(country)}
                            onMouseEnter={() => setHighlightedIndex(i)}
                        >
                            {country}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
