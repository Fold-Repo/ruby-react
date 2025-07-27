import React from "react";

const CategoryCardTwoSkeleton = () => {
    return (
        <div className="relative group duration-500 overflow-hidden rounded-full animate-pulse whitespace-nowrap">
            
            <div className="w-full h-full max-w-[220px] max-h-[220px] aspect-square bg-gray-200 rounded-full" />

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10">

                <div className="py-4 px-12 inline-block text-xs text-center bg-gray-100 text-transparent rounded-xl">

                </div>

            </div>

        </div>
    );
};

export default CategoryCardTwoSkeleton;
