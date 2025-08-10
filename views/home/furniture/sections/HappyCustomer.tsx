'use client'

import { TestimonialCardTwo } from '@/components/cards'
import { CarouselNavButton, SwiperCarousel, SwiperSlide } from '@/components/carousel'
import { testimonials } from '@/data'
import React from 'react'

const HappyCustomer = () => {
    return (
        <div className="space-y-12 relative">

            <h2 className="text-xl font-bold text-left">
                Trusted by Thousands of <br /> Happy Customers
            </h2>

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
                        <TestimonialCardTwo testimonial={testimonial} />
                    </SwiperSlide>
                ))}


                {/* ==== NAV ==== */}
                <div className="flex items-center justify-center m-auto gap-5 pt-8">
                    <CarouselNavButton className='bg-gray-200 text-black' direction="prev" targetClass="testimonial" />
                    <CarouselNavButton className='bg-gray-200 text-black' direction="next" targetClass="testimonial" />
                </div>

            </SwiperCarousel>

            <div>

                <div className="absolute -bottom-5 left-0">
                    <img src="/img/testimonial/test_svg.svg" className="-scale-y-100 max-w-[100px]" alt="SVG" />
                </div>

                <div className="absolute top-5 right-0">
                    <img src="/img/testimonial/test_svg.svg" className="max-w-[100px]" alt="SVG" />
                </div>

            </div>

        </div>
    )
}

export default HappyCustomer