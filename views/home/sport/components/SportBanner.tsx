'use client'

import { Button, Container } from '@/components'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const slides = [
    {
        image: "/img/banner/sport.png",
        title: "Unlimited Sportwear",
        description: "Step up your style with our latest collection don’t miss out",
        link: "/shop/shop_features/categories_top_1/",
        buttonText: "Explore our categories"
    },
    {
        image: "/img/banner/sport.png",
        title: "Elevate Your Game",
        description: "Discover top-tier sportswear that supports your performance.",
        link: "/shop/shop_features/categories_top_1/",
        buttonText: "Shop now"
    },
    {
        image: "/img/banner/sport.png",
        title: "Fresh Drops Weekly",
        description: "Stay ahead in style and comfort with our new arrivals.",
        link: "/shop/shop_features/categories_top_1/",
        buttonText: "Browse collection"
    }
]

const SportBanner = () => {
    return (
        <section className="relative overflow-hidden">

            <SwiperCarousel xl={1} loop={true} space={0} autoplay paginationClass=".sw-pagination-sport">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>

                        <div className="relative h-[50vh] lg:!h-[89vh] w-full">

                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover object-bottom"
                                priority={index === 0} 
                            />

                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute inset-0 flex items-center justify-end">
                                <Container>
                                    <div className="text-white space-y-3 lg:space-y-4">
                                        <h1 className="fade-item fade-item-1 text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                                            {slide.title}
                                        </h1>
                                        <p className="max-w-2xl text-sm md:text-base">
                                            {slide.description}
                                        </p>
                                        <Link href={slide.link}>
                                            <Button className='gap-x-2 bg-white px-6 text-black hover:bg-white'>
                                                {slide.buttonText}
                                                <ArrowUpRightIcon className='size-4' />
                                            </Button>
                                        </Link>
                                    </div>
                                </Container>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

            </SwiperCarousel>

            <SwiperDots variant='white' className="absolute bottom-5 z-5 py-12 sw-pagination-sport" />

        </section>
    )
}

export default SportBanner
