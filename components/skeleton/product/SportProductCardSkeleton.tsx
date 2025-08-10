import React from 'react'

const SportProductCardSkeleton = () => {
    return (
        <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg animate-pulse">

            {/* Image skeleton */}
            <div className="rounded-lg aspect-7/8 bg-gray-200 w-28 sm:w-30" />

            <div className="w-full space-y-2 flex flex-col justify-between">

                {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-2/3" />

                {/* Rating skeleton */}
                <div className="flex gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                </div>

                {/* Price skeleton */}
                <div className="flex gap-3">
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                    <div className="h-3 w-12 bg-gray-200 rounded" />
                </div>

                {/* Button skeleton */}
                <div className="h-8 bg-gray-200 rounded w-full" />
            </div>
        </div>
    )
}

export default SportProductCardSkeleton
