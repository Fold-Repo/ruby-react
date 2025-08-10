import { SectionHeader } from '@/components'
import { ProductCard } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const WomenBestSelling = () => {

    const { products, isLoading } = useProductQuery({ page: 1, limit: 6, gender: "women" })

    return (
        <div className="space-y-5">

            <div className="flex items-end gap-3 justify-between">

                <SectionHeader
                    label="Featured"
                    title="Best Selling"
                />

                <div className="flex items-center gap-x-3">
                    <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="women_best" />
                    <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="women_best" />
                </div>

            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <SwiperCarousel
                    mobile={2} sm={2} md={2} lg={3} xl={4}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={2} groupMd={2} groupLg={3} groupXl={3}
                    navPrevClass='.nav-prev-women_best'
                    navNextClass='.nav-next-women_best'>

                    {products.map((product: ProductType, index: string) => (
                        <SwiperSlide key={index}>
                            <ProductCard styleType='style1' product={product} />
                        </SwiperSlide>
                    ))}

                </SwiperCarousel>
            )}

        </div>
    )
}

export default WomenBestSelling