'use client'

import { ProductType } from '@/types';
import { getDiscountPercentage } from '@/utils';
import React, { useState } from 'react'
import Link from 'next/link';
import { ColorSwatchGroup, ProductActionIcons } from '@/components/product';
import { formatCurrency } from '@/lib';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';

const SportProductCard = ({ product }: { product: ProductType }) => {

    const dispatch = useAppDispatch()

    const { id, title, price, oldPrice, colors = [], images = [],
        stock } = product

    const defaultImage = images[0] || "";
    const hoverImage = images[1] || "";
    const [activeImage, setActiveImage] = useState<string>(defaultImage);

    const discount =
        typeof oldPrice !== 'undefined'
        && getDiscountPercentage(oldPrice, price)

    const handleCart = () => {
        dispatch(addToCart({
            product,
        }));
        toast.success('Product added to cart');
    };

    return (
        <div className="relative duration-500">

            <div className="flex-col">

                <div className="relative overflow-hidden shadow-sm group rounded-md duration-500 
                aspect-7/7 bg-gray-200">

                    <Image
                        src={activeImage}
                        alt="Product"
                        width={500}
                        height={500}
                        className={`object-cover h-full w-full rounded-md product-image duration-500 
                        ${hoverImage ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-110'}`}
                    />

                    {/* Hover Overlay Image */}
                    {hoverImage && (
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
                        <div className="absolute end-3 top-3">
                            <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-md">
                                -{discount}%
                            </span>
                        </div>
                    )}

                    {/* Icons */}
                    <ProductActionIcons product={product} styleType='style6' />

                </div>

                <div className="space-y-2 pt-3">

                    <div className="flex items-center justify-between flex-wrap gap-2">

                        <Link href={`/products/${id}`} className="hover:text-primary text-sm font-medium block !line-clamp-1">
                            {title}
                        </Link>

                        {colors.length > 0 && (
                            <ColorSwatchGroup
                                className='size-3.5'
                                colors={colors}
                                value={activeImage}
                                onHover={(color) => setActiveImage(color.image)}
                            />
                        )}

                    </div>

                    <div className="flex gap-x-3 font-medium items-center">
                        <p className="font-semibold text-primary text-base"> {formatCurrency(price)} </p>
                        {oldPrice && <p className="text-gray-400 line-through text-sm"> {formatCurrency(oldPrice)} </p>}
                    </div>

                    <Button onClick={handleCart} disabled={!stock} leftIcon={<ShoppingCartIcon className='size-4.5' />} 
                        fullWidth rounded='lg' className='!text-xs h-9.5'>
                        Add to cart
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default SportProductCard