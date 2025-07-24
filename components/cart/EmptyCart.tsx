import React from 'react'
import { Button } from '../ui'
import Link from 'next/link'
import Image from 'next/image'

const EmptyCart = () => {
    return (
        <div className="max-w-xl m-auto text-center">

            <Image width={500} height={500} src="/img/empty_cart.svg" alt="Empty Cart" className="size-28 md:size-30 m-auto" />

            <div className="space-y-2 mt-6">

                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    You have not added any items to your cart.
                </h2>

                <p className="text-sm md:text-base text-black/50">Browse our categories and discover our best product</p>

                <Link href="/shop/shop_layout" className="flex justify-center pt-5">
                    <Button size='md' rounded='full' className='px-12'>Start Shopping</Button>
                </Link>

            </div>

        </div>
    )
}

export default EmptyCart