'use client';

import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function DiscountBanner() {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-y-10 items-center justify-between max-w-6xl m-auto 
            bg-[#272626] px-10 py-6 rounded-xl">

            <div className="max-w-md text-white space-y-5">

                <h5 className="text-lg lg:!text-xl font-medium">
                    Weekend <span className="text-primary">Discount</span>
                </h5>

                <h4 className="text-2xl/9 md:!text-3xl/11 font-bold">
                    Handcrafted Furniture and Home Décor
                </h4>

                <Link href="/shop/shop_layout">
                    <Button rounded='full' className='px-12 !text-xs'> Shop now</Button>
                </Link>

            </div>

            <div className="relative">

                <img src="/img/home/furniture/18.png" alt="Chair" className="lg:max-h-[300px] -scale-x-100" />

                <img
                    src="/img/home/furniture/19.png"
                    alt="Overlay"
                    className="w-[80%] absolute top-4 left-1/2 -translate-x-1/2"
                />

            </div>

        </div>
    );
}
