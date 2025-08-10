import { SectionHeader } from '@/components'
import { ProductCardThree } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardThreeSkeleton } from '@/components/skeleton'
import { useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const NewArrivalProducts = () => {

    const { products, isLoading } = useProductQuery({
        page: 1,
        limit: 10,
        type: 'deals',
    })

    return (
        <div className="space-y-7">

            <div className="flex items-end gap-3 justify-between">

                <SectionHeader title="New Arrival" />

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='text-gray-800 bg-gray-200' direction="prev" targetClass="new" />
                    <CarouselNavButton className='text-gray-800 bg-gray-200' direction="next" targetClass="new" />
                </div>

            </div>


            <SwiperCarousel
                mobile={2} sm={2} md={2} lg={3} xl={5}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-new'
                navNextClass='.nav-next-new'>

                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            <ProductCardThreeSkeleton />
                        </SwiperSlide>
                    ))
                    : products?.map((product: ProductType, index: number) => (
                        <SwiperSlide key={index}>
                            <ProductCardThree product={product} />
                        </SwiperSlide>
                    ))}


            </SwiperCarousel>

        </div>
    )
}

export default NewArrivalProducts