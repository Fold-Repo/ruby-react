"use client";

import React from "react";
import { cn } from "@/lib";

interface SkeletonProps {
    imageClassName?: string;
}

const BookProductCardThreeSkeleton: React.FC<SkeletonProps> = ({ imageClassName }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start border border-gray-200 p-2 md:p-3 rounded-xl w-full animate-pulse">

            {/* Image skeleton */}
            <div
                className={cn(
                    "aspect-[5/7] mx-auto md:mx-0 h-full w-full md:w-44 rounded-md bg-gray-200",
                    imageClassName
                )}
            ></div>

            {/* Details skeleton */}
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left md:ms-6 
        space-y-3 py-2 w-full">

                {/* Author & Title */}
                <div className="space-y-2 w-full">
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    <div className="h-4 w-40 bg-gray-200 rounded mx-auto md:mx-0"></div>
                </div>

                {/* Price */}
                <div className="flex gap-x-3 items-center">
                    <div className="h-3 w-12 bg-gray-200 rounded"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>

                {/* Rating */}
                <div className="hidden md:flex items-center gap-x-2">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>

                {/* Stock Info */}
                <div className="hidden md:flex items-center gap-x-4">
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>

                {/* Actions */}
                <div className="h-6 w-28 bg-gray-200 rounded hidden md:block"></div>

                {/* Button */}
                <div className="h-9 w-full bg-gray-200 rounded-xl mt-3"></div>
                
            </div>
        </div>
    );
};

export default BookProductCardThreeSkeleton;
