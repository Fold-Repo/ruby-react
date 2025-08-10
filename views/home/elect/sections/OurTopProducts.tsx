"use client"

import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { useGetElectTopProducts } from '@/service'
import React from 'react'
import { ElectTopProductCard, ElectTopProductCardSkeleton } from '../components'
import { ElectCategoryType } from '@/types'

const OurTopProducts = () => {

    const { data, isLoading } = useGetElectTopProducts()
    
    return (
        <div className="space-y-8">

            <div className="flex flex-wrap items-center gap-3 justify-between">

                <h2 className="text-lg font-bold">Top Categories</h2>

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="top_products" />
                    <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="top_products" />
                </div>

            </div>

            <SwiperCarousel
                mobile={1} sm={2} md={2} lg={3} xl={3}
                space={10} spaceMd={10} spaceLg={10}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={2} groupXl={2}
                navPrevClass='.nav-prev-top_products'
                navNextClass='.nav-next-top_products'>

                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <ElectTopProductCardSkeleton />
                        </SwiperSlide>
                    ))
                    : data?.map((item: ElectCategoryType, index: number) => (
                        <SwiperSlide key={index}>
                            <ElectTopProductCard product={item} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default OurTopProducts