"use client"

import { TestimonialCardFour } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React from 'react'

const SportTestimonial = () => {
    return (
        <div className="">

            <SwiperCarousel
                mobile={1} sm={2} md={2} lg={2} xl={3}
                space={10} spaceMd={10} spaceLg={10}
                loop={true} autoplay={true}
                group={1} groupMd={1} groupLg={1} groupXl={1}
                className="relative"
                centered
                paginationClass=".sw-pagination-testimonial">

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCardFour testimonial={testimonial} />
                    </SwiperSlide>
                ))}

                <SwiperDots variant='primary' className="pt-5 sw-pagination-testimonial" />

            </SwiperCarousel>

        </div>
    )
}

export default SportTestimonial