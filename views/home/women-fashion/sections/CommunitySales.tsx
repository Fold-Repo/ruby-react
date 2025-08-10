'use client'

import { SectionHeader, Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const salesItems = [
    {
        image: '/img/home/women/4.png',
        title: 'Accessories',
        desc: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
        link: '/shop/shop_layout/grid',
    },
    {
        image: '/img/home/women/5.jpg',
        title: 'Dresses',
        desc: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
        link: '/shop/shop_layout/grid',
    },
    {
        image: '/img/home/women/6.png',
        title: 'Outerwear',
        desc: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
        link: '/shop/shop_layout/grid',
    },
]

const CommunitySales = () => {
    return (
        <div className="space-y-5">
            
            <SectionHeader label="Community Sales" title="Clothe Design For You" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {salesItems.map((item, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl aspect-7/9 bg-gray-300">

                        <Image src={item.image} alt={item.title}
                            width={500} height={650}
                            className="w-full h-full object-cover object-top rounded-xl"
                        />

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 text-center p-4 rounded-xl">

                            <div className="max-w-xs text-white space-y-4">

                                <h2 className="text-white text-lg font-semibold">{item.title}</h2>

                                <p className="text-[13px] leading-5">{item.desc}</p>

                                <Link href={item.link}>
                                    <Button variant="outline"
                                        className="mt-2 px-8 border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full">
                                        Shop now
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommunitySales
