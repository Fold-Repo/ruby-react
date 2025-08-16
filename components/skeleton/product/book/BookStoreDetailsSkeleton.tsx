"use client";

import React from "react";
import { Container } from "@/components";

const BookStoreDetailsSkeleton = () => {
    return (
        <Container>
            <div className="section-lg space-y-20 animate-pulse">

                {/* ====== MAIN GRID ====== */}
                <div className="grid lg:grid-cols-12 gap-x-5 gap-y-16">
                    {/* Book Image */}
                    <div className="lg:col-span-4 2xl:col-span-3">
                        <div className="w-full aspect-[7/9] bg-gray-200 rounded-md" />
                    </div>

                    {/* Book Details */}
                    <div className="lg:col-span-8 2xl:col-span-9 space-y-4">
                        <div className="h-6 w-1/2 bg-gray-200 rounded" /> {/* title */}
                        <div className="flex gap-3">
                            <div className="h-4 w-24 bg-gray-200 rounded" /> {/* rating */}
                            <div className="h-4 w-20 bg-gray-200 rounded" /> {/* reviews */}
                            <div className="h-4 w-20 bg-gray-200 rounded" /> {/* likes */}
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                        </div>

                        <div className="space-y-2 pt-3">
                            <div className="h-3 w-full bg-gray-200 rounded" />
                            <div className="h-3 w-5/6 bg-gray-200 rounded" />
                            <div className="h-3 w-2/3 bg-gray-200 rounded" />
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <div className="h-6 w-20 bg-gray-200 rounded" /> {/* price */}
                            <div className="h-6 w-16 bg-gray-200 rounded" /> {/* old price */}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="h-10 w-28 bg-gray-200 rounded" /> {/* qty selector */}
                            <div className="h-10 w-40 bg-gray-200 rounded" /> {/* add to cart */}
                            <div className="h-10 w-10 bg-gray-200 rounded" /> {/* wishlist */}
                        </div>
                    </div>
                </div>

                {/* ====== DETAILS + RELATED ====== */}
                <div className="grid xl:grid-cols-12 gap-x-5 gap-y-10">
                    {/* Tabs & Details */}
                    <div className="xl:col-span-8 space-y-6">
                        <div className="flex gap-4 border-b border-gray-300 pb-2">
                            <div className="h-6 w-32 bg-gray-200 rounded" />
                            <div className="h-6 w-32 bg-gray-200 rounded" />
                        </div>

                        <div className="space-y-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between py-3 border-b border-gray-200"
                                >
                                    <div className="h-4 w-32 bg-gray-200 rounded" />
                                    <div className="h-4 w-48 bg-gray-200 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Books */}
                    <div className="xl:col-span-4 space-y-4">
                        <div className="h-5 w-32 bg-gray-200 rounded" />
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex gap-3 border border-gray-200 rounded-md p-2"
                                >
                                    <div className="w-20 aspect-[5/6] bg-gray-200 rounded" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 w-32 bg-gray-200 rounded" />
                                        <div className="h-4 w-24 bg-gray-200 rounded" />
                                        <div className="h-4 w-20 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default BookStoreDetailsSkeleton;
