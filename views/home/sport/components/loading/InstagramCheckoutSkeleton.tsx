import React from 'react'

const InstagramCheckoutSkeleton = () => {
    return (
        <div className="relative h-full rounded-xl aspect-[7/7] overflow-hidden">

            {/* Image Skeleton */}
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />

            {/* Button Skeleton */}
            <div className="absolute bottom-1 w-full p-2">
                <div className="h-8 bg-gray-100 animate-pulse rounded-lg w-full" />
            </div>

        </div>
    )
}

export default InstagramCheckoutSkeleton
