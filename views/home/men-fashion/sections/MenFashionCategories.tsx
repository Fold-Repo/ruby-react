import { Button } from '@/components'
import Link from 'next/link'
import React from 'react'

const MenFashionCategories = () => {
    return (
        <div className="space-y-5">

            <h2 className="text-lg font-bold">Fashion Categories</h2>

            <div className="grid gird-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 pb-10">

                <div className="relative lg:col-span-2 lg:my-12">

                    <img src="/img/home/man_fashion/4.jpg" alt="Image"
                        className="w-full h-full aspect-7/9 object-cover object-top" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                        <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                        <Link href="/shop/shop_features/shop_collection">
                            <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col gap-3 lg:gap-5 lg:my-24">

                    <div className="relative h-full">

                        <img src="/img/home/man_fashion/5.jpg" alt="Image"
                            className="bg-gray-300 aspect-7/4 h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline'
                                    className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                    <div className="relative h-full">

                        <img src="/img/home/man_fashion/6.jpg" alt="Image"
                            className="bg-gray-300 aspect-7/4  h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-3 lg:gap-5">

                    <div className="relative">

                        <img src="/img/home/man_fashion/7.jpg" alt="Image"
                            className="bg-gray-300 aspect-square h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                    <div className="relative">

                        <img src="/img/home/man_fashion/8.jpg" alt="Image"
                            className="bg-gray-300 aspect-square h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                    <div className="relative">

                        <img src="/img/home/man_fashion/9.jpg" alt="Image"
                            className="bg-gray-300 aspect-square h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-3 lg:gap-5 lg:my-24">

                    <div className="relative h-full">

                        <img src="/img/home/man_fashion/10.jpg" alt="Image"
                            className="bg-gray-300 aspect-7/4 h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                    <div className="relative h-full">

                        <img src="/img/home/man_fashion/11.jpg" alt="Image"
                            className="bg-gray-300 aspect-7/4 h-full w-full object-cover object-top" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 bg-black/50">
                            <h2 className="text-white text-sm md:!text-base font-semibold">Capsule Collection</h2>
                            <Link href="/shop/shop_features/shop_collection">
                                <Button size='sm' variant='outline' className="bg-transparent px-8 border-white rounded-full text-white hover:bg-black">Shop now</Button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MenFashionCategories