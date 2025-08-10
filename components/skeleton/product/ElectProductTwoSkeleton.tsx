import React from 'react'

const ElectProductTwoSkeleton = () => {
    return (
        <div className="flex items-center gap-5 p-3 rounded-lg shadow_elect animate-pulse">

            <div className="bg-gray-300 rounded-lg w-28 sm:w-30 aspect-[7/6]" />

            <div className="w-full flex flex-col justify-between space-y-2">

                <div className="h-5 bg-gray-300 rounded w-3/4" />

                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-yellow-300 rounded" />
                    ))}
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div className="h-5 w-16 bg-gray-300 rounded" />
                    <div className="h-8 w-8 bg-gray-300 rounded" />
                </div>

            </div>

        </div>
    )
}

export default ElectProductTwoSkeleton