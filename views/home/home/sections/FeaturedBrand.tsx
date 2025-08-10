"use client"

import { SectionHeader } from '@/components'
import { BrandCard } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { BrandSkeleton } from '@/components/skeleton'
import { useGetBrands } from '@/service'
import { BrandType } from '@/types'
import React from 'react'

const FeaturedBrand = () => {

    const { data, isLoading } = useGetBrands()

    return (
        <div className="space-y-7">

            <div className="flex items-end gap-3 justify-between">

                <SectionHeader
                    label="Community Sales"
                    title="Featured Brand"
                />

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="brand" />
                    <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="brand" />
                </div>

            </div>

            <SwiperCarousel
                mobile={2} sm={2} md={3} lg={4} xl={6}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-brand'
                navNextClass='.nav-next-brand'>

                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <BrandSkeleton />
                        </SwiperSlide>
                    ))
                    : data?.map((brand: BrandType, index: number) => (
                        <SwiperSlide key={index}>
                            <BrandCard brand={brand} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default FeaturedBrand