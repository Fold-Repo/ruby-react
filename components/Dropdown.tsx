'use client';

import { useClickOutside } from '@/hooks';
import { cn } from '@/lib';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type DropdownOption = {
    label: string;
    value: string;
};

type DropdownProps = {
    label?: string;
    options: DropdownOption[];
    selected: string;
    onSelect: (value: string) => void;
    className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    selected,
    onSelect,
    className,
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => setOpen(false));

    const selectedLabel = options.find(opt => opt.value === selected)?.label || 'Select';

    return (
        <div ref={dropdownRef} className="relative inline-flex items-center gap-x-2 !z-20">

            {label && (
                <span className="hidden md:block font-medium text-gray-700 dark:text-gray-200 text-sm">
                    {label}
                </span>
            )}

            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    'cursor-pointer inline-flex items-center border border-primary rounded-full py-2 gap-x-1 px-3 text-[13px] text-gray-700 dark:text-gray-200 bg-transparent',
                    className
                )}>
                <span>{selectedLabel}</span>
                <ChevronDownIcon className="size-4" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 rounded-lg min-w-48 p-1 bg-white dark:bg-gray-800 z-10 shadow-lg origin-top">

                        <ul className="py-1 font-medium text-[12px] text-gray-700 dark:text-gray-200">
                            {options.map(({ label, value }) => (
                                <li key={value}>
                                    <button
                                        onClick={() => {
                                            onSelect(value);
                                            setOpen(false);
                                        }}
                                        className="cursor-pointer w-full text-left block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
