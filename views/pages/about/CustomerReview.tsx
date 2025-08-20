import { FeedBackCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { feedbacksData } from '@/data'
import React from 'react'

const CustomerReview = () => {
    return (
        <div className="space-y-5">

            <div className="max-w-6xl space-y-3">
                <h1 className="font-bold text-lg lg:text-xl text-primary">What Our Customers Are Saying</h1>
                <p className="text-sm text-gray-400">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.
                </p>
            </div>

            <SwiperCarousel mobile={1} sm={2} md={2} lg={3} xl={4}
                space={10} spaceMd={10} spaceLg={10}
                group={1} groupMd={2} groupLg={3} groupXl={4}
                loop={false} centered={false}
                autoplay
                paginationClass=".sw-pagination-feedback">
                {feedbacksData.map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <FeedBackCard {...feedback} />
                    </SwiperSlide>
                ))}

                <SwiperDots className="pt-5 sw-pagination-feedback" />

            </SwiperCarousel>

        </div>
    )
}

export default CustomerReview