'use client'

import { Button, Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenFashionBanner = () => {
    return (
        <section className="overflow-hidden relative bg-[#EBEBEB]">

            <div className="relative h-[40vh] sm:h-[70vh] lg:h-[80vh]">

                <Image
                    src="/img/banner/men.png"
                    alt="Trending"
                    width={1920}
                    height={1080}
                    priority
                    className="pointer-events-none object-contain sm:object-cover w-full h-full object-top"
                />

                <Container>

                    <div className="bottom-0 absolute">

                        <div className="p-6 bg-white !max-w-md rounded-t-xl text-black space-y-4">

                            <h1 className="fade-item fade-item-1 text-xl sm:text-2xl md:!text-3xl/10 font-bold">
                                Check Out Our New Men Collections
                            </h1>

                            <p className="text-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>

                            <Link href="/shop/shop_features/shop_collection">
                                <Button className="bg-black text-white px-12 !rounded-full">
                                    Explore Collection
                                </Button>
                            </Link>

                        </div>

                    </div>

                </Container>

            </div>

        </section>
    )
}

export default MenFashionBanner