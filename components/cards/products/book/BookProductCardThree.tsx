"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookType, ProductType } from "@/types/product";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import { cn, formatCurrency } from "@/lib";
import toast from "react-hot-toast";
import { Button } from "@/components/ui";
import { StarRating } from "@/components/reusable";
import { ProductActionIconsTwo } from "@/components/product";

interface BookProductCardThreeProps {
    product: BookType;
    showStockInfo?: boolean;
    showActions?: boolean;
    imageClassName?: string;
}

const BookProductCardThree: React.FC<BookProductCardThreeProps> = ({ product, showStockInfo = false, showActions = false, imageClassName }) => {

    const dispatch = useAppDispatch();
    const { id, title, price, oldPrice, images = [], ratingAverage, author, inStock, stock, ratingTotal } = product;

    const [qty] = useState<number>(1);
    const image = images[0] || "";

    const handleCart = () => {
        const productForCart = {
            ...product,
            brand: ((product as unknown) as ProductType).brand || "",
            sizes: ((product as unknown) as ProductType).sizes || [],
            colors: ((product as unknown) as ProductType).colors || [],
        };
        dispatch(addToCart({ product: productForCart, quantity: qty }));
        toast.success("Product added to cart");
    };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start border border-gray-200 p-2 md:p-3 rounded-xl w-full">

            <Image
                src={image}
                alt={title}
                width={176}
                height={256}
                className={cn(
                    "aspect-[5/7] mx-auto md:mx-0 h-full w-full md:w-44 object-cover rounded-md",
                    imageClassName
                )}
            />

            {/* Details */}
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left md:ms-6 
                space-y-2.5 py-2 w-full">

                {/* Author & Title */}
                <div className="space-y-1">
                    <p className="italic text-xs">{author}</p>
                    <Link href={`/book_collection/${id}`} className="hover:text-primary text-sm lg:text-base font-bold block !line-clamp-1 md:!line-clamp-2">
                        {title}
                    </Link>
                </div>

                {/* Price */}
                <div className="items-center flex gap-x-3 text-sm font-medium">
                    {oldPrice && (
                        <p className="text-gray-400 line-through">{formatCurrency(oldPrice)}</p>
                    )}
                    <p className="text-gray-700">{formatCurrency(price)}</p>
                </div>

                {/* Rating & Reviews */}
                <div className="hidden md:flex items-center gap-x-2">
                    <div className="inline-flex gap-x-2 items-center">
                        <StarRating size="size-4" value={ratingAverage} />
                        <span className="text-sm text-primary">{ratingAverage || 0}</span>
                    </div>
                    <p className="text-sm font-medium">({ratingTotal || 0} Reviews)</p>
                </div>

                {/* Stock Info */}
                {showStockInfo && (
                    <div className="items-center gap-x-2 capitalize text-slate-500 md:flex hidden text-sm">
                        <span>
                            available: <span className="font-medium">{stock || 0}</span>
                        </span>
                        <span>
                            Sold Out: <span className="font-medium">{10}</span>
                        </span>
                    </div>
                )}

                {/* Actions */}
                {showActions && <ProductActionIconsTwo product={product} />}

                {/* Add to Cart */}
                <Button onClick={handleCart}
                    disabled={!inStock} size='sm' className="w-full rounded-lg mt-2">
                    {inStock ? "Add To Cart" : "Out of Stock"}
                </Button>

            </div>

        </div>
    );
};

export default BookProductCardThree;
