"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib";
import { BookType } from "@/types/product";
import { ProductActionIconsTwo } from "@/components/product";
import { Button } from "@/components/ui";

interface BookProductCardProps {
    product: BookType;
}

const BookProductCard: React.FC<BookProductCardProps> = ({ product }) => {
    const { id, title, price, oldPrice, images = [] } = product;

    const image = images[0] || '';

    return (
        <div className="flex flex-col border border-gray-100 rounded-lg">

            <div className="bg-gray-50/50 p-3 h-full rounded-lg space-y-3">

                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={700}
                    className="aspect-7/8 mx-auto w-[90%] object-contain rounded-md"
                />

                <ProductActionIconsTwo product={product} />

            </div>

            {/* Details */}
            <div className="p-3 space-y-2">

                <div className="flex items-center justify-between">

                    <Link href={`book_collection/${id}`}
                        className="hover:text-primary text-sm lg:!text-[15px] font-medium block !line-clamp-1">
                        {title}
                    </Link>

                    <div className="items-center flex gap-x-3 text-[13px] font-semibold">
                        <p>{formatCurrency(price)}</p>
                        {oldPrice && (
                            <p className="text-gray-500 line-through text-xs">
                                {formatCurrency(oldPrice)}
                            </p>
                        )}
                    </div>

                </div>

                <Button size="sm" className="w-full px-12 rounded-lg">
                    Buy Now
                </Button>

            </div>

        </div>
    );
};

export default BookProductCard;
