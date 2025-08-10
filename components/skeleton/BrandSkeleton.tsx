import React from 'react'

const BrandSkeleton = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-3 overflow-hidden animate-pulse">

            <div className="bg-gray-200 w-full aspect-[7/9] rounded-xl" />

            <div className="bg-gray-200 h-4 w-24 rounded" />

        </div>
    )
}

export default BrandSkeleton