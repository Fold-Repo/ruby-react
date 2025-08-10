'use client'

import Image from 'next/image';
import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
};

const TrendingFashionCardTwo: React.FC<Props> = ({ image, title, description }) => {
    return (
        <div className="relative overflow-hidden cursor-pointer rounded-tl-2xl rounded-br-2xl group">
            <Image
                src={image}
                alt={title}
                width={800}
                height={500}
                className="object-cover aspect-[9/6] w-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="text-white absolute inset-0 flex flex-col items-center justify-center gap-y-2 bg-black/50 rounded-tl-2xl rounded-br-2xl">
                <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
                <p className="max-w-md mx-auto text-center text-sm">{description}</p>
            </div>
        </div>
    );
};

export default TrendingFashionCardTwo;
