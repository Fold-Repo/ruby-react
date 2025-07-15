'use client'

import { Button } from '@/components'
import { useGoBack } from '@/hooks'
import React from 'react'
import PaymentInfo from './PaymentInfo'
import DeliveryInfo from './DeliveryInfo'
import ProductInfo from './ProductInfo'
import { ordersData } from '@/data'
import { notFound } from 'next/navigation'

const OrderDetails = ({ orderId } : { orderId: string }) => {

    const goBack = useGoBack()

    const order = ordersData.find(order => order.orderId === orderId)
    if (!order) return notFound()

    const { productDetails, paymentInfo, deliveryInfo, status, image } = order 

    return (
        <>

            <div className="flex items-center justify-between gap-3 border-b border-gray-400 pb-3">

                <h1 className="font-bold text-base md:text-lg">Order Details</h1>

                <Button onClick={goBack} className='px-4' size='sm' type="button" rounded='lg'>
                    Back
                </Button>

            </div>

            {/*  ======== PRODUCT INFO =========  */}
            <ProductInfo orderId={orderId} status={status} image={image} product={productDetails!} />

            <div className="grid md:grid-cols-3 gap-5">

                {/*  ======== Payment Information =========  */}
                <PaymentInfo paymentInfo={paymentInfo!} />

                {/*  ======== Delivery Information =========  */}
                <DeliveryInfo deliveryInfo={deliveryInfo!} />

            </div>

        </>
    )
}

export default OrderDetails