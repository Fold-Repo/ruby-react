"use client"

import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import React from 'react'
import { InstagramCheckoutCard, InstagramCheckoutSkeleton } from '../components'
import { useGetInstagramProducts } from '@/service'
import { InstagramProductType } from '@/types'

const CheckoutInstagram = () => {

    const { data, isLoading } = useGetInstagramProducts()

    return (
        <div className="space-y-10 mt-10">

            <div className="flex flex-wrap items-center gap-3 justify-between">

                <h2 className="text-lg font-bold">Check us on Instagram</h2>

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="instagram" />
                    <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="instagram" />
                </div>

            </div>

            <SwiperCarousel
                mobile={2} sm={2} md={3} lg={4} xl={5}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={1} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-instagram'
                navNextClass='.nav-next-instagram'>

                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={`skeleton-${index}`}>
                            <InstagramCheckoutSkeleton />
                        </SwiperSlide>
                    ))
                    : data?.map((data: InstagramProductType, index: number) => (
                        <SwiperSlide key={index}>
                            <InstagramCheckoutCard item={data} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default CheckoutInstagram