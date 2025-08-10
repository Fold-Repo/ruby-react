import { StarRating } from '@/components/reusable';
import { TestimonialType } from '@/types';
import Image from 'next/image';
import React from 'react';

const TestimonialCardFour = ({ testimonial }: { testimonial: TestimonialType }) => {

    const { name, role, message, image = '', rating } = testimonial;

    return (
        <div className="flex flex-col gap-y-8 bg-white p-5 rounded-xl border border-gray-200">

            <div className="flex items-start gap-4">

                <div className="flex-shrink-0">
                    <Image
                        src={image}
                        alt={name}
                        width={56} 
                        height={56}
                        className="rounded-full size-12 object-cover"
                    />
                </div>

                <div className="flex justify-between items-end w-full">

                    <div>
                        <h2 className="font-bold text-base">{name}</h2>
                        <p className="text-xs">{role}</p>
                    </div>

                    <StarRating value={Number(rating)} />

                </div>

            </div>

            <p className="text-sm font-medium text-center">"{message}"</p>

        </div>
    );
};

export default TestimonialCardFour;
