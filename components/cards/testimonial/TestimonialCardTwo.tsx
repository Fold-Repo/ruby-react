'use client'

import React from 'react'
import Image from 'next/image'
import { TestimonialType } from '@/types'


const TestimonialCardTwo = ({ testimonial }: { testimonial: TestimonialType }) => {

    const { name, role = 'Customer', message, image, date } = testimonial

    return (
        <div className="bg-white shadow p-3 rounded-lg border border-gray-100 flex flex-col sm:flex-row gap-4">

            <div className="w-full sm:w-52 shrink-0">
                <Image src={image || ''} alt={name}
                    width={300}
                    height={300}
                    className="w-full rounded-lg aspect-7/4 sm:aspect-7/8 sm:object-top object-cover"
                />
            </div>

            <div className="relative pt-3 space-y-5">

                <div className="space-y-1">
                    <h6 className="text-xs pb-2">{date}</h6>
                    <h5 className="text-lg font-semibold">{name}</h5>
                    <h6 className="text-xs font-medium">{role}</h6>
                </div>

                <p className="text-[13px] leading-relaxed text-gray-700">{message}</p>

            </div>

        </div>
    )
}

export default TestimonialCardTwo
