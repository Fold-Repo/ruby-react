import React from 'react'

type SkeletonProps = {
    count?: number
}

const CollectionSkeleton: React.FC<SkeletonProps> = ({ count = 6 }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
            {Array.from({ length: count }).map((_, idx) => (
                <div key={idx}
                    className="rounded-tl-3xl rounded-br-3xl overflow-hidden bg-gray-100 animate-pulse">
                    <div className="aspect-[4/5] bg-gray-200 w-full" />
                    <div className="p-4 space-y-2">
                        <div className="h-4 w-1/3 bg-gray-200 rounded" />
                        <div className="h-3 w-1/2 bg-gray-200 rounded" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CollectionSkeleton
