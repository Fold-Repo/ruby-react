import { EmptyState } from '@/components'
import { ProductCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots } from '@/components/carousel'
import { useAppSelector } from '@/store/hooks'
import { selectRecentViews } from '@/store/productSlice'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

const RecentView = () => {

    const products = useAppSelector(selectRecentViews)

    return (
        <>

            {products?.length < 1 ? (
                <EmptyState imageSrc='/img/empty_cart.svg' title="Recently Viewed" description="No recently viewed products." />
            ) : (
                <SwiperCarousel
                    mobile={1} sm={2} md={2} lg={3}  xl={4}
                    space={10} spaceMd={20} spaceLg={20}
                    loop={false} centered={false}
                    group={1} groupMd={2} groupLg={3} groupXl={3}
                    paginationClass=".sw-pagination-recent">

                    {products.map((product, index) => (
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

export default RecentView
