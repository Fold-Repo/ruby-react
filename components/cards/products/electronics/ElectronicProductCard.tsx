'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconWrapper } from '@/components';
import { getDiscountPercentage } from '@/utils';
import { formatCurrency } from '@/lib';
import { ProductType } from '@/types';
import { StarRating } from '@/components/reusable';
import { Button } from '@/components/ui';
import {
    HeartIcon, ShoppingCartIcon, ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { ProductQuickView } from '@/components/modal';

const iconClass = "w-4 h-4 text-gray-700 dark:text-gray-300";

const ElectronicProductCard = ({ product }: { product: ProductType }) => {
    const dispatch = useAppDispatch()
    const isWished = useAppSelector(isInWishlist(product.id));
    const [open, setOpen] = useState(false)

    const { id, title, price, oldPrice, images = [], ratingAverage } = product;
    const productImage = images[0] || '';

    const discount =
        typeof oldPrice !== 'undefined' &&
        getDiscountPercentage(oldPrice, price);

    const handleClick = (type: string) => {
        switch (type) {
            case "heart":
                if (isWished) {
                    dispatch(removeFromWishlist(product.id));
                    toast.success("Removed from wishlist");
                } else {
                    dispatch(addToWishlist(product));
                    toast.success("Added to wishlist");
                }
                break;
            case "cart":
                dispatch(addToCart({ product }))
                toast.success('Product added to cart')
                break;
            case "view":
                setOpen(true)
                break;
        }
    };

    return (
        <>
            <div className="flex flex-col rounded-xl shadow_elect bg-white dark:bg-gray-800">

                <div className="relative p-3 !pb-0 h-full rounded-lg space-y-7">

                    <div className="aspect-7/5 rounded-md overflow-hidden  dark:bg-gray-700">

                        <Image
                            src={productImage}
                            alt={title}
                            width={500}
                            height={500}
                            className="mx-auto object-contain rounded-md h-full w-full transition-transform duration-500 group-hover:scale-110"
                        />

                        {discount && (
                            <div className="absolute end-3 top-3">
                                <span className="bg-primary text-white text-[10px] font-medium px-2 py-1 rounded-md">
                                    -{discount}%
                                </span>
                            </div>
                        )}

                    </div>

                    {/* ==== ACTION BUTTON ==== */}
                    <div className="flex justify-center items-center gap-x-4">
                        <IconWrapper
                            onClick={() => handleClick("heart")}
                            className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                            title="Favorite">
                            {isWished ? (
                                <SolidHeartIcon className="w-4 h-4 text-red-500" />
                            ) : (
                                <HeartIcon className={iconClass} />
                            )}
                        </IconWrapper>

                        <IconWrapper
                            onClick={() => handleClick("cart")}
                            className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                            title="Add to cart">
                            <ShoppingCartIcon className={iconClass} />
                        </IconWrapper>

                        <IconWrapper
                            onClick={() => handleClick("view")}
                            className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                            title="Quick View">
                            <ViewfinderCircleIcon className={iconClass} />
                        </IconWrapper>
                    </div>


                </div>

                {/* PRODUCT DETAILS */}
                <div className="p-2 sm:p-4 space-y-4 text-center text-gray-900 dark:text-gray-200">

                    <Link href={`/products/${id}`}
                        className="text-sm lg:!text-[15px] font-bold block line-clamp-1">
                        {title}
                    </Link>

                    <StarRating size='size-4' value={ratingAverage} />

                    <div className="justify-center items-center flex gap-x-3 text-[15px] font-semibold">
                        <p>{formatCurrency(price)}</p>
                        {oldPrice && (
                            <p className="text-gray-500 dark:text-gray-400 line-through text-[13px]">
                                {formatCurrency(oldPrice)}
                            </p>
                        )}
                    </div>

                    {/* Add to Cart */}
                    <Button onClick={() => handleClick("cart")} rounded='lg' className='h-9 w-full'> Add to cart </Button>

                </div>

            </div>

            <ProductQuickView open={open} setOpen={setOpen} product={product} />
        </>
    );
};

export default ElectronicProductCard;
