'use client'

import { SectionHeader } from '@/components'
import { TestimonialCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React, { useState } from 'react'

const WomenFashionTestimonial = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-10">

            <SectionHeader label="Testimonials" title="Our Customer" />

            <SwiperCarousel
                mobile={1} sm={2} md={2} lg={2} xl={3}
                space={10} spaceMd={20} spaceLg={20}
                loop={true} autoplay={true}
                group={1} groupMd={1} groupLg={2} groupXl={2}
                className="relative"
                centered
                onRealIndexChange={({ realIndex }) => setActiveIndex(realIndex)}
                paginationClass=".sw-pagination-testimonial">

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard testimonial={testimonial} active={index === activeIndex} />
                    </SwiperSlide>
                ))}

                <SwiperDots className="pt-10 sw-pagination-testimonial" />

            </SwiperCarousel>


        </div>
    )
}

export default WomenFashionTestimonial