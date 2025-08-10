import { StarRating } from '@/components/reusable';
import { TestimonialType } from '@/types';
import Image from 'next/image';
import React from 'react';

const TestimonialCardFive = ({ testimonial }: { testimonial: TestimonialType }) => {
    const { name, role, message, image = '', rating } = testimonial;

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row gap-6 sm:items-start">


            <div className="flex-1 space-y-4">

                <StarRating value={Number(rating)} />

                <p className="text-[13px] leading-6 text-gray-600">
                    {message}
                </p>

            </div>

            <div className="flex flex-col items-center sm:items-start shrink-0 gap-3 text-center sm:text-left">

                <Image
                    src={image}
                    alt={name}
                    width={144} 
                    height={144}
                    className="w-36 aspect-square rounded-lg object-cover object-top"
                />

                <div className="space-y-0.5">
                    <h5 className="text-sm font-bold">{name}</h5>
                    <h6 className="text-xs font-medium text-gray-500">{role}</h6>
                </div>

            </div>
            
        </div>
    );
};

export default TestimonialCardFive;
