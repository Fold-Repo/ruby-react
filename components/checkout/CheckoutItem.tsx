import { formatCurrency } from '@/lib'
import { CartItemType } from '@/types';
import Image from 'next/image'
import React from 'react'

const CheckoutItem = ({ item } :  { item: CartItemType }) => {

    const { product, quantity, selectedColor, selectedSize } = item;
    const { title, images, price } = product;

    return (
        <div className="flex items-center justify-between gap-3 py-4">

            <div className="inline-flex items-center gap-3">

                <Image src={images?.[0]} alt={title}
                width={500} height={500} className="object-cover aspect-[7/7] w-24 rounded-xl" />

                <div className="flex flex-col gap-2">

                    <h3 className="text-sm lg:text-base font-semibold">{title}</h3>

                    <p className="text-xs">
                        Quality <span className="font-bold">{quantity}</span>
                    </p>

                    <div className="flex gap-2">
                        {selectedColor && (
                            <div className="border text-xs rounded-md font-medium py-0.5 border-gray-500 px-2">
                                {selectedColor}
                            </div>
                        )}
                        {selectedSize && (
                            <div className="border text-xs rounded-md font-medium py-0.5 border-gray-500 px-2">
                                {selectedSize}
                            </div>
                        )}
                    </div>

                </div>

            </div>

            <h2 className="font-semibold text-base">
                {formatCurrency(price)}
            </h2>

        </div>
    )
}

export default CheckoutItem