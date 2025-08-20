'use client'

import { TestimonialCardThree } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React from 'react'

const ClientSuccessStories = () => {
    return (
        <div className="space-y-12">

            <h2 className="!text-xl font-bold text-center">Client’s Success Stories</h2>

            <SwiperCarousel
                mobile={1} sm={1} md={1} lg={2} xl={2}
                space={10} spaceMd={15} spaceLg={15}
                loop={false} centered={false}
                autoplay
                group={1} groupMd={1} groupLg={2} groupXl={2}
                navPrevClass='.nav-prev-testimonial'
                navNextClass='.nav-next-testimonial'>

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCardThree testimonial={testimonial} />
                    </SwiperSlide>
                ))}


                {/* ==== NAV ==== */}
                <div className="flex items-center justify-center m-auto gap-5 pt-8">
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="prev" targetClass="testimonial" />
                    <CarouselNavButton className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white' direction="next" targetClass="testimonial" />
                </div>

            </SwiperCarousel>

        </div>
    )
}

export default ClientSuccessStories