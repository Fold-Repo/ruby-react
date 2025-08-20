"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookType } from "@/types/product";
import { ProductActionIconsTwo } from "@/components/product";

interface BookProductCardFourProps {
    product: BookType;
}

const BookProductCardFour: React.FC<BookProductCardFourProps> = ({ product }) => {
    const { id, title, images = [], stock, category } = product;
    const image = images[0] || "/assets/img/landing/book/placeholder.png";

    return (
        <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">

            <div className="bg-gray-100 dark:bg-gray-700/20 p-3 h-full rounded-lg space-y-3">

                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={250}
                    className="max-h-[250px] mx-auto object-contain rounded-md"
                />

                {/* Action Icons */}
                <ProductActionIconsTwo product={product} />

            </div>

            {/* Book Details */}
            <div className="p-5 space-y-2.5 flex flex-col justify-center text-center text-gray-900 dark:text-gray-200">

                <Link href={`/book_collection/${id}`}
                    className="hover:text-primary text-sm lg:!text-[15px] font-medium block !line-clamp-1">
                    {category}
                </Link>

                <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2 capitalize text-slate-500 dark:text-gray-400 text-[12px] md:!text-sm">
                    <span>
                        Available: <span className="font-medium">{stock ?? 0}</span>
                    </span>
                    <span>
                        Sold Out: <span className="font-medium">{2}</span>
                    </span>
                </div>

            </div>

        </div>
    );
};

export default BookProductCardFour;
