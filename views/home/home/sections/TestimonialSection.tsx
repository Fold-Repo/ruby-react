"use client"

import { SectionHeader } from '@/components'
import { TestimonialCardFive } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React from 'react'

const TestimonialSection = () => {
    return (
        <div className="space-y-8 overflow-hidden">

            <SectionHeader title='Our Customer' label='Testimonials' />

            <div className="relative md:ml-8 py-5 md:py-12">

                <div className="absolute top-0 left-0 md:top-1/2 transform md:-translate-y-1/2 z-0 h-[325px] w-full max-w-[70%] 
                border-8 border-red-500 p-5" />

                <div className="pl-10">

                    <SwiperCarousel
                        mobile={1} sm={2} md={2} lg={2} xl={2}
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

                </div>

            </div>

            <SwiperDots variant='primary' className="sw-pagination-testimonial" />

        </div>
    )
}

export default TestimonialSection