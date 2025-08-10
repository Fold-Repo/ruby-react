'use client'

import { Button } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const WomenTopBrand = () => {

    const brands = [
        {
            image: '/img/home/women/1.jpg',
            title: 'Capsule Collection',
            link: '/shop/shop_features/shop_collection',
            colSpan: 'lg:col-span-2',
            width: 800,
            height: 1000,
            aspect: 'aspect-7/9',
            size: 'large',
        },
        {
            image: '/img/home/women/2.png',
            title: 'Capsule Collection',
            link: '/shop/shop_features/shop_collection',
            width: 800,
            height: 500,
            aspect: 'aspect-7/4',
            size: 'small',
        },
        {
            image: '/img/home/women/3.jpg',
            title: 'Capsule Collection',
            link: '/shop/shop_features/shop_collection',
            width: 800,
            height: 500,
            aspect: 'aspect-7/4',
            size: 'small',
        },
        {
            image: '/img/home/women/1.jpg',
            title: 'Capsule Collection',
            link: '/shop/shop_features/shop_collection',
            colSpan: 'lg:col-span-2',
            width: 800,
            height: 1000,
            aspect: 'aspect-7/9',
            size: 'large',
        },
    ]

    return (
        <div className="space-y-5">
            <h2 className="text-lg font-bold">Top Brand</h2>

            <div className="grid gird-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 pb-10">

                <div className={`relative ${brands[0].colSpan}`}>
                    <Image
                        src={brands[0].image}
                        alt={brands[0].title}
                        width={brands[0].width}
                        height={brands[0].height}
                        className="w-full h-full rounded-xl object-cover object-top"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/50 rounded-xl">
                        <h2 className="text-white text-lg font-semibold">{brands[0].title}</h2>
                        <Link href={brands[0].link}>
                            <Button variant="outline" className="px-8 bg-transparent border-white rounded-full text-white hover:bg-white hover:text-black">
                                Shop now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* small stacked items */}
                <div className="flex flex-col gap-3 lg:gap-5">
                    {brands.slice(1, 3).map((item, i) => (
                        <div key={i} className={`relative ${item.aspect}`}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                className="w-full h-full bg-gray-300 rounded-xl object-cover object-top"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/50 rounded-xl">
                                <h2 className="text-white text-base font-semibold">{item.title}</h2>
                                <Link href={item.link}>
                                    <Button variant="outline" className="px-8 bg-transparent border-white rounded-full text-white hover:bg-white hover:text-black">
                                        Shop now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`relative ${brands[3].colSpan}`}>
                    <Image
                        src={brands[3].image}
                        alt={brands[3].title}
                        width={brands[3].width}
                        height={brands[3].height}
                        className="w-full h-full rounded-xl object-cover object-top"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/50 rounded-xl">
                        <h2 className="text-white text-lg font-semibold">{brands[3].title}</h2>
                        <Link href={brands[3].link}>
                            <Button variant="outline" className="px-8 bg-transparent border-white rounded-full text-white hover:bg-white hover:text-black">
                                Shop now
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WomenTopBrand
