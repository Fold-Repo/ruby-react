'use client'

import { ProductType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { ProductActionIcons } from '@/components/product'
import { formatCurrency } from '@/lib'
import { StarRating } from '@/components/reusable'
import { getDiscountPercentage } from '@/utils'

const ProductCardFour = ({ product }: { product: ProductType }) => {

    const { id, title, price, ratingAverage, oldPrice, images = [], ratingTotal } = product
    const defaultImage = images[0]

    const discount =
        typeof oldPrice !== 'undefined' && getDiscountPercentage(oldPrice, price)

    return (
        <div className="flex flex-col relative duration-500 product-card">

            <div className="!rounded-t-lg relative overflow-hidden shadow-sm group duration-500 aspect-7/8 bg-gray-200 dark:bg-gray-800">

                <Image src={defaultImage} alt={title} width={500}
                    height={500} 
                    className="object-cover w-full h-full rounded-t-md product-image group-hover:scale-110 duration-500"
                />

                <ProductActionIcons product={product} styleType="style1" />

                {/* Percentage off */}
                {discount && (
                    <div className="absolute start-3 top-3">
                        <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-md">
                            -{discount}%
                        </span>
                    </div>
                )}

            </div>

            {/* Product Details */}
            <div className="!rounded-b-lg space-y-1.5 p-3 lg:p-4 bg-[#FAF8F8] dark:bg-gray-900">

                <Link href={`/products/${id}`}
                    className="hover:text-primary text-sm font-bold block !line-clamp-1 text-gray-900 dark:text-gray-200">
                    {title}
                </Link>

                <div className="flex gap-x-3 font-medium items-center">
                    <p className="font-semibold text-primary text-base"> {formatCurrency(price)} </p>
                    {oldPrice && <p className="text-gray-400 dark:text-gray-500 line-through text-sm"> {formatCurrency(oldPrice)} </p>}
                </div>

                <div className="inline-flex items-center gap-x-1">
                    <StarRating size='w-3.5 h-3.5' value={ratingAverage} />
                    <p className="font-medium text-xs text-gray-600 dark:text-gray-400">({ratingTotal})</p>
                </div>

            </div>

        </div>
    )
}

export default ProductCardFour
