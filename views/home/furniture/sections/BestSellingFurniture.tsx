'use client'

import { Button } from '@/components'
import { FurnitureProductCard } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useProductQuery } from '@/service'
import { ProductType } from '@/types'
import Link from 'next/link'
import React from 'react'

const BestSellingFurniture = () => {

    const { products = [], isLoading } = useProductQuery({ page: 1, limit: 6, category: "Furniture" })

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            <div className="lg:col-span-4 2xl:col-span-3 flex flex-col justify-center bg-black lg:rounded-r-xl py-16 md:py-20 lg:py-5 px-10">

                <div className="contaner flex flex-col lg:items-end lg:text-right text-white dark:text-gray-200 space-y-6">

                    <h2 className="font-semibold text-xl">Best - Selling Furnitures</h2>

                    <p className="text-[13px] lg:max-w-xs">
                        Lorem ipsum dolor sit amet consectetur. Tristique mauris aliquet neque purus quam.
                    </p>

                    <Link href="/shop/shop_layout/grid">
                        <Button rounded='full' className='!text-xs px-12'>More Products</Button>
                    </Link>

                </div>

            </div>

            <div className="max-w-7xl px-6 lg:col-span-8 2xl:col-span-9 lg:pt-12">

                <SwiperCarousel
                    mobile={2} sm={2} md={2} lg={3} xl={4}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={1} groupMd={2} groupLg={3} groupXl={3}
                    navPrevClass='.nav-prev-best'
                    navNextClass='.nav-next-best'>

                    {isLoading
                        ? Array.from({ length: 8 }).map((_, index) => (
                            <SwiperSlide key={`skeleton-${index}`}>
                                <ProductCardSkeleton />
                            </SwiperSlide>
                        ))
                        : products?.map((product: ProductType, index: number) => (
                            <SwiperSlide key={index}>
                                <FurnitureProductCard product={product} />
                            </SwiperSlide>
                        ))}

                </SwiperCarousel>

                <div className="flex items-center justify-end gap-x-3">
                    <CarouselNavButton className='bg-gray-200 text-black dark:bg-gray-700 dark:text-white' direction="prev" targetClass="best" />
                    <CarouselNavButton className='bg-gray-200 text-black dark:bg-gray-700 dark:text-white' direction="next" targetClass="best" />
                </div>

            </div>

        </div >
    )
}

export default BestSellingFurniture
