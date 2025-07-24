import React from 'react'
import QuantitySelector from './QuantitySelector'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { CartItemType } from '@/types'
import { formatCurrency } from '@/lib'
import { removeFromCart, updateCart } from '@/store/cartSlice'
import { useAppDispatch } from '@/store/hooks'

const CartList = ({ cart }: { cart: CartItemType }) => {

    const { product, quantity = 0, selectedColor, selectedSize } = cart
    const { id: productId, title, images, sizes, colors, price, stock } = product

    const sub = Number(price) * quantity
    const dispatch = useAppDispatch()

    const handleUpdate = (field: 'selectedColor' | 'selectedSize', value: string) => {
        const payload: {
            productId: number | string;
            selectedColor?: string;
            selectedSize?: string;
        } = {
            productId,
        };

        if (field === 'selectedColor') {
            payload.selectedColor = value;
            payload.selectedSize = selectedSize; // maintain current size
        } else if (field === 'selectedSize') {
            payload.selectedSize = value;
            payload.selectedColor = selectedColor; // maintain current color
        }

        dispatch(updateCart(payload));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-300 py-4 gap-4">

            <div className="flex items-start gap-4">

                <Image width={600} height={600} src={images[0]} alt={title}
                    className="object-cover aspect-square size-24 rounded-xl" />

                <div className="flex flex-col gap-2">

                    <h3 className="text-base font-semibold"> {title} </h3>

                    <div className="flex gap-2">

                        {colors && (
                            <select value={selectedColor} onChange={(e) => handleUpdate('selectedColor', e.target.value)}
                                className="form-control cursor-pointer rounded text-xs py-1.5">
                                {colors?.map((color, index) => (
                                    <option key={index} value={color.name}> {color.name} </option>
                                ))}
                            </select>
                        )}

                        {sizes && (
                            <select value={selectedSize}
                                onChange={(e) => handleUpdate('selectedSize', e.target.value)}
                                className="form-control cursor-pointer rounded text-xs py-1.5">
                                {sizes?.map((size, index) => (
                                    <option key={index} value={size}> {size} </option>
                                ))}
                            </select>
                        )}

                    </div>

                    {typeof product.stock === 'number' && (
                        product.stock === 0 ? (
                            <p className="text-sm text-red-500">Out of stock</p>
                        ) : product.stock < 5 ? (
                            <p className="text-sm text-yellow-600">Few units left</p>
                        ) : null
                    )}


                </div>

            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-2 w-full pt-2 divide-y lg:divide-y-0 divide-gray-200 lg:pt-0">

                <div className="flex items-center justify-between lg:justify-center text-sm lg:text-base w-full lg:max-w-[150px] text-left sm:text-center pb-2 lg:pb-0">
                    <span className="block lg:hidden">Price</span>
                    <span className="font-semibold"> {formatCurrency(price)} </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between w-full lg:justify-center text-sm lg:text-base pb-3 lg:pb-0">
                    <span className="block lg:hidden">Quantity</span>
                    <QuantitySelector
                        disabled={stock === 0}
                        value={quantity}
                        onChange={(qty) =>
                            dispatch(updateCart({ productId, quantity: qty }))
                        }
                    />
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between lg:justify-center text-sm lg:text-base w-full lg:max-w-[200px] text-right">

                    <span className="block lg:hidden">Subtotal</span>

                    <div className="inline-flex flex-col items-end space-y-1.5">

                        <h3 className="font-semibold"> {formatCurrency(sub)} </h3>

                        <button onClick={() => dispatch(removeFromCart(productId))} type="button" className="cursor-pointer text-red-600 font-medium text-sm flex items-center gap-1">
                            <TrashIcon className="size-5" />
                            <span>Remove</span>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartList