"use client";

import React, { useState } from "react";
import { Breadcrumb, Container, StarRating, Tab } from "@/components";
import Image from "next/image";
import { useGetBookDetails } from "@/service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
} from "@/store/wishlistSlice";
import toast from "react-hot-toast";
import { QuantitySelector } from "@/components/cart";
import { Button } from "@/components/ui";
import { ChatBubbleLeftEllipsisIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Chip } from "@heroui/react";
import { formatCurrency } from "@/lib";
import { BookType, ProductType } from "@/types";
import { BookProductCardThree } from "@/components/cards";
import BookStoreReview from "./BookStoreReview";
import { BookStoreDetailsSkeleton } from "@/components/skeleton";
import AlsoLikeBooks from "./AlsoLikeBooks";

const tabItems = [
    { key: "details", title: "Product Details" },
    { key: "reviews", title: "Customer Reviews" }
];

const BookStoreDetailsView = ({ bookId }: { bookId: string | number }) => {

    const [activeTab, setActiveTab] = useState(tabItems[0].key)
    const { response, isLoading } = useGetBookDetails(bookId);
    const product = response?.product as BookType || {};
    const relatedProduct = response?.related as BookType[] || [];
    const dispatch = useAppDispatch();

    const { id, title, price, oldPrice, images = [], ratingAverage, reviews = [], likes = 0, author, publisher, year,
        description, shipping, inStock, isbn, editionLanguage, format, datePublished, tags } = product || {};

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
                quantity: qty,
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

    if (isLoading) {
        return <BookStoreDetailsSkeleton />;
    }


    return (
        <>

            <Breadcrumb
                title={title || "Book Store Details"}
                items={[
                    { label: "Home", href: "/" },
                    { label: title ? title : "Book Store" },
                ]}
            />

            <Container>

                <div className="section-lg space-y-20">

                    <div className="grid lg:grid-cols-12 gap-x-5 gap-y-16">

                        {/* ===== BOOK IMAGE ===== */}
                        <div className="lg:col-span-4 2xl:col-span-3">
                            <Image
                                src={image || ""}
                                alt={title || "Book Image"}
                                width={400}
                                height={600}
                                className="aspect-[7/9] mx-auto object-contain rounded-md"
                            />
                        </div>

                        {/* Book Details */}
                        <div className="lg:col-span-8 2xl:col-span-9 space-y-4">

                            <h2 className="text-lg font-bold">{title}</h2>

                            {/* Ratings / Reviews / Likes */}
                            <div className="flex flex-wrap items-center gap-5 justify-between">

                                <div className="flex items-center gap-x-3">
                                    <StarRating size="size-4" value={ratingAverage} />
                                    <span className="text-xs font-semibold">
                                        ({ratingAverage || 0})
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
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

                            {/* Author / Publisher / Year / Status */}
                            <div className="flex flex-wrap items-end gap-5 justify-between">

                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Author</span>
                                    <p className="text-sm font-semibold">{author}</p>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Publisher</span>
                                    <p className="text-sm font-semibold">{publisher}</p>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Year</span>
                                    <p className="text-sm font-semibold">{year}</p>
                                </div>

                                {shipping?.freeShipping && (
                                    <Chip className="border-1 !text-xs" variant="bordered" radius="sm" size="md">
                                        Free Shipping
                                    </Chip>
                                )}

                                <Chip className="border-1 !text-xs" variant="bordered" radius="sm" size="md">
                                    {inStock ? "In Stock" : "Out of Stock"}
                                </Chip>

                            </div>

                            <p className="text-sm leading-7 pt-3">{description}</p>

                            {/* Price / Quantity / Add to Cart / Wishlist */}
                            <div className="flex flex-wrap items-center gap-5 justify-between">

                                <div className="items-end flex gap-x-3 font-medium">
                                    <p className="text-primary text-lg">
                                        {formatCurrency(price)}
                                    </p>
                                    {oldPrice && (
                                        <p className="text-gray-400 line-through text-sm">
                                            {formatCurrency(oldPrice)}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-4">

                                    <QuantitySelector
                                        disabled={!inStock}
                                        value={qty}
                                        onChange={setQty}
                                    />

                                    <Button
                                        onClick={handleCartAndBuy}
                                        disabled={!inStock}
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
                                            <OutlineHeartIcon className="size-4.5 text-red-500" />
                                        )}
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ====== PRODUCT DETAILS / CUSTOMER REVIEWS ====== */}
                    <div className="grid xl:grid-cols-12 gap-x-5 gap-y-10">

                        <div className="xl:col-span-8 overflow-hidden space-y-8">

                            <Tab className="!justify-start" tabs={tabItems} active={activeTab} onChange={setActiveTab} />

                            {activeTab === "details" && (

                                <div className="space-y-4">

                                    <ul className="mt-3 flex flex-col">

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Book Title</span>
                                                <span> {title} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Author</span>
                                                <span> {author} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">ISBN</span>
                                                <span> {isbn} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Edition Language</span>
                                                <span> {editionLanguage} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Book Format</span>
                                                <span> {format} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Date Published</span>
                                                <span> {datePublished} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Publisher</span>
                                                <span> {publisher} </span>
                                            </div>
                                        </li>

                                        <li className="inline-flex items-center gap-x-2 py-4 text-sm border-b border-gray-300 text-gray-600">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="text-black font-bold">Tags</span>
                                                <span> {tags && tags.length > 0 ? tags.join(', ') : '-'} </span>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                            )}

                            {activeTab === "reviews" && (
                                <BookStoreReview />
                            )}

                        </div>

                        <div className="xl:col-span-4 space-y-5">

                            <h2 className="text-base font-bold">Related Books</h2>

                            {relatedProduct.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-1 space-y-4">
                                    {relatedProduct.map((item: BookType, index: number) => (
                                        <BookProductCardThree imageClassName="aspect-5/6 mx-auto md:mx-0 h-full w-full md:w-40 object-contain" key={index} product={item} />
                                    ))}
                                </div>
                            )}

                        </div>

                    </div>

                    {/* ====== ALSO LIKED ====== */}
                    <AlsoLikeBooks />

                </div>

            </Container>

        </>
    );
};

export default BookStoreDetailsView;
