'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { ProductType } from '@/types'
import { Button } from '@/components/ui'
import { formatCurrency } from '@/lib'
import toast from 'react-hot-toast'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'

const SkincareProductCard = ({ product }: { product: ProductType }) => {

    const dispatch = useAppDispatch()
    const { id, title, images, price, stock = 0, ratingAverage } = product
    const mainImage = images[0]

    const handleAddToCart = () => {
        dispatch(addToCart({ product }))
        toast.success('Product added to cart')
    }

    return (
        <div className="flex flex-col relative duration-500">

            <div className="rounded-t-lg relative overflow-hidden shadow-sm group duration-500 aspect-7/7 bg-gray-200">

                <Image
                    src={mainImage}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-cover object-top h-full w-full rounded-t-md product-image group-hover:scale-110 duration-500"
                />

                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <Button onClick={handleAddToCart} size='sm' className='!text-xs w-full bg-black' rounded='lg'> 
                        Quickly add to cart 
                    </Button>
                </div>

            </div>

            {/* PRODUCT DETAILS */}
            <Link href={`/products/${id}`}
                className="block !rounded-b-lg space-y-1.5 p-3 lg:p-4 bg-[#FAF8F8]">

                <div className="text-xs md:!text-sm font-medium flex items-center gap-x-3 justify-between">
                    <p className="!truncate font-bold">{title}</p>
                    <h6 className="text-primary">{formatCurrency(price)}</h6>
                </div>

                <div className="flex items-center gap-y-1 gap-x-3 justify-between flex-wrap">

                    <p className="text-[11px] md:!text-xs font-medium block">
                        {stock > 0
                            ? `${product.stock} items available`
                            : 'Out of stock'}
                    </p>

                    <div className="inline-flex items-center gap-x-1">
                        <span className="text-xs md:text-sm font-medium"> {ratingAverage} </span>
                        <StarIcon className='size-4.5 text-yellow-500' />
                    </div>

                </div>

            </Link>

        </div>
    )
}

export default SkincareProductCard;
