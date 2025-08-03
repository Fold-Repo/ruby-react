'use client'

import { ProductType } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import { QuantitySelector } from '../cart'
import { Button, Select } from '../ui'
import { formatCurrency } from '@/lib'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import toast from 'react-hot-toast'
import { ProductTopSkeleton } from '../skeleton'
import { Image } from '@heroui/react'

const ProductTop = ({ loading, product }: { loading: boolean; product: ProductType }) => {

    const dispatch = useAppDispatch()

    const { id, title, price, images, oldPrice, description, colors, sizes } = product || {}
    const [qty, setQty] = useState<number>(1)
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const handleCart = () => {

        if (sizes && !selectedSize) {
            toast.error('Please select a size');
            return;
        }

        if (colors && !selectedColor) {
            toast.error('Please select a color');
            return;
        }

        dispatch(addToCart({
            product,
            quantity: qty,
            selectedColor,
            selectedSize
        }))
        toast.success('Product added to cart')
    }

    if (loading) return <ProductTopSkeleton />

    return (
        <div className="hidden xl:flex items-center justify-between gap-5">

            <div className="flex items-center gap-3">

                <div className="relative w-32 aspect-square rounded-lg overflow-hidden">
                    <Image src={images[0]} alt={title} className="object-cover object-center rounded-lg aspect-square" 
                    width={300} />
                </div>

                <div className="max-w-lg space-y-1">

                    <Link href={`/products/${id}`} 
                        className="hover:text-primary text-sm sm:!text-base md:!text-lg font-medium block !line-clamp-1">
                        {title}
                    </Link>

                    <p className="text-slate-500 md:block hidden text-[15px] !line-clamp-2">
                        {description}
                    </p>

                    <div className="items-center flex gap-x-3 text-base font-semibold">
                        <p className="text-primary">{formatCurrency(price)}</p>
                        {oldPrice && <p className="text-gray-400 line-through">{formatCurrency(oldPrice)}</p>}
                    </div>

                </div>

            </div>

            <div className="flex items-center gap-2 md:gap-3">

                {sizes && (
                    <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}
                        formGroupClass='mb-0' radius='xl' className='bg-transparent border border-primary text-xs'
                        inputSize='sm' name='size'>
                        <option value=""> Select Size </option>
                        {sizes?.map((size, index) => (
                            <option key={index} value={size}> {size} </option>
                        ))}
                    </Select>
                )}

                {colors && (
                    <Select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}
                        formGroupClass='mb-0' radius='xl' className='bg-transparent border border-primary text-xs'
                        inputSize='sm' name='color'>
                        <option value=""> Select Color </option>
                        {colors?.map((color, index) => (
                            <option key={index} value={color.name}> {color.name} </option>
                        ))}
                    </Select>
                )}

                <QuantitySelector value={qty} onChange={setQty} />

                <Button onClick={handleCart} rounded='xl' className='h-10 !text-xs px-12'>Add to cart</Button>

            </div>

        </div>
    )
}

export default ProductTop