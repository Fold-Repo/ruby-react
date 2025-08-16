"use client"

import React, { useState } from 'react'
import { IconWrapper } from '@/components';
import {
    HeartIcon, ShoppingCartIcon, ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"
import { BookType, ProductType } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import toast from 'react-hot-toast';
import { addToCart } from '@/store/cartSlice';
import { ProductQuickView } from '@/components/modal';

const iconClass = "w-4 h-4 text-gray-700";
const ProductActionIconsTwo = ({ product }: { product: ProductType | BookType }) => {

    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()
    const isWished = useAppSelector(isInWishlist(product.id));

    const handleClick = (type: string) => {
        switch (type) {
            case "heart":
                if (isWished) {
                    dispatch(removeFromWishlist(product.id));
                    toast.success("Removed from wishlist");
                } else {
                    dispatch(addToWishlist(product));
                    toast.success("Added to wishlist");
                }
                break;
            case "cart":
                const productForCart = {
                    ...product,
                    brand: ((product as unknown) as ProductType).brand || "",
                    sizes: ((product as unknown) as ProductType).sizes || [],
                    colors: ((product as unknown) as ProductType).colors || [],
                };
                dispatch(addToCart({ product: productForCart }))
                toast.success('Product added to cart')
                break;
            case "view":
                setOpen(true)
                break;
        }
    };

    return (
        <>

            <div className="flex justify-center items-center gap-x-4">

                <IconWrapper onClick={() => handleClick("heart")} className='border border-gray-100' title='Favorite'>
                    {isWished ? (
                        <SolidHeartIcon className="w-4 h-4 text-red-500" />
                    ) : (
                        <HeartIcon className={iconClass} />
                    )}
                </IconWrapper>

                <IconWrapper onClick={() => handleClick("cart")} className='border border-gray-100' title='Add to cart'>
                    <ShoppingCartIcon className={iconClass} />
                </IconWrapper>

                <IconWrapper onClick={() => handleClick("view")} className='border border-gray-100' title='Quick View'>
                    <ViewfinderCircleIcon className={iconClass} />
                </IconWrapper>

            </div>

            <ProductQuickView open={open} setOpen={setOpen} product={product} />

        </>
    )
}

export default ProductActionIconsTwo