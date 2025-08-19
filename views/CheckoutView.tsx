'use client'

import { Container } from '@/components'
import { CheckOutAuth, CheckoutItem, CheckoutPayments } from '@/components/checkout'
import { formatCurrency } from '@/lib'
import { selectCart } from '@/store/cartSlice'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

const CheckoutView = () => {

    const router = useRouter()
    const cart = useAppSelector(selectCart)
    const { items, totalAmount } = cart

    const discount = 10
    const shipping = 30

    const total = totalAmount + shipping - discount

    if (items.length < 1) router.push('/cart')

    return (
        <Container>

            <div className="section-lg space-y-10">

                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-6 font-bold text-base md:!text-xl text-center 
                    text-gray-900 dark:text-gray-100 rounded-lg">
                    Check out / Choose payment Option
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="space-y-6">
                        <CheckOutAuth />
                        <CheckoutPayments />
                    </div>

                    {/* ====== CART ITEMS =========  */}
                    <div className="space-y-6">

                        <div className="divide-y divide-gray-300 dark:divide-gray-600">
                            {items?.map((item, index) => (
                                <CheckoutItem key={index} item={item} />
                            ))}
                        </div>

                        {/* PRICING DETAILS */}
                        <div className="flex flex-col gap-y-5">

                            <div className="border border-black/30 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-900">

                                <div className="inline-flex gap-3 justify-between w-full py-3 px-4 text-gray-900 dark:text-gray-100">
                                    <span className="font-medium">Subtotal</span>
                                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                                </div>

                                <div className="inline-flex gap-3 justify-between w-full py-3 px-4 text-gray-900 dark:text-gray-100">
                                    <span className="font-medium">Shipping</span>
                                    <span className="font-bold">{formatCurrency(shipping)}</span>
                                </div>

                                <div className="inline-flex gap-3 justify-between w-full py-3 px-4 text-gray-900 dark:text-gray-100">
                                    <span className="font-medium">Discounts</span>
                                    <span className="font-bold">- {formatCurrency(discount)}</span>
                                </div>

                                <div className="inline-flex gap-3 justify-between border-t border-black/30 dark:border-gray-600 p-4 w-full text-gray-900 dark:text-gray-100">
                                    <span className="font-medium">Total</span>
                                    <span className="font-bold">{formatCurrency(total)}</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Container>
    )
}

export default CheckoutView
