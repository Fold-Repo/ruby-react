'use client'

import React from 'react'
import Image from 'next/image'
import { ProductType } from '@/types'
import { Button } from '@/components/ui'
import toast from 'react-hot-toast'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import Link from 'next/link'

const SkincareProductCardThree = ({ product }: { product: ProductType }) => {

    const dispatch = useAppDispatch()
    const { title, description, images } = product
    const image = images[0]

    const handleAddToCart = () => {
        dispatch(addToCart({ product }))
        toast.success('Product added to cart')
    }

    return (
        <div className="relative overflow-hidden rounded-lg h-full">

            <Image className="object-cover object-top aspect-7/6 lg:aspect-7/5 h-full w-full"
                src={image}
                alt={title}
                width={800}
                height={800} />

            <div className="space-y-2 absolute z-1 bottom-0 w-full bg-black/50 p-3 text-white">

                <h1 className="font-semibold text-[14px]">{title}</h1>
                <p className="text-[12px] line-clamp-2">{description}</p>

                <div className="flex items-center gap-4 justify-between relative">

                    <Button
                        onClick={handleAddToCart}
                        variant='outline' size='sm'
                        className="border !border-white w-full !rounded-full text-white bg-transparent hover:bg-white hover:text-black">
                        Add to cart
                    </Button>

                    <Link className='w-full' href={`/products/${product.id}`}>
                        <Button size='sm' className="btn-primary w-full !rounded-full">
                            Shop the Look
                        </Button>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default SkincareProductCardThree
