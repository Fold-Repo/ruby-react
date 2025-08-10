'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib';
import { Button } from '@/components/ui';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ProductType } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';
import { StarRating } from '@/components/reusable';

const SportProductCardTwo = ({ product }: { product: ProductType }) => {
    const dispatch = useAppDispatch();

    const { id, title, price, oldPrice, images = [], ratingAverage, stock } = product;
    const defaultImage = images[0];

    const handleCart = () => {
        dispatch(addToCart({ product }));
        toast.success('Product added to cart');
    };

    return (
        <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg">
            
            <Image
                src={defaultImage}
                alt={title}
                width={120}
                height={140}
                className="rounded-lg aspect-7/7 object-cover w-28 sm:w-30"
            />

            <div className="w-full space-y-1 flex flex-col justify-between h-full">

                <Link href={`/products/${id}`} 
                    className="hover:text-primary text-sm font-semibold block !line-clamp-1">
                    {title}
                </Link>

                {/* Rating */}
                <StarRating value={ratingAverage || 0} />

                {/* Price */}
                <div className="items-center flex gap-x-3 text-[14px] font-semibold">
                    <p className="text-primary">{formatCurrency(price)}</p>
                    {oldPrice && (
                        <p className="text-gray-400 line-through text-[12px]">
                            {formatCurrency(oldPrice)}
                        </p>
                    )}
                </div>

                <Button onClick={handleCart} disabled={!stock} fullWidth 
                    rounded='lg' 
                    size="sm" 
                    leftIcon={<ShoppingCartIcon className="size-4" />}>
                    Add To Cart
                </Button>

            </div>

        </div>
    );
};

export default SportProductCardTwo;
