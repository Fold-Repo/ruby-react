import React from 'react';
import Image from 'next/image';
import { ApparelType } from '@/types';
import Link from 'next/link';
import { Button } from '@/components';

const ApparelCard = ({ apparel } : { apparel: ApparelType }) => {

    const { name, desc, image } = apparel

    return (
        <div className="relative">

            <Image
                src={image}
                alt={name}
                width={800}
                height={800}
                className="aspect-square object-cover w-full h-full"
            />

            <div className="space-y-2 absolute bottom-0 w-full text-white bg-black/50 p-5 text-center">

                <h2 className="text-base md:!text-lg lg:!text-xl font-bold">{name}</h2>

                <p className="text-[13px] lg:!text-sm">{desc}</p>

                <Link href="#">
                    <Button variant='white' size='sm' className="text-black px-12">Shop Now</Button>
                </Link>

            </div>

        </div>
    );
};

export default ApparelCard;
