import Link from 'next/link';
import React from 'react';
import { Button } from '../ui';
import { formatCurrency } from '@/lib';

const CartSummary = ({ subtotal }: { subtotal: number }) => {

    const deliveryFee = 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-5 space-y-5">

            <h2 className="text-base font-bold border-b border-gray-400 dark:border-gray-600 pb-3">
                Cart Summary
            </h2>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium text-gray-800 dark:text-gray-200">Subtotal</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">{formatCurrency(subtotal)}</span>
            </div>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium text-gray-800 dark:text-gray-200">Delivery Fees</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">{formatCurrency(deliveryFee)}</span>
            </div>

            <div className="flex items-center gap-3 justify-between text-sm md:text-base">
                <span className="font-medium text-gray-800 dark:text-gray-200">Total</span>
                <span className="font-bold text-gray-900 dark:text-gray-100">{formatCurrency(total)}</span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
                Delivery fees have not been included yet.
            </p>

            <Link href="/checkout" className="flex justify-center pt-7">
                <Button size="md" rounded="full" className="px-16">
                    Checkout
                </Button>
            </Link>

        </div>
    );
};

export default CartSummary;
