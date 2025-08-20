'use client'

import React from 'react'
import Image from 'next/image'
import { TestimonialType } from '@/types'
import { BiSolidQuoteLeft } from 'react-icons/bi'

const TestimonialCardThree = ({ testimonial }: { testimonial: TestimonialType }) => {

    const { name, role = 'Customer', message, image } = testimonial

    return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-4">

            <div className="w-full sm:w-48 shrink-0">
                <Image
                    src={image || '/assets/img/testimonial/1.png'}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-full rounded-lg aspect-7/4 sm:aspect-7/8 object-top object-cover"
                />
            </div>

            <div className="relative pt-3">
                <p className="text-sm pb-5 leading-6 max-w-[90%] text-gray-700 dark:text-gray-300">{message}</p>

                <h5 className="text-sm font-bold pb-1 text-gray-800 dark:text-gray-200">{name}</h5>
                <h6 className="text-xs font-medium text-gray-500 dark:text-gray-400">{role}</h6>

                <BiSolidQuoteLeft className="absolute top-0 right-1 text-4xl text-primary -scale-x-100" />
            </div>
        </div>
    )
}

export default TestimonialCardThree
