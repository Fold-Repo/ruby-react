import { formatCurrency } from '@/lib';
import { OrderProductDetailsType, OrderStatusType } from '@/types'
import Image from 'next/image'
import React from 'react'

const ProductInfo = ({ orderId, status, product, image } : { orderId: string; status: OrderStatusType; product: 
OrderProductDetailsType; image: string }) => {

    const { name, quantity, oldPrice, price } = product || {}

    return (
        <div className="flex flex-col gap-y-4 border border-gray-300 p-3 rounded-xl">

            <div className="inline-flex items-center gap-x-3">

                <div className="inline-flex items-center justify-between px-3 py-1.5 bg-primary text-white text-xs rounded-md">
                    { status }
                </div>

                <span className="text-gray-800 text-sm font-medium">Order ID: #{orderId}</span>

            </div>

            <div className="inline-flex flex-wrap gap-3 items-center">

                <Image width={200} height={300} src={image} alt="User" 
                className="w-24 rounded-lg object-cover aspect-7/7" />

                    <div className="space-y-1">

                        <h2 className="text-gray-800 text-base font-bold"> { name } </h2>

                        <p className="text-sm text-gray-500">QTY: <span className="font-bold"> { quantity } </span></p>

                        <p className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="line-through text-xs">{ formatCurrency(oldPrice) }</span>
                            <span className="font-bold text-primary"> { formatCurrency(price) } </span>
                        </p>

                        <p className="text-sm text-gray-500">
                            The return period start the day you received your order
                        </p>

                    </div>

            </div>

        </div>
    )
}

export default ProductInfo