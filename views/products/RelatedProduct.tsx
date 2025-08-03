import { ProductCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetRelatedProduct } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const RelatedProduct = ({ productId }: { productId: number | string }) => {

    const { isLoading, response } = useGetRelatedProduct(productId)
    const products = response?.related || []

    return (
        <>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <SwiperCarousel
                    mobile={1} sm={2} md={2} lg={3} xl={4}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={1} groupMd={2} groupLg={3} groupXl={3}
                    paginationClass=".sw-pagination-recent">

                    {products.map((product: ProductType, index: string) => (
                        <SwiperSlide key={index}>
                            <ProductCard styleType='style1' product={product} />
                        </SwiperSlide>
                    ))}

                    <SwiperDots className="pt-5 sw-pagination-recent" />

                </SwiperCarousel>
            )}

        </>
    )
}

export default RelatedProduct