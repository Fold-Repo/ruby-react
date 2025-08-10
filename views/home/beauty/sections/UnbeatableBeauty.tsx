"use client"

import { SkincareProductCardTwo, SkincareProductCardThree } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetSkinCareProducts } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const UnbeatableBeauty = () => {

    const { response, isLoading } = useGetSkinCareProducts()
    const products = response?.data

    return (
        <div className="space-y-12">

            <h2 className="!text-xl font-bold text-center">Unbeatable Beauty Deals</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">

                <div className="!w-full col-span-12 lg:col-span-5">

                    <SwiperCarousel
                        mobile={1}
                        space={0} spaceLg={0} spaceMd={0}
                        loop={false} centered={false}
                        autoplay
                        navPrevClass='.nav-prev-unbeat'
                        navNextClass='.nav-next-unbeat'>

                        {products?.slice(1).map((product: ProductType) => (
                            <SwiperSlide key={product.id}>
                                <SkincareProductCardThree product={product} />
                            </SwiperSlide>
                        ))}

                        <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
                            <CarouselNavButton className='bg-white text-black' direction="prev" targetClass="unbeat" />
                            <CarouselNavButton className='bg-white text-black' direction="next" targetClass="unbeat" />
                        </div>


                    </SwiperCarousel>

                </div>

                <div className="col-span-12 lg:col-span-7">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

                        {isLoading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                            : products?.slice(0, 3).map((product: ProductType, index: number) => (
                                <SkincareProductCardTwo key={index} product={product} />
                            ))}

                    </div>

                </div>

            </div>

        </div >
    )
}

export default UnbeatableBeauty