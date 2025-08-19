'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDiscountPercentage } from '@/utils';
import { formatCurrency } from '@/lib';
import { ProductType } from '@/types';
import { StarRating } from '@/components/reusable';
import { Button } from '@/components/ui';
import { ProductActionIconsTwo } from '@/components/product';

const ElectronicProductCard = ({ product }: { product: ProductType }) => {

    const { id, title, price, oldPrice, images = [], ratingAverage } = product;
    const productImage = images[0] || '';

    const discount =
        typeof oldPrice !== 'undefined' &&
        getDiscountPercentage(oldPrice, price);

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
                    <ProductActionIconsTwo product={product} />


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
                    <Button rounded='lg' className='h-9 w-full'> Add to cart </Button>

                </div>

            </div>

        </>
    );
};

export default ElectronicProductCard;
