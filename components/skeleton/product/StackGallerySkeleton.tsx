'use client';

import React from 'react';
import { cn } from '@/lib';

const layoutPattern = [2, 1, 2, 2];

interface StackGallerySkeletonProps {
    count?: number;
}

const StackGallerySkeleton: React.FC<StackGallerySkeletonProps> = ({ count = 8 }) => {
    const groups: number[][] = [];
    let i = 0;
    let patternIndex = 0;

    while (i < count) {
        const layoutSize = layoutPattern[patternIndex % layoutPattern.length];
        groups.push(
            Array.from({ length: Math.min(layoutSize, count - i) }, (_, j) => i + j)
        );
        i += layoutSize;
        patternIndex++;
    }

    return (
        <div className="flex flex-col gap-5 overflow-hidden duration-300 transition-all animate-pulse">
            {groups.map((group, idx) => (
                <div key={idx} className={`grid grid-cols-${group.length} gap-3`}>
                    {group.map((_, j) => (
                        <div
                            key={j}
                            className={cn(
                                'aspect-[7/8] w-full rounded-xl bg-gradient-to-br',
                                idx % 2 === 0
                                    ? 'from-slate-200 to-slate-100'
                                    : 'from-slate-100 to-slate-200'
                            )}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default StackGallerySkeleton;
