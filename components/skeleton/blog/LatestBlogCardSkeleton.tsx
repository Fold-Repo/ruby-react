import React from 'react';

const SkeletonLine = ({ width = 'w-full', height = 'h-4' }) => (
    <div className={`bg-gray-200 rounded ${width} ${height} animate-pulse`} />
);

const LatestBlogCardSkeleton = () => {
    return (
        <div className="inline-flex gap-x-3 items-center py-4 w-full">

            <div className="bg-gray-200 w-28 h-28 rounded-lg animate-pulse" />

            <div className="flex-1 space-y-2">
                
                <SkeletonLine width="w-3/4" />
                <SkeletonLine width="w-full" />
                <SkeletonLine width="w-5/6" />

                <div className="flex items-center gap-x-2 pt-1">
                    <div className="bg-gray-200 h-6 w-24 rounded-md animate-pulse" />
                    <div className="bg-gray-200 h-6 w-16 rounded-md animate-pulse" />
                </div>

            </div>

        </div>
    );
};

export default LatestBlogCardSkeleton;
