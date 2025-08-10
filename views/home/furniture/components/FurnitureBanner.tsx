'use client'

import { Button } from '@/components'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import Link from 'next/link'
import React from 'react'

const FurnitureBanner = () => {
    return (
        <div className=" overflow-hidden relative">

            <SwiperCarousel xl={1}
                loop={true}
                space={0}
                autoplay
                paginationClass=".sw-pagination-furniture">

                <SwiperSlide>

                    <div className="relative">

                        <img className="w-full object-cover object-bottom h-[70vh] lg:h-[115vh] 2xl:h-[110vh]"
                            src="/img/banner/furniture.jpg" alt="furniture-slideshow" />

                        <div className="absolute inset-0 top-16 md:top-20 flex justify-center">

                            <div className="container px-4 text-white text-center !max-w-4xl space-y-5">

                                <h1 className="fade-item fade-item-1 text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                                    Creative Home Simpify your Furniture
                                </h1>

                                <p className="fade-item fade-item-2 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base leading-6">
                                    Lorem ipsum dolor sit amet consectetur. Tristique mauris aliquet
                                    neque purus quam. Scelerisque urna a semper nunc velit.
                                </p>

                                <Link href="/shop/shop_features/pagination">
                                    <Button className="fade-item fade-item-3 bg-black text-white !text-xs px-16 m-auto">
                                        Shop Now
                                    </Button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className="relative">

                        <img className="w-full object-cover object-bottom h-[70vh] lg:h-[115vh] 2xl:h-[110vh]"
                            src="/img/banner/furniture.jpg" alt="furniture-slideshow" />

                        <div className="absolute inset-0 top-16 md:top-20 flex justify-center">

                            <div className="container px-4 text-white text-center !max-w-4xl space-y-5">

                                <h1 className="fade-item fade-item-1 text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                                    Creative Home Simpify your Furniture
                                </h1>

                                <p className="fade-item fade-item-2 max-w-2xl mx-auto text-[12px] sm:text-sm md:text-base leading-6">
                                    Lorem ipsum dolor sit amet consectetur. Tristique mauris aliquet
                                    neque purus quam. Scelerisque urna a semper nunc velit.
                                </p>

                                <Link href="/shop_features/pagination">
                                    <Button className="fade-item fade-item-3 bg-black text-white !text-xs px-16 m-auto">
                                        Shop Now
                                    </Button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </SwiperSlide>

                <div className="flex justify-center 
                !z-50 absolute bottom-32 sm:bottom-52 lg:bottom-92 left-1/2 transform 
                -translate-x-1/2">
                    <SwiperDots variant='white' className="sw-pagination-furniture" />
                </div>

            </SwiperCarousel>

        </div>
    )
}

export default FurnitureBanner