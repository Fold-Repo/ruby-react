'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import Link from 'next/link';
import clsx from 'clsx';
import { MenCollectionType } from '@/types';

const MenNewCollectionCard = ({ item } : { item: MenCollectionType }) => {

    const { image, name, brand } = item

    return (
        <div className="swiper-slide bg-gray-100 rounded-lg relative overflow-hidden group">

            <Image src={image} alt={name} width={400} height={500} 
            className="rounded-lg w-full h-full object-cover object-top aspect-[4/5]"/>

            <div className={clsx(
                    'space-y-3 absolute z-10 bottom-0 w-full bg-black/50 p-4 transition-all duration-300',
                    'group-hover:translate-y-0',
                    'translate-y-[50%]',
                    'lg:group-hover:translate-y-0 lg:translate-y-[55%]'
                )}>

                <div className="flex items-center justify-between text-white gap-2">
                    <h1 className="font-medium">{name}</h1>
                    <h2 className="text-sm">{brand}</h2>
                </div>

                <Link href=''>
                    <Button size='sm' variant="outline"
                        className="w-full rounded-full text-white border !border-white bg-transparent hover:bg-white hover:text-black">
                        Shop now
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default MenNewCollectionCard;
