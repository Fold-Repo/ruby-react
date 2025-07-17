import React from 'react'

const BlogListCardSkeleton = () => {
    return (
        <div className="inline-flex flex-wrap md:flex-nowrap gap-3 items-start animate-pulse">

            {/* Image skeleton */}
            <div className="w-full md:w-40 aspect-7/4 md:aspect-7/8 bg-gray-200 rounded-lg" />

            <div className="space-y-3 md:border border-gray-300 md:p-4 rounded-lg w-full">

                {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-3/4" />

                {/* Description skeleton */}
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />

                {/* Footer skeleton */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-2">

                    {/* Button Skeleton */}
                    <div className="h-8 w-24 bg-gray-200 rounded-md" />
                    
                    {/* Meta Info Skeleton */}
                    <div className="flex items-center gap-4">
                        <div className="h-4 w-20 bg-gray-200 rounded" />
                        <div className="h-4 w-14 bg-gray-200 rounded" />
                        <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BlogListCardSkeleton;
