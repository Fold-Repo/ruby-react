'use client'

import React from 'react'

const ProductCardThreeSkeleton = () => {
    return (
        <div className="flex flex-col relative duration-500 animate-pulse">

            {/* Image skeleton */}
            <div className="!rounded-t-lg relative overflow-hidden shadow-sm aspect-7/8 bg-gray-100">
                <div className="w-full h-full bg-gray-200 rounded-t-md" />

                {/* Top right icons */}
                <div className="absolute right-3 top-3 flex flex-col gap-y-2">
                    <div className="bg-gray-300 w-8 h-8 rounded-full" />
                    <div className="bg-gray-300 w-8 h-8 rounded-full" />
                </div>

                {/* Bottom button skeleton */}
                <div className="absolute bottom-3 start-3 end-3 px-3">
                    <div className="bg-gray-300 w-full h-10 rounded-md" />
                </div>
            </div>

            {/* Bottom section */}
            <div className="!rounded-b-lg space-y-2 p-3 lg:p-4 bg-gray-100">
                <div className="flex justify-between items-center text-xs">
                    <div className="bg-gray-300 h-4 w-1/3 rounded" />
                    <div className="bg-gray-200 h-4 w-1/4 rounded" />
                </div>

                <div className="flex justify-between items-center">
                    <div className="bg-gray-200 h-5 w-1/2 rounded" />
                    <div className="flex items-center gap-x-1">
                        <div className="bg-gray-200 h-4 w-4 rounded" />
                        <div className="bg-gray-300 h-4 w-4 rounded" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCardThreeSkeleton
