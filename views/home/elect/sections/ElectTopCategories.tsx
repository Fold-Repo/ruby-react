"use client"

import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { useGetElectTopCategory } from '@/service'
import { ElectCategoryType } from '@/types'
import React from 'react'
import { ElectTopCategoryCard, ElectTopCatSkeleton } from '../components'

const ElectTopCategories = () => {

    const { data, isLoading } = useGetElectTopCategory()

    return (
        <div className="space-y-10">

            <div className="flex flex-wrap items-center gap-3 justify-between">

                <h2 className="text-lg font-bold">Top Categories</h2>

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="prev" targetClass="top" />
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="next" targetClass="top" />
                </div>

            </div>

            <SwiperCarousel
                mobile={2} sm={2} md={3} lg={4} xl={5}
                space={10} spaceMd={10} spaceLg={10}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-top'
                navNextClass='.nav-next-top'>

                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <ElectTopCatSkeleton />
                        </SwiperSlide>
                    ))
                    : data?.map((category: ElectCategoryType, index: number) => (
                        <SwiperSlide key={index}>
                            <ElectTopCategoryCard category={category} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default ElectTopCategories