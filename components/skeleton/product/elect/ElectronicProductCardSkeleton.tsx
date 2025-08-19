import React from 'react';

const ElectronicProductCardSkeleton = () => {
    return (
        <div className="flex flex-col rounded-xl shadow_elect animate-pulse space-y-4">

            {/* Image */}
            <div className="relative p-3 !pb-0 h-full rounded-lg space-y-7">

                <div className="aspect-7/5 rounded-md overflow-hidden bg-gray-200" />

                {/* Action buttons */}
                <div className="flex justify-center items-center gap-x-4 mt-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-8 h-8 border border-gray-200 rounded-full bg-gray-200"
                        />
                    ))}
                </div>
            </div>


            <div className="p-2 sm:p-4 space-y-4 text-center">

                {/* Name */}
                <div className="h-5 bg-gray-200 rounded mx-auto w-3/4" />

                {/* Star rating */}
                <div className="flex justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-4 rounded bg-gray-200"
                        />
                    ))}
                </div>

                {/* Price */}
                <div className="flex justify-center items-center gap-x-3 mt-2">
                    <div className="h-5 w-16 bg-gray-200 rounded" />
                    <div className="h-4 w-12 bg-gray-200 rounded" />
                </div>

                {/* Button */}
                <div className="h-9 w-full bg-gray-200 rounded-lg mt-4 mx-auto" />
                
            </div>
        </div>
    );
};

export default ElectronicProductCardSkeleton;
