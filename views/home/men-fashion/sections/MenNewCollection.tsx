'use client'

import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { useGetMenCollections } from '@/service'
import React from 'react'
import { MenNewCollectionCard, MenNewCollectionCardSkeleton } from '../components'
import { MenCollectionType } from '@/types'

const MenNewCollection = () => {

    const { response: collections = [], isLoading } = useGetMenCollections()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-5">

            <div className="lg:col-span-3">

                {isLoading ? (
                    <MenNewCollectionCardSkeleton />
                ) : (
                    <MenNewCollectionCard item={collections[0]} />
                )}

            </div>

            <div className="lg:col-span-9 flex flex-col justify-between h-full">

                <div className="flex items-center gap-3 justify-between mb-5">

                    <div>
                        <h2 className="text-lg font-bold">New Collection</h2>
                        <p className="text-sm">Summer 2025</p>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <CarouselNavButton className='text-gray-800 bg-gray-200' direction="prev" targetClass="collection" />
                        <CarouselNavButton className='text-gray-800 bg-gray-200' direction="next" targetClass="collection" />
                    </div>

                </div>

                <div className="w-full">

                    <SwiperCarousel
                        mobile={2} sm={2} md={2} lg={3} xl={4}
                        space={10} spaceMd={20} spaceLg={20}
                        loop={false} centered={false}
                        group={1} groupMd={2} groupLg={3} groupXl={3}
                        navPrevClass='.nav-prev-collection'
                        navNextClass='.nav-next-collection'>

                        {isLoading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <SwiperSlide key={i}>
                                    <MenNewCollectionCardSkeleton />
                                </SwiperSlide>
                            ))
                            : collections?.slice(1).map((collection: MenCollectionType, index: number) => (
                                <SwiperSlide key={index}>
                                    <MenNewCollectionCard item={collection} />
                                </SwiperSlide>
                            ))}

                    </SwiperCarousel>

                </div>

            </div>

        </div>
    )
}

export default MenNewCollection