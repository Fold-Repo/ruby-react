"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib";
import { BookType, ProductType } from "@/types/product";
import { StarRating } from "@/components/reusable";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import toast from "react-hot-toast";
import { QuantitySelector } from "@/components/cart";
import { Button } from "@/components/ui";
import { ChatBubbleLeftEllipsisIcon, HandThumbUpIcon, HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { addToWishlist, isInWishlist, removeFromWishlist } from "@/store/wishlistSlice";
import { Chip } from "@heroui/react";

interface BookProductCardTwoProps {
    product: BookType;
}

const BookProductCardTwo: React.FC<BookProductCardTwoProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    const { id, title, price, oldPrice, images = [], ratingAverage, reviews, likes, author, publisher, year, description, shipping, inStock } = product;

    const image = images[0] || "";
    const [qty, setQty] = useState<number>(1);

    const handleCartAndBuy = () => {
        const productForCart = {
            ...product,
            brand: ((product as unknown) as ProductType).brand || "",
            sizes: ((product as unknown) as ProductType).sizes || [],
            colors: ((product as unknown) as ProductType).colors || [],
        };
        dispatch(
            addToCart({
                product: productForCart,
                quantity: qty
            })
        );
        toast.success("Product added to cart");
    };

    const isWished = useAppSelector(isInWishlist(id));

    const handleWishlist = () => {
        if (isWished) {
            dispatch(removeFromWishlist(id));
            toast.success("Removed from wishlist");
        } else {
            dispatch(addToWishlist(product));
            toast.success("Added to wishlist");
        }
    };

    return (
        <div className="relative duration-500 w-full mx-auto border border-gray-100 rounded-lg p-4">

            <div className="flex lg:items-center">

                <div className="relative overflow-hidden shrink-0 shadow-sm rounded-md duration-500">
                    <Image
                        src={image}
                        alt={title}
                        width={208}
                        height={312}
                        className="object-cover w-36 md:w-52 rounded-md"
                    />
                </div>

                {/* ==== DETAILS SECTION ==== */}
                <div className="ms-6 space-y-2 lg:space-y-3 w-full">

                    <Link href={`book_collection/${id}`} className="hover:text-primary text-base md:text-lg font-semibold block !line-clamp-1">
                        {title}
                    </Link>

                    {/* Ratings, reviews, likes */}
                    <div className="flex flex-wrap items-center gap-5 justify-between">

                        <div className="flex items-center gap-x-3">
                            <StarRating size="size-4" value={ratingAverage} />
                            <span className="text-xs font-semibold">
                                ({ratingAverage || 0})
                            </span>
                        </div>

                        {/* Reviews & Likes */}
                        <div className="hidden lg:flex items-center gap-3">
                            <div className="inline-flex items-center gap-2">
                                <ChatBubbleLeftEllipsisIcon className="size-5 text-yellow-600" />
                                <span className="text-sm font-medium">
                                    {reviews?.length} reviews
                                </span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <HandThumbUpIcon className="size-5 text-yellow-600" />
                                <span className="text-sm font-medium">{likes} likes</span>
                            </div>
                        </div>

                    </div>

                    {/* Author, Publisher, Year, Status */}
                    <div className="hidden lg:flex flex-wrap items-end gap-5 justify-between pt-3">

                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-gray-500 text-start">Author</span>
                            <p className="text-sm font-semibold">{author}</p>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-gray-500 text-start">Publisher</span>
                            <p className="text-sm font-semibold">{publisher}</p>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-gray-500 text-start">Year</span>
                            <p className="text-sm font-semibold">{year}</p>
                        </div>

                        {shipping?.freeShipping && (<Chip className='text-xs border-1' variant="bordered" radius="sm" size='md'>Free Shipping</Chip>)} 
                        <Chip className='text-xs border-1' variant="bordered" radius="sm" size='md'> {inStock ? "In Stock" : "Out of Stock"} </Chip>

                    </div>

                    {/* Description */}
                    <p className="text-sm leading-6 pt-3 line-clamp-3 lg:line-clamp-4">
                        {description}
                    </p>

                    {/* Price, Quantity, Cart, Wishlist */}
                    <div className="flex flex-wrap items-center pt-2 gap-5 justify-between">

                        <div className="items-end flex gap-x-3 font-medium">
                            <p className="text-primary text-lg">
                                {formatCurrency(price)}
                            </p>
                            {oldPrice && (
                                <p className="text-gray-400 line-through text-base">
                                    {formatCurrency(oldPrice)}
                                </p>
                            )}
                        </div>

                        <div className="hidden lg:flex flex-wrap items-center gap-4">

                            <QuantitySelector
                                disabled={!inStock}
                                value={qty}
                                onChange={setQty}
                            />

                            <Button
                                onClick={handleCartAndBuy}
                                disabled={!inStock}
                                fullWidth
                                rounded="xl"
                                className="lg:w-60">
                                {inStock ? "Add to cart" : "Sold Out"}
                            </Button>

                            <button
                                onClick={handleWishlist}
                                className="cursor-pointer w-9 h-9 border border-gray-200 p-2 rounded-md flex items-center justify-center">
                                {isWished ? (
                                    <SolidHeartIcon className="size-4.5 text-red-500" />
                                ) : (
                                    <HeartIcon className="size-4.5 text-red-500" />
                                )}
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookProductCardTwo;
