'use client';

import { cn } from '@/lib';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface SearchInputProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    className?: string;
    value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search...',
    onSearch,
    className,
    value,
}) => {
    const [query, setQuery] = useState(value || '');
    const [debouncedQuery] = useDebounce(query, 500);

    
    useEffect(() => {
        if (value !== undefined && value !== query) {
            setQuery(value);
        }
    }, [value]);

    useEffect(() => {
        if (onSearch && debouncedQuery !== value) {
            onSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5 text-black">
                <MagnifyingGlassIcon className="size-4" />
            </div>
            <input
                type="search"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className={cn(
                    'py-3 ps-10 pe-4 block w-full rounded-lg text-sm focus:ring-2 !border-0 focus:ring-primary text-gray-700 bg-[#F3F8F7] outline-0',
                    className
                )}
            />
        </div>
    );
};

export default SearchInput;
