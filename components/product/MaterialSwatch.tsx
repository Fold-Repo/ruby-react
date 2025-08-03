"use client"

import { cn } from '@/lib';
import { MaterialType } from '@/types';
import { Image } from '@heroui/react';
import React from 'react';

type Props = {
    material: MaterialType[];
    value?: string;
    onHover?: (color: MaterialType) => void;
    onClick?: (color: MaterialType) => void;
    className?: string;
};

export default function MaterialSwatch({
    material,
    value,
    onHover,
    onClick,
    className,
}: Props) {
    return (
        <ul className="flex gap-x-1.5 flex-wrap">
            {material.map((mat) => {
                const isActive = value === mat.image || value === mat.name;

                return (
                    <li key={mat.name}>
                        <button
                            type="button"
                            title={mat.name}
                            onMouseEnter={() => onHover?.(mat)}
                            onClick={() => onClick?.(mat)}
                            className={cn(
                                'inline-flex rounded-lg overflow-hidden cursor-pointer',
                                isActive && 'border-2 border-primary',
                                className
                            )}>
                            <Image
                                src={mat.image}
                                width={100}
                                className="w-12 aspect-7/8 rounded-lg object-cover"
                                alt={mat.name || 'Material'}
                            />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
