import React, { useState } from 'react'
import { Button, PopupModal } from '../ui'
import { ProductType } from '@/types';
import Image from 'next/image';
import { getDiscountPercentage } from '@/utils';
import { formatCurrency } from '@/lib';
import { Chip } from '@heroui/react';
import { ColorSwatchGroup, SizeBadgeGroup } from '../product';
import { QuantitySelector } from '../cart';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import toast from 'react-hot-toast';
import { addToCart } from '@/store/cartSlice';
import { useRouter } from 'next/navigation';

interface ShareModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product: ProductType
}
const ProductQuickView: React.FC<ShareModalProps> = ({ open, setOpen, product }) => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [qty, setQty] = useState<number>(1)

    const { id, title, price, description, oldPrice, sizes = [], colors = [], images = [], inStock } = product

    const defaultImage = images[0] || "";
    const [activeImage, setActiveImage] = useState<string>(defaultImage);

    const discount =
        typeof oldPrice !== 'undefined'
        && getDiscountPercentage(oldPrice, price)

    const isWished = useAppSelector(isInWishlist(id));

    const handleWishlist = () => {
        if (isWished) {
            dispatch(removeFromWishlist(id));
            toast.success("Removed from wishlist");
        } else {
            dispatch(addToWishlist(product));
            toast.success("Added to wishlist");
        }
    }

    const handleCartAndBuy = (redirect = false) => {
        dispatch(addToCart({
            product,
            selectedColor,
            selectedSize,
            quantity: qty
        }));
        toast.success('Product added to cart');
        if (redirect) {
            router.push('/checkout');
        }
    };

    return (
        <PopupModal
            size="5xl"
            isOpen={open}
            onClose={() => setOpen(false)}
            placement="center"
            showCloseButton
            className="max-h-[90vh]">

            <div className="pb-10">

                <div className="space-y-1.5 border-b border-gray-300 pb-3 mb-10">

                    <h2 className="text-xl font-bold">{title}</h2>

                    {colors?.length > 0 && (
                        <div className="text-gray-500 text-sm font-medium flex items-center flex-wrap">
                            <span className="mr-2">Select Colors:</span>
                            <div className="inline-flex flex-wrap items-center gap-1">
                                {colors.map((color, index) => (
                                    <React.Fragment key={index}>
                                        <div onMouseEnter={() => setActiveImage(color.image)}
                                            onClick={() => setActiveImage(color.image)} className="cursor-pointer inline-flex items-center gap-1">
                                            <span className="inline-block w-4 h-4 rounded-full border"
                                                style={{ backgroundColor: color.hex }}
                                                title={color.name}></span>
                                            <span className="text-xs text-black">{color.name}</span>
                                        </div>
                                        {index < colors.length - 1 && <span className="mx-1">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}

                    {sizes?.length > 0 && (
                        <div className="text-gray-500 text-sm font-medium flex items-center flex-wrap">
                            <span className="mr-2">Select Sizes:</span>
                            <div className="inline-flex items-center gap-1">
                                {sizes.map((size, index) => (
                                    <React.Fragment key={index}>
                                        <span className="text-xs text-black">{size}</span>
                                        {index < sizes.length - 1 && <span className="mx-1">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="relative overflow-hidden shadow group rounded-md duration-500 
                                aspect-square bg-gray-200 border-gray-200">

                        <Image
                            src={activeImage}
                            alt="Product"
                            width={900}
                            height={900}
                            className="object-cover h-full  w-full rounded-md product-image
                                        group-hover:scale-110 duration-500"
                        />

                        {/* Percentage off */}
                        {discount && (
                            <div className="absolute start-3 top-3">
                                <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-xl">
                                    -{discount}%
                                </span>
                            </div>
                        )}

                    </div>

                    <div className="space-y-8">

                        {/* DESCRIPTION / PRICE AND STCOK */}
                        <div className="space-y-3">

                            <div className="flex gap-x-3 font-medium items-center">
                                <p className="font-bold text-primary text-lg"> {formatCurrency(price)} </p>
                                {oldPrice && <p className="text-gray-400 line-through text-base"> {formatCurrency(oldPrice)} </p>}
                            </div>

                            <Chip size="sm" variant="flat"
                                color={inStock ? "success" : "danger"}>
                                {inStock ? "In stock" : "Out of stock"}
                            </Chip>

                            <p className="text-sm !line-clamp-3">
                                {description}
                            </p>

                        </div>

                        {/* COLOR AND SIZE */}
                        <div className="space-y-3">

                            {colors.length > 0 && (
                                <div className="flex flex-col gap-y-3">
                                    <label className='text-sm' htmlFor="size"> Select Color
                                        {selectedColor && <span className="font-bold">: {selectedColor} </span>}
                                    </label>
                                    <ColorSwatchGroup value={selectedColor} className='size-8' colors={colors}
                                        onClick={(color) => {
                                            setSelectedColor(color.name)
                                            setActiveImage(color.image)
                                        }}
                                    />
                                </div>
                            )}

                            {sizes.length > 1 && (
                                <div className="flex flex-col gap-y-3">

                                    <label className='text-sm' htmlFor="size"> Select Size
                                        {selectedSize && <span className="font-bold">: {selectedSize} </span>}
                                    </label>

                                    <SizeBadgeGroup onClick={(s) => setSelectedSize(s)} value={selectedSize} className='cursor-pointer size-8' sizes={sizes} />

                                </div>
                            )}

                        </div>

                        {/* CART AND BUY */}
                        <div className="space-y-5">

                            <div className="flex items-center gap-3">

                                <QuantitySelector value={qty} onChange={setQty} />

                                <Button onClick={() => handleCartAndBuy(false)} rounded='full' className='h-10 !text-xs px-12'>Add to cart</Button>

                                <button onClick={handleWishlist}
                                    className='cursor-pointer bg-gray-200 rounded-full flex items-center justify-center w-9 aspect-square text-base"'>
                                    {isWished ? (
                                        <SolidHeartIcon className="size-4.5 text-red-500" />
                                    ) : (
                                        <HeartIcon className='size-4.5 text-gray-900' />
                                    )}
                                </button>

                            </div>

                            <Button onClick={() => handleCartAndBuy(true)} rounded='full' className='w-full !text-xs px-12'>Buy Now</Button>

                        </div>


                    </div>

                </div>

            </div>

        </PopupModal>
    )
}

export default ProductQuickView