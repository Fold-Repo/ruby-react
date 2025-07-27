import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <div className="relative duration-500 animate-pulse">

            <div className="flex-col">
                {/* Image Skeleton */}
                <div className="relative overflow-hidden shadow-sm rounded-md aspect-7/8 bg-gray-200" />

                {/* Info Section */}
                <div className="space-y-2 pt-3">
                    {/* Title */}
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />

                    {/* Size Badges */}
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <div className="h-6 w-10 bg-gray-100 rounded" />
                            <div className="h-6 w-10 bg-gray-100 rounded" />
                            <div className="h-6 w-10 bg-gray-100 rounded" />
                        </div>

                        {/* Color Swatches */}
                        <div className="flex gap-2">
                            <div className="h-4 w-4 bg-gray-100 rounded-full" />
                            <div className="h-4 w-4 bg-gray-100 rounded-full" />
                            <div className="h-4 w-4 bg-gray-100 rounded-full" />
                        </div>
                    </div>

                    {/* Price & Rating */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex gap-x-2 items-center">
                            <div className="h-4 w-16 bg-gray-200 rounded" />
                            <div className="h-3 w-12 bg-gray-100 rounded" />
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="h-4 w-6 bg-gray-200 rounded" />
                            <div className="h-4 w-4 bg-gray-100 rounded-full" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCardSkeleton