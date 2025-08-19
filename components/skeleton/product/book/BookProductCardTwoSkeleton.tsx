import React from "react";

const BookProductCardTwoSkeleton = () => {
    return (
        <div className="relative duration-500 w-full mx-auto border border-gray-100 rounded-lg p-4 animate-pulse">

            <div className="flex lg:items-center">

                {/* Image skeleton */}
                <div className="relative overflow-hidden shrink-0 shadow-sm rounded-md duration-500 aspect-7/8">
                    <div className="w-36 md:w-52 h-full rounded-md bg-gradient-to-r from-gray-100 to-gray-200"></div>
                </div>

                {/* Details section */}
                <div className="ms-6 space-y-2 lg:space-y-3 w-full">

                    {/* Title */}
                    <div className="h-5 w-2/3 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>

                    {/* Ratings + reviews */}
                    <div className="flex flex-wrap items-center gap-5 justify-between">
                        <div className="flex items-center gap-x-3">
                            <div className="h-4 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                            <div className="h-3 w-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                        </div>
                        <div className="hidden lg:flex items-center gap-3">
                            <div className="h-4 w-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                            <div className="h-4 w-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Author, Publisher, Year, Status */}
                    <div className="hidden lg:flex flex-wrap items-end gap-5 justify-between pt-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-5 w-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded"
                            ></div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-2 pt-3">
                        <div className="h-3 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                        <div className="h-3 w-11/12 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                        <div className="h-3 w-10/12 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                    </div>

                    {/* Price + buttons */}
                    <div className="flex flex-wrap items-center pt-2 gap-5 justify-between">
                        {/* Price */}
                        <div className="h-5 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>

                        {/* Buttons */}
                        <div className="hidden lg:flex flex-wrap items-center gap-4">
                            <div className="h-8 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl"></div>
                            <div className="h-8 w-40 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl"></div>
                            <div className="h-9 w-9 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md"></div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookProductCardTwoSkeleton;
