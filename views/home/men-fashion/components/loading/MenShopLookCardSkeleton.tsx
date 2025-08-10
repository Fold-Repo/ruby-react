import React from 'react';

const MenShopLookCardSkeleton = () => {
    return (
        <div className="bg-gray-100 rounded-lg relative overflow-hidden animate-pulse">
            <div className="relative w-full aspect-[7/9] bg-gray-200 rounded-lg" />

            <div className="space-y-2 absolute z-10 bottom-0 w-full bg-gray-300 p-3 text-white">
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-3 w-4/5 bg-gray-200 rounded" />
                <div className="h-9 w-full bg-gray-200 rounded-full" />
            </div>

        </div>
    );
};

export default MenShopLookCardSkeleton;
