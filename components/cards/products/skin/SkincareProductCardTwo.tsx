'use client'


import { ColorSwatchGroup } from '@/components/product'
import { formatCurrency } from '@/lib'
import { ProductType } from '@/types'
import { getDiscountPercentage } from '@/utils'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SkincareProductCardTwo = ({ product }: { product: ProductType }) => {

    const { id, title, price, oldPrice, colors = [], images = [], ratingAverage } = product

    const defaultImage = images[0] || '/assets/img/placeholder.jpg'
    const [activeImage, setActiveImage] = useState<string>(defaultImage)

    const discount =
        typeof oldPrice !== 'undefined' &&
        getDiscountPercentage(oldPrice, price)

    return (
        <div className="flex flex-col relative duration-500 product-card">

            <div className="!rounded-t-lg relative overflow-hidden shadow-sm group duration-500 aspect-7/7 bg-gray-200">

                <Image
                    src={activeImage}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-cover object-top h-full w-full rounded-t-md product-image group-hover:scale-110 duration-500"
                />

                {/* DISCOUNT BADGE */}
                {discount && (
                    <div className="absolute start-3 top-3">
                        <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-md">
                            -{discount}%
                        </span>
                    </div>
                )}

                {/* HOVER SALE BANNER */}
                {discount && (
                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                        <div className="py-2.5 px-4 inline-block font-medium align-middle duration-500 text-[12px] 
                        text-center bg-black text-white w-full rounded-xl">
                            HOT SALE {discount}% OFF
                        </div>
                    </div>
                )}

            </div>


            <div className="!rounded-b-lg space-y-1.5 p-3 lg:p-4 bg-[#FAF8F8]">

                {/* TITLE + COLOR SWATCH */}
                <div className="flex items-center justify-between gap-x-3 gap-y-1">

                    <Link href={`/products/${id}`}
                        className="text-xs md:!text-sm font-medium line-clamp-1 hover:text-primary">
                        {title}
                    </Link>

                    {colors.length > 0 && (
                        <ColorSwatchGroup
                            className="size-3.5"
                            colors={colors}
                            value={activeImage}
                            onHover={(color) => setActiveImage(color.image)}
                        />
                    )}
                </div>

                {/* PRICE + RATING */}
                <div className="flex items-center gap-y-1 gap-x-3 justify-between flex-wrap">

                    <div className="items-center flex gap-x-3 text-xs md:!text-sm font-medium">
                        <p className="text-primary">{formatCurrency(price)}</p>
                        {oldPrice && (
                            <p className="text-gray-400 line-through">
                                {formatCurrency(oldPrice)}
                            </p>
                        )}
                    </div>

                    <div className="inline-flex items-center gap-x-1">
                        <span className="text-xs font-medium">
                            {ratingAverage?.toFixed(1) ?? '0.0'}
                        </span>
                        <StarIcon className="text-yellow-500 w-4 h-4" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SkincareProductCardTwo