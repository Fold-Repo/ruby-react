"use client"

import { BookProductCardFour } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { BookProductCardSkeleton } from '@/components/skeleton'
import { useBookProductQuery } from '@/service'
import { BookType } from '@/types'
import React from 'react'

const BookShopCategory = () => {

    const { products, isLoading } = useBookProductQuery({ page: 1, limit: 20, sort: 'desc' })

    return (
        <div className="space-y-8">

            <h2 className="text-lg font-bold">Our Shop Categories</h2>

            <SwiperCarousel
                mobile={2} sm={2} md={3} lg={4} xl={5}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                autoplay
                group={2} groupMd={2} groupLg={3} groupXl={4}
                paginationClass=".sw-pagination">

                {isLoading ? (

                    Array.from({ length: 8 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <BookProductCardSkeleton key={index} />
                        </SwiperSlide>
                    ))

                ) : (
                    products.map((product: BookType, index: string) => (
                        <SwiperSlide key={index}>
                            <BookProductCardFour product={product} />
                        </SwiperSlide>
                    ))
                )}

                <SwiperDots className="pt-5 sw-pagination" />

            </SwiperCarousel>

        </div>
    )
}

export default BookShopCategory