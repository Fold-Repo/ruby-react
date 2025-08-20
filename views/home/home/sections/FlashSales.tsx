"use client"

import { Button, CountdownDisplay, SectionHeader } from '@/components'
import { ProductCardFour } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetOtherProducts } from '@/service'
import { ProductType } from '@/types'
import Link from 'next/link'
import React from 'react'

const FlashSales = () => {

    const { response, isLoading } = useGetOtherProducts()
    const products = response?.data || []

    return (
        <div className="space-y-7">

            <div className="space y-3">

                <SectionHeader label='Today’s' />

                <div className="flex items-center flex-wrap gap-5 justify-between">

                    <div className="flex items-end flex-wrap gap-x-5 gap-y-4">
                        <h2 className="text-xl font-bold">Flash Sales</h2>
                        <CountdownDisplay className='font-bold text-xl text-black' targetDate={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)} />
                    </div>

                    <div className="flex items-center gap-x-3">
                        <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="prev" targetClass="flash_sales" />
                        <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="next" targetClass="flash_sales" />
                    </div>

                </div>

            </div>

            <SwiperCarousel
                mobile={2} sm={2} md={2} lg={3} xl={5}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={1} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-flash_sales'
                navNextClass='.nav-next-flash_sales'>

                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={`skeleton-${index}`}>
                            <ProductCardSkeleton />
                        </SwiperSlide>
                    ))
                    : products?.map((product: ProductType, index: number) => (
                        <SwiperSlide key={index}>
                            <ProductCardFour product={product} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

            <Link href='/shop/shop_layout/grid' className='flex justify-center'>
                <Button className='px-12 rounded-full'>View all products</Button>
            </Link>

        </div>
    )
}

export default FlashSales