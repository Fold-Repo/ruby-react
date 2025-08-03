'use client'

import { ProductStyleType, ProductType } from '@/types';
import { getDiscountPercentage } from '@/utils';
import React, { useState } from 'react'
import Link from 'next/link';
import { ColorSwatchGroup, ProductActionIcons, SizeBadgeGroup } from '@/components/product';
import { formatCurrency } from '@/lib';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
// import { Image } from '@heroui/react';

const ProductCard = ({ product, styleType }: { product: ProductType; styleType: ProductStyleType }) => {

    const { id, title, price, oldPrice, sizes = [], colors = [], images = [],
        ratingAverage } = product

    const defaultImage = images[0] || "";
    const hoverImage = images[1] || "";
    const [activeImage, setActiveImage] = useState<string>(defaultImage);

    const discount =
        typeof oldPrice !== 'undefined'
        && getDiscountPercentage(oldPrice, price)

    return (
        <div className="relative duration-500">

            <div className="flex-col">

                <div className="relative overflow-hidden shadow-sm group rounded-md duration-500 
                aspect-7/8 bg-gray-200">

                    <Image
                        src={activeImage}
                        alt="Product"
                        width={500}
                        height={500}
                        className="object-cover h-full  w-full rounded-md product-image
                        group-hover:scale-110 duration-500 group group-hover:opacity-0"
                    />

                    {/* Hover Overlay Image */}
                    {hoverImage && hoverImage !== defaultImage && (
                        <Image
                            src={hoverImage}
                            alt="Hover"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover rounded-md absolute top-0 left-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 scale-105"
                        />
                    )}

                    {/* Percentage off */}
                    {discount && (
                        <div className="absolute start-3 top-3">
                            <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-xl">
                                -{discount}%
                            </span>
                        </div>
                    )}

                    {/* Icons */}
                    <ProductActionIcons product={product} styleType={styleType} />

                </div>

                <div className="space-y-1.5 pt-3">

                    <Link href={`/products/${id}`} className="hover:text-primary text-sm sm:text-base font-medium block !line-clamp-1">
                        {title}
                    </Link>

                    {(colors.length > 0 || sizes.length > 0) && (
                        <div className="!space-y-4">

                            {sizes.length > 0 && (
                                <SizeBadgeGroup sizes={sizes} />
                            )}

                            {colors.length > 0 && (
                                <ColorSwatchGroup
                                    className='size-3.5'
                                    colors={colors}
                                    value={activeImage}
                                    onHover={(color) => setActiveImage(color.image)}
                                />
                            )}

                        </div>
                    )}

                    <div className="flex items-center justify-between gap-2">

                        <div className="flex gap-x-3 font-medium items-center">
                            <p className="font-semibold text-primary text-base"> {formatCurrency(price)} </p>
                            {oldPrice && <p className="text-gray-400 line-through text-sm"> {formatCurrency(oldPrice)} </p>}
                        </div>

                        <div className="inline-flex items-center gap-x-1">
                            <span className="text-xs md:text-sm font-medium"> {ratingAverage} </span>
                            <StarIcon className='size-4.5 text-yellow-500' />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductCard