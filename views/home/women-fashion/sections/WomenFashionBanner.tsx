'use client'

import { Button, Container } from '@/components'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const slides = [
    {
        title: "Discover and Find Your Own Fashion!",
        description:
            "Step into a world where your style speaks louder than words. Our curated collection is designed to help you express your unique fashion sense with confidence and elegance. Embrace the freedom to be bold, subtle, or somewhere in between — all through your wardrobe.",
        image: "/img/banner/women_fashion.png",
        alt: "Fashion Woman",
        href: "/shop/shop_features/shop_collection",
    },
    {
        title: "Elevate Your Everyday Look",
        description:
            "Transform your wardrobe with pieces that seamlessly blend comfort and sophistication. Whether you're heading to the office or out for a casual weekend, our collection brings you fashion that works for every moment. Reimagine daily dressing with effortless style.",
        image: "/img/banner/women_fashion.png",
        alt: "Fashion Woman",
        href: "/shop/shop_features/shop_collection",
    },
    {
        title: "Redefine Elegance with Us",
        description:
            "Discover timeless pieces and modern trends, all thoughtfully crafted for women who love to stand out. Our fashion line celebrates individuality, blending classic cuts with contemporary flair. It’s time to rewrite elegance — your way, every day.",
        image: "/img/banner/women_fashion.png",
        alt: "Fashion Woman",
        href: "/shop/shop_features/shop_collection",
    },
];

const WomenFashionBanner = () => {
    return (
        <section className="bg-gray-100 pt-12 2xl:pt-20">

            <SwiperCarousel xl={1}
                loop={true}
                autoplay
                paginationClass=".sw-pagination-women">

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        
                        <Container>

                            <div className="px-4 grid md:grid-cols-2 items-center gap-10">

                                <div className="space-y-6">

                                    <h2 className="text-4xl/12 md:text-5xl/14 2xl:text-6xl/18 font-bold text-gray-900">
                                        {slide.title}
                                    </h2>

                                    <p className="text-gray-600">{slide.description}</p>

                                    <Link href={slide.href}>
                                        <Button className="bg-black text-white !rounded-full px-12">
                                            Explore Collection
                                        </Button>
                                    </Link>

                                </div>

                                <div className="relative max-h-[600px] w-full h-auto">
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        width={600}
                                        height={600}
                                        className="w-auto h-auto object-contain max-h-[600px]"
                                        priority
                                    />
                                </div>

                            </div>

                        </Container>

                    </SwiperSlide>
                ))}

                <SwiperDots className="py-12 sw-pagination-women" />

            </SwiperCarousel>

        </section>
    )
}

export default WomenFashionBanner