import React from 'react';

const MenNewCollectionCardSkeleton = () => {
    return (
        <div className="bg-gray-100 rounded-lg relative overflow-hidden group animate-pulse">

            <div className="w-full h-full aspect-[4/5] bg-gray-200 rounded-lg" />

            <div className="space-y-3 absolute z-10 bottom-0 w-full bg-black/20 p-4 
                translate-y-[55%] lg:translate-y-[55%]">

                <div className="flex items-center justify-between gap-2">
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                    <div className="h-3 w-1/4 bg-gray-100 rounded" />
                </div>

                <div className="h-9 w-full bg-gray-100 rounded-full" />
                
            </div>
        </div>
    );
};

export default MenNewCollectionCardSkeleton;
