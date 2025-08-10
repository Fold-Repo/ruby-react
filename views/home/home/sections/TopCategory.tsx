import { Button, SectionHeader } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopCategory = () => {
    return (
        <div className="space-y 6">

            <SectionHeader title='Top Categories' label='Category' />

            <div className="grid lg:grid-cols-12 gap-4">

                {/* === Women === */}
                <div className="relative lg:col-span-4">

                    <Image
                        src="/img/home/home/19.jpg"
                        alt="Women"
                        width={500}
                        height={500}
                        className="w-full h-full aspect-7/6 lg:aspect-7/9 rounded-xl object-cover object-top"
                    />

                    <div className="text-white absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50 rounded-xl">

                        <h2 className="text-lg font-bold">Women</h2>
                        <p className="text-sm">Lorem Ipsum is simply dummy</p>

                        <Link href="/shop/shop_layout/grid">
                            <Button
                                variant="outline"
                                className="px-8 bg-transparent hover:bg-white hover:text-black border-white rounded-full">
                                Shop now
                            </Button>
                        </Link>

                    </div>

                </div>

                {/* === Men & Accessories === */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-8">

                    <div className="relative">
                        <div className="flex items-center aspect-9/6 lg:aspect-9/3 gap-5 p-3">
                            <Image
                                src="/img/home/home/14.jpg"
                                alt="Men 1"
                                width={500}
                                height={500}
                                className="w-full h-full rounded-xl object-cover object-center"
                            />
                            <Image
                                src="/img/home/home/13.jpg"
                                alt="Men 2"
                                width={500}
                                height={500}
                                className="w-full h-full rounded-xl object-cover object-center"
                            />
                        </div>

                        <div className="text-white absolute inset-0 flex flex-col items-center justify-center gap-y-4 bg-black/50 rounded-xl">
                            <h2 className="text-lg font-bold">Men</h2>
                            <p className="text-sm">Lorem Ipsum is simply dummy</p>

                            <Link href="/shop/shop_layout/grid">
                                <Button
                                    variant="outline"
                                    className="px-8 bg-transparent hover:bg-white hover:text-black border-white rounded-full"
                                >
                                    Shop now
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Accessories */}
                    <div className="relative">

                        <Image
                            src="/img/home/home/12.jpg"
                            alt="Accessories"
                            width={500}
                            height={500}
                            className="w-full h-full aspect-9/6 lg:aspect-9/3 rounded-xl object-cover object-center"
                        />

                        <div className="text-white absolute inset-0 flex flex-col items-center justify-center gap-y-4 bg-black/50 rounded-xl">
                            <h2 className="text-lg font-bold">Accessories</h2>
                            <p className="text-sm">Lorem Ipsum is simply dummy</p>

                            <Link href="/shop/shop_layout/grid">
                                <Button
                                    variant="outline"
                                    className="px-8 bg-transparent hover:bg-white hover:text-black border-white rounded-full">
                                    Shop now
                                </Button>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TopCategory