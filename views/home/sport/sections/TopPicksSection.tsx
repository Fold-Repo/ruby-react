"use client"

import { Container } from '@/components'
import { SportProductCard } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetSportProducts } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const TopPicksSection = () => {

    const { response, isLoading } = useGetSportProducts({ page: 1, limit: 6 })
    const products = response?.data || []

    return (
        <Container>

            <div className="space-y-10">

                <div className="flex flex-wrap items-center gap-3 justify-between">

                    <h2 className="text-lg font-bold">Top Pick’s </h2>

                    <div className="flex items-center gap-x-3">
                        <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="prev" targetClass="top" />
                        <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="next" targetClass="top" />
                    </div>

                </div>

                <SwiperCarousel
                    mobile={2} sm={2} md={3} lg={4} xl={5}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={1} groupMd={2} groupLg={3} groupXl={3}
                    navPrevClass='.nav-prev-top'
                    navNextClass='.nav-next-top'>

                    {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={`skeleton-${index}`}>
                            <ProductCardSkeleton />
                        </SwiperSlide>
                    ))
                    : products?.map((product: ProductType, index: number) => (
                        <SwiperSlide key={index}>
                            <SportProductCard product={product} />
                        </SwiperSlide>
                    ))}

                </SwiperCarousel>

            </div>

        </Container>
    )
}

export default TopPicksSection