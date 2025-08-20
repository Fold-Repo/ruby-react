import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductType } from '@/types'
import React from 'react'
import { MenShopLookCard, MenShopLookCardSkeleton } from '../components'
import { useProductQuery } from '@/service'

const MenComingSoonProducts = () => {

    const { products = [], isLoading } = useProductQuery({ page: 1, limit: 7, gender: "men", sort: 'desc' })

    return (
        <div className="space-y-6 w-full">

            <div className="flex items-center gap-3 justify-between mb-5">

                <h2 className="text-lg font-bold">Coming Soon New Product</h2>

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="prev" targetClass="coming_soon" />
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="next" targetClass="coming_soon" />
                </div>

            </div>

            {/* PRODUCTS CAROUSEL */}
            <SwiperCarousel
                mobile={2} sm={2} md={2} lg={4} xl={5}
                space={10} spaceMd={20} spaceLg={20}
                loop={false} centered={false}
                group={2} groupMd={2} groupLg={3} groupXl={3}
                navPrevClass='.nav-prev-coming_soon'
                navNextClass='.nav-next-coming_soon'>

                { isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <MenShopLookCardSkeleton />
                        </SwiperSlide>
                    ))
                    : products.map((product: ProductType) => (
                        <SwiperSlide key={product.id}>
                            <MenShopLookCard product={product} />
                        </SwiperSlide>
                    ))}

            </SwiperCarousel>

        </div>
    )
}

export default MenComingSoonProducts