import React from 'react'

const ProductTopSkeleton = () => {
    return (
        <div className="hidden xl:flex items-center justify-between gap-5 animate-pulse">
            {/* Image & Details */}
            <div className="flex items-center gap-3">
                <div className="w-32 aspect-square bg-slate-200 rounded-lg" />

                <div className="space-y-2 max-w-lg">
                    <div className="h-4 bg-slate-200 rounded w-60" />
                    <div className="h-3 bg-slate-200 rounded w-72" />
                    <div className="h-3 bg-slate-200 rounded w-52" />
                    <div className="flex gap-x-3">
                        <div className="h-4 bg-slate-200 rounded w-16" />
                        <div className="h-4 bg-slate-300 rounded w-12" />
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-3">
                {/* Size */}
                <div className="h-10 w-24 bg-slate-200 rounded-xl" />
                {/* Color */}
                <div className="h-10 w-24 bg-slate-200 rounded-xl" />
                {/* Quantity */}
                <div className="h-10 w-24 bg-slate-200 rounded-xl" />
                {/* Button */}
                <div className="h-10 w-32 bg-slate-300 rounded-xl" />
            </div>
        </div>
    )
}

export default ProductTopSkeleton
