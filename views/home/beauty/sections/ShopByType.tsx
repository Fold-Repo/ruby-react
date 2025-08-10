'use client'

import { SectionHeader } from '@/components'
import { SkincareProductCard } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetSkinCareProducts } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const ShopByType = () => {

    const { response, isLoading } = useGetSkinCareProducts({ page: 1, limit: 5 })

    return (
        <div className="space-y-7">

            <div className="flex items-end gap-3 justify-between">

                <SectionHeader title="Shop By Product Type" />

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton direction="prev" targetClass="type" />
                    <CarouselNavButton direction="next" targetClass="type" />
                </div>

            </div>


            <SwiperCarousel
                mobile={2} sm={2} md={3} lg={4} xl={5}
                space={10} spaceMd={10} spaceLg={10}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={4}
                navPrevClass='.nav-prev-type'
                navNextClass='.nav-next-type'>

                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={`skeleton-${index}`}>
                            <ProductCardSkeleton />
                        </SwiperSlide>
                    ))
                    : response?.data?.map((product: ProductType, index: number) => (
                        <SwiperSlide key={index}>
                            <SkincareProductCard product={product} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default ShopByType