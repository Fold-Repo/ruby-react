'use client';

import React from 'react';
import { cn } from '@/lib'; 

const Skeleton = ({ className }: { className?: string }) => (
    <div className={cn("bg-slate-200 animate-pulse rounded", className)} />
);

const ProductDetailsSkeleton = () => {
    return (
        <div className="space-y-4">

            <Skeleton className="h-6 w-3/4" /> {/* title */}
            <Skeleton className="h-4 w-full hidden md:block" /> {/* description */}
            <Skeleton className="h-8 w-1/2 max-w-max" /> {/* stock info */}
            <Skeleton className="h-6 w-1/3" /> {/* price */}
            <Skeleton className="h-6 w-1/4" /> {/* old price */}

            {/* Color Selection */}
            <div className="flex flex-col gap-y-3">
                <Skeleton className="h-5 w-24" />
                <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-6 w-6 rounded-full" />
                    ))}
                </div>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col gap-y-3">
                <Skeleton className="h-5 w-24" />
                <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-7 w-7 rounded" />
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-y-3">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-10 w-28 rounded" />
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-3">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            {/* Product Info Section */}
            <div className="divide-y divide-gray-300 pt-2 space-y-4">
                <div className="space-y-4 py-4">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>

                <div className="space-y-3 py-4">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-1/2" />
                    ))}
                    <Skeleton className="h-10 w-60" />
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsSkeleton;
