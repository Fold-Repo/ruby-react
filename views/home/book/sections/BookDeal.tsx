"use client"

import { Container, CountdownDisplay } from '@/components'
import { BookProductCardThree } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { BookProductCardThreeSkeleton } from '@/components/skeleton'
import { useGetBooksProduct } from '@/service/product'
import { BookType } from '@/types'
import React from 'react'

const BookDeal = () => {

    const { response, isLoading } = useGetBooksProduct({ page: 1, limit: 6, sort: 'desc' })
    const products = response?.data || [];

    return (
        <Container>

            <div className="space-y-10">

                <div className="flex flex-wrap items-center gap-x-3 gap-y-5 justify-between">

                    <div className="flex items-end flex-wrap gap-4">
                        <h2 className="text-lg font-bold">Deal of the Day</h2>
                        <CountdownDisplay className='font-bold text-xl text-primary'
                            targetDate={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)} />
                    </div>

                    {/* Carousel Navigation Buttons */}

                    <div className="flex items-center gap-x-3">
                        <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="deals" />
                        <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="deals" />
                    </div>

                </div>

                <SwiperCarousel
                    mobile={2} sm={2} md={1} lg={2} xl={2}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={2} groupMd={2} groupLg={2} groupXl={2}
                    navNextClass=".nav-next-deals" navPrevClass='.nav-prev-deals'>

                    {isLoading ? (

                        Array.from({ length: 8 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <BookProductCardThreeSkeleton imageClassName="mx-auto md:mx-0 h-full w-full md:w-44 object-contain" key={index} />
                            </SwiperSlide>
                        ))

                    ) : (
                        products.map((product: BookType, index: string) => (
                            <SwiperSlide key={index}>
                                <BookProductCardThree imageClassName="mx-auto md:mx-0 h-full w-full md:w-44 object-contain"
                                    key={index} product={product} showActions showStockInfo />
                            </SwiperSlide>
                        ))
                    )}

                </SwiperCarousel>

            </div>

        </Container>
    )
}

export default BookDeal