import { Checkbox, Input } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

const CreditCard = () => {
    return (
        <div className="p-5 rounded-xl border border-black/50 dark:border-gray-600 bg-white dark:bg-gray-900 cursor-pointer">

            <div className="flex items-center flex-wrap justify-between gap-3">
                <span className="text-sm lg:text-base font-bold text-black dark:text-gray-200">Credit Card</span>
                <Image width={500} height={50} src="/img/payment/payment_cards.svg" alt="Paypal" className="w-52 sm:w-60" />
            </div>

            <div className="pt-4">

                <p className="text-sm">Please make your payment directly into our bank account. Your order will
                    be shipped only after the funds have been successfully processed.</p>

                <form className="mt-5 flex flex-col gap-2">

                    <Input type='text' radius='xl' name='cardNumber' placeholder='Card Number*' />

                    <div className="grid grid-cols-2 gap-x-4">

                        <Input type='text' radius='xl' name='cardExpiry' placeholder='DD/YY*' />

                        <Input type='text' radius='xl' name='cardCvv' placeholder='CVV*' />

                    </div>

                    <Input type='text' radius='xl' name='cardName' placeholder='Card Name*' />

                    <Checkbox label='Save this information for faster check-out next time' labelClassName='text-black/70 dark:text-gray-300' />

                </form>

            </div>

        </div>
    )
}

export default CreditCard