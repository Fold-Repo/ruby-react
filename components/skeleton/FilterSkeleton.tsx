'use client';

import React from 'react';

interface FilterSkeletonProps {
    girid?: boolean
}

const FilterSkeleton: React.FC<FilterSkeletonProps> = ({ girid}) => {
    if (girid) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-3 pt-5 animate-pulse">
                {Array.from({ length: 4 }).map((_, colIdx) => (
                    <div key={colIdx} className="space-y-5">
                        {Array.from({ length: 2 }).map((_, blockIdx) => (
                            <div key={blockIdx} className="space-y-3">
                                <div className="h-7 bg-gray-200 rounded" />
                                <div className="space-y-2">
                                    {Array.from({ length: 4 }).map((_, itemIdx) => (
                                        <div key={itemIdx} className="flex items-center space-x-3">
                                            <div className="size-5 bg-gray-200/60 rounded-full" />
                                            <div className="h-4 bg-gray-200/60 rounded w-1/2" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    // Default list layout
    return (
        <div className="space-y-5 pt-5 px-3 animate-pulse">
            {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="space-y-3">
                    <div className="h-7 bg-gray-200 rounded" />
                    <div className="space-y-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <div className="size-5 bg-gray-200/60 rounded-full" />
                                <div className="h-4 bg-gray-200/60 rounded w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterSkeleton;
