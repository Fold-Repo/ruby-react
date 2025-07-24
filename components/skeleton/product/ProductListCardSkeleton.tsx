import React from 'react'

const ProductListCardSkeleton = () => {
    return (
        <div className="relative w-full mx-auto animate-pulse">
            <div className="flex items-start">

                {/* Image skeleton */}
                <div className="relative shrink-0 w-36 md:w-60 aspect-7/8 rounded-md bg-gray-200" />

                {/* Info section skeleton */}
                <div className="ms-6 space-y-2 md:space-y-3 max-w-3xl w-full">

                    <div className="h-5 w-2/3 rounded bg-gray-200" />

                    <div className="hidden md:block">
                        <div className="h-4 w-full bg-gray-200 rounded mb-1" />
                    </div>

                    <div className="flex gap-x-3 items-center">
                        <div className="h-5 w-20 rounded bg-gray-200" />
                        <div className="h-4 w-16 rounded bg-gray-100" />
                    </div>

                    <div className="!space-y-3">
                        <div className="flex gap-2">
                            <div className="h-6 w-10 rounded bg-gray-100" />
                            <div className="h-6 w-10 rounded bg-gray-100" />
                            <div className="h-6 w-10 rounded bg-gray-100" />
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 rounded-full bg-gray-100" />
                            <div className="h-6 w-6 rounded-full bg-gray-100" />
                            <div className="h-6 w-6 rounded-full bg-gray-100" />
                        </div>
                    </div>

                    <div className="h-4 w-24 bg-gray-200 rounded" />

                    <div className="hidden md:flex gap-x-2 items-center">
                        <div className="h-4 w-32 bg-gray-100 rounded" />
                        <div className="h-4 w-24 bg-gray-100 rounded" />
                    </div>

                    <div className="mt-3">
                        <div className="h-8 w-32 rounded-xl bg-gray-200" />
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default ProductListCardSkeleton