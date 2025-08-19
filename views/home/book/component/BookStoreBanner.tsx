import { Button } from '@/components'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookStoreBanner = () => {
    return (
        <section className="overflow-hidden relative">

            <div className="relative">

                <Image src="/img/banner/bookstore.png"
                    alt="Bookstore" width={1920} height={1080}
                    priority className="w-full object-cover object-bottom h-[50vh] lg:h-[70vh]"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                    <div className="container text-white text-center !max-w-4xl space-y-4 lg:space-y-5">

                        <h1 className="text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                            Books & Beyond
                        </h1>

                        <p className="max-w-2xl mx-auto text-base lg:!text-lg leading-7">
                            Your perfect read is waiting
                        </p>

                        <Link href="/shop/shop_features/book_collection" className='flex items-center justify-center'>
                            <Button variant='white' className="text-sm bg-white text-black px-12 " rounded='xl' rightIcon={
                                <ArrowUpRightIcon className="size-4" />}>
                                Shop now
                            </Button>
                        </Link>

                    </div>

                </div>

                <div className="absolute bottom-5 inset-x-0 flex items-center justify-center">
                    <div className="relative text-white text-center text-sm" >
                        <Image width={800} height={30} src="/img/badge.svg" className="w-92" alt="Badge" />
                            <p className="absolute inset-0 flex items-center justify-center z-50">
                                Free Shipping on all orders over $20.00
                            </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default BookStoreBanner