import { SectionHeader } from '@/components'
import { CollectionSkeleton } from '@/components/skeleton'
import { CollectionType } from '@/types'
import { CollectionCard } from '@/components/cards'
import { useGetCollections } from '@/service'
import React from 'react'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'

const TrendingFashionCategories = () => {

    const { response: collections = [], isLoading } = useGetCollections({ limit: 10 })

    return (
        <div className="space-y-7">

            <div className="flex items-end gap-3 justify-between">

                <SectionHeader title="Categories" />

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton direction="prev" targetClass="category" />
                    <CarouselNavButton direction="next" targetClass="category" />
                </div>

            </div>


            <SwiperCarousel
                mobile={2} sm={2} md={2} lg={3} xl={4}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-category'
                navNextClass='.nav-next-category'>

                {isLoading ? (
                    <CollectionSkeleton count={4} />
                ) : (
                    collections.map((collection: CollectionType, index: number) => (
                        <SwiperSlide key={index}>
                            <CollectionCard collection={collection} />
                        </SwiperSlide>
                    ))
                )}

            </SwiperCarousel>

        </div>
    )
}

export default TrendingFashionCategories