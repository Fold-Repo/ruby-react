'use client';

import React from 'react';

const SkeletonLine = ({ width = "w-full", height = "h-4" }) => (
    <div className={`bg-gray-200 rounded ${width} ${height} animate-pulse`} />
);

const BlogCardSkeleton = ({ variant = 'detailed' }: { variant?: 'compact' | 'detailed' }) => {
    return (
        <div className={`group duration-200 ${variant === 'detailed' ? 'space-y-3' : 'space-y-2'}`}>

            {variant === 'detailed' && (
                <SkeletonLine width="w-3/4" height="h-4" />
            )}

            <div className="bg-gray-200 rounded-lg w-full aspect-[7/4] animate-pulse" />

            {variant === 'compact' && (
                <SkeletonLine width="w-3/4" height="h-4" />
            )}

            {variant === 'detailed' && (
                <>
                    <div className="flex items-center flex-wrap gap-3 justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-300 rounded-full h-5 w-5 animate-pulse" />
                            <SkeletonLine width="w-24" height="h-4" />
                        </div>

                        <div className="flex items-center gap-4">
                            <SkeletonLine width="w-20" height="h-4" />
                            <SkeletonLine width="w-16" height="h-4" />
                            <SkeletonLine width="w-10" height="h-4" />
                        </div>
                    </div>

                    <SkeletonLine width="w-full" height="h-4" />
                    <SkeletonLine width="w-11/12" height="h-4" />
                    <SkeletonLine width="w-10/12" height="h-4" />
                </>
            )}

            {variant === 'compact' && (
                <>
                    <SkeletonLine width="w-full" height="h-4" />
                    <SkeletonLine width="w-11/12" height="h-4" />

                    <div className="flex items-center flex-wrap gap-y-3 gap-x-6">
                        <SkeletonLine width="w-24" height="h-4" />
                        <SkeletonLine width="w-16" height="h-4" />
                        <SkeletonLine width="w-10" height="h-4" />
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogCardSkeleton;
