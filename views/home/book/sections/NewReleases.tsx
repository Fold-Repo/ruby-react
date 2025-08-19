"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button, Container } from "@/components";
import Link from "next/link";

const releases = [
    {
        id: 1,
        image: "/img/books/10.jpg",
        title: "Enrich Your Library Today!",
        description:
            "Enjoy up to 60% off on a wide selection of bestselling books across all genres. Don’t miss out — expand your collection for less!",
    },
    {
        id: 2,
        image: "/img/books/11.jpg",
        title: "New Releases Are Here!",
        description:
            "Be among the first to explore the latest arrivals in fiction, non-fiction, and more. Discover your next favorite read today!",
    },
];

const NewReleases = () => {
    return (
        <Container>

            <div className="grid sm:grid-cols-2 gap-4">
                {releases.map((release) => (
                    <div key={release.id}
                        className="lg:max-h-[300px] flex flex-col lg:flex-row border border-gray-200 rounded-xl overflow-hidden">

                        <div className="lg:w-[40%]">
                            <Image
                                src={release.image}
                                alt={release.title}
                                width={400}
                                height={300}
                                className="aspect-[7/5] lg:aspect-auto object-cover object-center w-full lg:object-contain"
                            />
                        </div>

                        <div className="lg:w-[60%] text-center space-y-4 self-center p-4 lg:p-6">

                            <h2 className="font-bold text-base lg:!text-lg">{release.title}</h2>
                            <p className="text-sm">{release.description}</p>

                            <Link href="/shop/shop_features/book_collection" className='flex items-center justify-center'>
                                <Button
                                    rounded="lg"
                                    className="bg-black text-white px-8 text-xs m-auto" rightIcon={<ArrowUpRightIcon className="size-4" />}>
                                    Shop Now
                                </Button>
                            </Link>

                        </div>

                    </div>
                ))}
            </div>

        </Container>
    );
};

export default NewReleases;
