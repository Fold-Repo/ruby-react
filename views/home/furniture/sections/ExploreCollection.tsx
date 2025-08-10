import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const collections = [
    {
        title: 'Bed Room',
        subtitle: 'Furniture',
        desc: 'Best-selling Furniture items product collection',
        image: '/img/home/furniture/1.png',
        span: 'lg:col-span-4',
        isMain: true,
    },
    {
        title: 'Office Chair',
        subtitle: 'Furniture',
        image: '/img/home/furniture/2.png',
        reverse: true,
        span: 'lg:col-span-2',
    },
    {
        title: 'Office Table',
        subtitle: 'Furniture',
        image: '/img/home/furniture/4.png',
    },
    {
        title: 'Lamp & Table',
        subtitle: 'Furniture',
        image: '/img/home/furniture/3.jpg',
    },
    {
        title: 'Office Table',
        subtitle: 'Furniture',
        image: '/img/home/furniture/5.jpg',
        wide: true,
    }
]

const ExploreCollection = () => {
    return (
        <Container>
            <div className="space-y-10">
                
                <h2 className="text-lg font-bold">Explore Our Collections</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    {/* Bedroom Collection (Main) */}
                    {collections.filter(item => item.isMain).map((item, index) => (
                        <div key={index} className={`${item.span} bg-light-pink p-2 rounded-xl flex flex-col justify-between gap-y-5 h-full`}>
                            <div className="p-5 space-y-4">
                                <Link href="/shop/shop_features/shop_collection/" className="block hover:text-primary text-gray-700 text-sm md:!text-base font-semibold">
                                    {item.title} <br />
                                    <span className="px-5">{item.subtitle}</span>
                                </Link>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={350}
                                className="w-full rounded-lg aspect-[7/4] object-cover"
                            />
                        </div>
                    ))}

                    {/* Office Collections */}
                    <div className="lg:col-span-8 flex flex-col space-y-5">

                        {/* ===== Top Row ====== */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {collections.slice(1, 3).map((item, index) => (
                                <div key={index}
                                    className={`${item.span || ''} bg-light-pink p-2 rounded-xl flex ${item.reverse ? 'flex-col lg:flex-row' : 'flex-col'} justify-between gap-4 overflow-hidden`}>
                                    <div className="p-5 space-y-4">
                                        <Link href="/shop_features/shop_collection/" className="block hover:text-primary text-gray-700 text-sm md:!text-base font-semibold">
                                            {item.title} <br />
                                            <span className="px-5">{item.subtitle}</span>
                                        </Link>
                                    </div>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={350}
                                        className={`rounded-lg object-contain ${item.reverse ? 'self-end max-h-[200px] sm:max-h-[250px] scale-x-[-1]' : 'w-full aspect-[7/4] object-cover'}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ===== Bottom Row ===== */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {collections.slice(3).map((item, index) => {
                                if (item.wide) {
                                    return (
                                        <div key={index} className="sm:col-span-1 lg:col-span-2 bg-light-pink p-2 rounded-xl flex flex-col lg:flex-row justify-between">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={600}
                                                height={350}
                                                className="w-full lg:max-w-[65%] rounded-lg object-cover"
                                            />
                                            <div className="p-5 space-y-4">
                                                <Link href="/shop_features/shop_collection/" className="block hover:text-primary text-gray-700 text-sm md:!text-base font-semibold">
                                                    {item.title} <br />
                                                    <span className="px-5">{item.subtitle}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }

                                return (
                                    <div key={index} className="bg-light-pink p-2 rounded-xl flex flex-col justify-between gap-y-5">
                                        <div className="p-5">
                                            <Link href="/shop_features/shop_collection/" className="block hover:text-primary text-gray-700 text-sm md:!text-base font-semibold">
                                                {item.title} <br />
                                                <span className="px-5">{item.subtitle}</span>
                                            </Link>
                                        </div>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={600}
                                            height={350}
                                            className="w-full rounded-lg aspect-[7/4] object-cover"
                                        />
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>

            </div>

        </Container>
    )
}

export default ExploreCollection
