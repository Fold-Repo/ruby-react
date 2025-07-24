import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { formatCurrency } from '@/lib'

const CartSummary = ({ subtotal } : { subtotal: number }) => {

    const deliveryFee = 0
    const total = subtotal + deliveryFee

    return (
        <div className="bg-gray-100 rounded-lg p-5 space-y-5">

            <h2 className="text-base font-bold border-b border-gray-400 pb-3">Cart Summary</h2>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold"> { formatCurrency(subtotal) } </span>
            </div>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium">Delivery Fees</span>
                <span className="font-bold"> { formatCurrency(deliveryFee) } </span>
            </div>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium">Total</span>
                <span className="font-bold"> { formatCurrency(total) } </span>
            </div>

            <p className="text-sm">
                Delivery fees have not been included yet.
            </p>

            <Link href="/checkout" className="flex justify-center pt-7">
                <Button size='md' rounded='full' className='px-16'>Checkout</Button>
            </Link>

        </div>
    )
}

export default CartSummary