"use client"

import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import Image from 'next/image'
import React from 'react'

const ElectBanner = () => {
    return (
        <div className="relative h-[30vh] sm:h-[60vh] xl:h-[75vh] 2xl:h-[60vh] rounded-xl overflow-hidden">

            <SwiperCarousel
                xl={1}
                loop={true}
                space={5}
                spaceLg={5}
                spaceMd={5}
                autoplay
                paginationClass=".sw-pagination-elect">

                {['elect_1.jpg', 'elect_2.jpg', 'elect_3.jpg'].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                width={1200}
                                height={600}
                                className="w-full h-full object-cover rounded-xl"
                                src={`/img/banner/${img}`}
                                alt={`Electronics ${index + 1}`}
                            />
                            <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                        </div>
                    </SwiperSlide>
                ))}

            </SwiperCarousel>

            <div className="absolute bottom-7 left-0 w-full flex justify-center z-[5]">
                <SwiperDots
                    variant="white"
                    className="sw-pagination-elect"
                />
            </div>

        </div>
    )
}

export default ElectBanner
