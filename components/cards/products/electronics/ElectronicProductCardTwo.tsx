'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarRating } from '@/components/reusable';
import { formatCurrency } from '@/lib';
import { ProductType } from '@/types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';

const ElectronicProductCardTwo = ({ product }: { product: ProductType }) => {

    const dispatch = useAppDispatch()
    const { id, title, price, images = [], ratingAverage } = product;
    const productImage = images[0] || ''

    const handleCart = () => {
        dispatch(addToCart({ product }))
        toast.success('Product added to cart')
    }

    return (
        <div className="flex items-center gap-5 p-3 rounded-lg shadow_elect">

            <Image
                src={productImage}
                alt={title}
                width={120}
                height={103}
                className='rounded-lg aspect-7/6 object-contain w-28 sm:w-30'
            />

            <div className="w-full flex flex-col justify-between space-y-2">

                <Link href={`/products/${id}`}
                    className="text-sm font-semibold block hover:text-primary !line-clamp-1">
                    {title}
                </Link>

                <StarRating size="size-4" value={ratingAverage} />

                <div className="flex items-center justify-between gap-2">

                    <p className="text-primary text-sm font-bold">{formatCurrency(price)}</p>

                    <button onClick={handleCart}
                        aria-label={`Add ${title} to cart`}
                        className="cursor-pointer text-gray-700 hover:text-primary transition-colors">
                        <ShoppingCartIcon className="size-5" />
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ElectronicProductCardTwo;
