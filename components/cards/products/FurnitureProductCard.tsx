'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { getDiscountPercentage } from '@/utils'
import type { ProductType } from '@/types'
import { formatCurrency } from '@/lib'
import { ProductActionIcons } from '@/components/product'

const FurnitureProductCard = ({
    product
}: {
    product: ProductType
}) => {
    const {
        id,
        title,
        price,
        oldPrice,
        ratingAverage,
        images = []
    } = product

    const image = images[0]

    const discount =
        typeof oldPrice !== 'undefined' && getDiscountPercentage(oldPrice, price)

    return (
        <div className="tab-content flex flex-col relative duration-500 product-card">

            <div className="!rounded-t-lg relative overflow-hidden shadow-sm group duration-500 aspect-7/8 bg-gray-200">

                <Image src={image} alt={title} width={500} height={500}
                    className="object-cover h-full w-full rounded-t-md product-image group-hover:scale-110 duration-500"
                />

                {/* Discount */}
                {discount && (
                    <div className="absolute start-3 top-3">
                        <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-md">
                            -{discount}%
                        </span>
                    </div>
                )}

                <ProductActionIcons product={product} styleType='style1' />

            </div>


            <div className="group !rounded-b-lg space-y-3 p-3 lg:p-4 bg-[#FAF8F8]">

                <Link href={`/products/${id}`}
                    className="group-hover:text-primary text-xs md:!text-sm font-medium line-clamp-1">
                    {title}
                </Link>

                <div className="flex items-center gap-y-1 gap-x-3 justify-between flex-wrap">

                    <div className="items-center flex gap-x-3 text-xs md:!text-sm font-medium">
                        {oldPrice && (
                            <p className="text-gray-400 line-through">
                                {formatCurrency(oldPrice)}
                            </p>
                        )}
                        <p className="text-primary">{formatCurrency(price)}</p>
                    </div>

                    <div className="inline-flex items-center gap-x-1">
                        <span className="text-xs font-medium">{ratingAverage ?? '5.0'}</span>
                        <StarIcon className="text-yellow-500 text-sm size-4" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FurnitureProductCard
