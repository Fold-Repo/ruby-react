import { BrandType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandCard = ({ brand }: { brand: BrandType }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-3 overflow-hidden">

            <Image
                src={brand.image}
                alt={brand.name}
                width={300}
                height={400}
                className="object-cover object-top w-full aspect-[7/9] rounded-xl"
            />

            <Link href={`/brand/${brand.id}`}
                className="text-sm md:text-base hover:text-primary font-semibold">
                {brand.name}
            </Link>
            
        </div>
    );
};

export default BrandCard;
