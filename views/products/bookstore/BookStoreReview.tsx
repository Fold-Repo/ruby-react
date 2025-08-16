import { TestimonialCardFive } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React from 'react'

const BookStoreReview = () => {
    return (
        <div className='space-y-8 overflow-hidden'>

            <SwiperCarousel
                mobile={1} sm={1} md={1} lg={2} xl={2}
                space={10} spaceMd={10} spaceLg={10}
                loop={false} autoplay={true}
                group={1} groupMd={1} groupLg={1} groupXl={1}
                className="relative"
                paginationClass=".sw-pagination-testimonial">

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCardFive testimonial={testimonial} />
                    </SwiperSlide>
                ))}

            </SwiperCarousel>

            <SwiperDots variant='primary' className="sw-pagination-testimonial" />

        </div>
    )
}

export default BookStoreReview