"use client";

import React from "react";

const BookProductCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col border border-gray-100 rounded-lg animate-pulse">

            <div className="bg-gray-50/50 p-3 h-full rounded-lg space-y-3">
                <div className="aspect-[7/8] mx-auto w-[90%] bg-gray-200 rounded-md" />
                <div className="h-6 w-16 bg-gray-200 rounded-md mx-auto" />
            </div>

            <div className="p-3 space-y-2">

                <div className="flex items-center justify-between">
                    <div className="h-4 w-32 bg-gray-200 rounded" /> 
                    <div className="flex gap-x-3 items-center">
                        <div className="h-4 w-10 bg-gray-200 rounded" /> 
                        <div className="h-3 w-8 bg-gray-200 rounded" /> 
                    </div>
                </div>

                <div className="h-9 w-full bg-gray-200 rounded-lg" />

            </div>
        </div>
    );
};

export default BookProductCardSkeleton;
