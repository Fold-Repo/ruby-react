import { TestimonialType } from '@/types'
import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

const TestimonialCard = ({ testimonial, active }: { testimonial: TestimonialType; active: boolean }) => {

    const { name, message } = testimonial;

    return (
        <div className={`p-5 md:p-6 !rounded-lg space-y-3 transition-all duration-300 
            ${active ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}
            style={{ boxShadow: '0px 7px 30px 0px #0000000D' }}>

            <RiDoubleQuotesL className="text-3xl" />

            <h2 className="text-base 2xl:text-lg font-bold"> {name} </h2>

            <p className={`${active ? 'text-white' : 'text-gray-600'} text-sm/6`}>
                {message}
            </p>

        </div>
    )
}

export default TestimonialCard