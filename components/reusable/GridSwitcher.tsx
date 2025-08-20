'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib';

const gridOptions = [
    { value: '1', alt: '1 Column', icon: '/icon/grid_1.svg', iconActive: '/icon/grid_1_active.svg' },
    { value: '2', alt: '2 Columns', icon: '/icon/grid_2.svg', iconActive: '/icon/grid_2_active.svg' },
    { value: '3', alt: '3 Columns', icon: '/icon/grid_3.svg', iconActive: '/icon/grid_3_active.svg', visibility: 'md' },
    { value: '4', alt: '4 Columns', icon: '/icon/grid_4.svg', iconActive: '/icon/grid_4_active.svg', visibility: 'lg' },
];

type GridSwitcherProps = {
    label?: string;
    selected: string;
    onSelect: (value: string) => void;
    className?: string;
};

const GridSwitcher: React.FC<GridSwitcherProps> = ({
    label = 'Grid:',
    selected,
    onSelect,
    className,
}) => {
    return (
        <div className={cn('items-center inline-flex gap-x-2', className)}>
            {label && (
                <span className="font-medium text-sm text-gray-700 dark:text-gray-200 hidden md:block">
                    {label}
                </span>
            )}

            <div className="inline-flex items-center border border-primary rounded-full py-2 gap-x-2.5 px-3.5 bg-white dark:bg-transparent">
                {gridOptions.map(({ value, icon, iconActive, alt, visibility }) => (
                    <button
                        key={value}
                        onClick={() => onSelect(value)}
                        className={cn(
                            visibility === 'md' && 'hidden md:block',
                            visibility === 'lg' && 'hidden lg:block',
                            'focus:outline-none cursor-pointer'
                        )}>
                        <Image
                            src={selected === value ? iconActive : icon}
                            alt={alt}
                            width={selected === value ? 40 : 24}
                            height={selected === value ? 40 : 24}
                            className={cn(
                                value === '1' && 'w-3.5',
                                value === '2' && 'w-4.5',
                                value === '3' && 'w-7',
                                value === '4' && 'w-10',
                                'transition-opacity dark:invert'
                            )}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GridSwitcher;
