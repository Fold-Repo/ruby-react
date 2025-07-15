import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib';

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    id?: string;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    placeholder = 'Search...',
    name,
    id,
    className = '',

}) => {
    return (
        <div className="relative w-full">

            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5 text-black">
                <MagnifyingGlassIcon className="size-4" />
            </div>

            <input
                type="search"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cn(
                    'py-3 ps-12 pe-4 block w-full rounded-lg text-sm focus:ring-2 !border-0 focus:ring-primary text-gray-700 bg-[#F3F8F7] outline-0',
                    className
                )}
            />
        </div>
    );
};

export default SearchInput;
