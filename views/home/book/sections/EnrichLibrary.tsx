"use client";

import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components";

const EnrichLibrary = () => {
    return (
        <div className="bg-[#DCF763] dark:bg-gray-900 flex flex-col lg:flex-row overflow-hidden gap-5">

            <div className="lg:w-1/2">
                <img src="/img/books/12.png" alt="Books" className="dark:brightness-90" />
            </div>

            <div className="container max-w-2xl lg:w-1/2 text-center space-y-7 self-center py-6 text-gray-900 dark:text-gray-200">

                <h2 className="font-bold text-xl md:!text-2xl lg:!text-3xl">
                    Enrich Your Library Today!
                </h2>

                <p className="text-sm font-medium leading-7">
                    Discover handpicked titles in Finance, Psychology, and more — all on
                    sale now. Expand your knowledge with books curated to inspire and
                    inform. Don’t miss this opportunity!
                </p>

                <Link href="/collection" className="m-auto flex items-center">

                    <Button
                        className="bg-black text-white dark:bg-gray-700 dark:text-white px-8 text-xs m-auto"
                        rounded="lg"
                        rightIcon={<ArrowUpRightIcon className="size-4" />}>
                        View Collection
                    </Button>

                </Link>

            </div>

        </div>
    );
};

export default EnrichLibrary;
