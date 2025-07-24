import React from "react";

const CategoryCardSkeleton = () => {
    return (
        <div className="relative group duration-500 overflow-hidden cursor-pointer rounded-xl animate-pulse">
            
            <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl" />

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10">

                <div className="py-4 px-12 inline-block text-xs text-center bg-gray-100 text-transparent rounded-xl">

                </div>

            </div>

        </div>
    );
};

export default CategoryCardSkeleton;
