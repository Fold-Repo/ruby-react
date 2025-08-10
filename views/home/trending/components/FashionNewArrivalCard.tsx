'use client';

import Image from 'next/image';
import Link from 'next/link';

const FashionNewArrivalCard = () => {
    return (
        <div className="relative duration-500 overflow-hidden cursor-pointer rounded-tl-2xl rounded-br-2xl group">

            <div className="w-full aspect-[4/5] relative">
                <Image src="/img/home/trending/1.png" alt="Category" fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="absolute bottom-3 start-3 end-3 duration-500 z-10">
                <Link href="/shop/shop_layout/grid" className="block p-3 text-center w-full rounded-tl-xl rounded-br-xl bg-red text-white">
                    <span className="text-sm font-semibold">Shop Now</span>
                </Link>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/50 rounded-tl-2xl rounded-br-2xl">
                <h2 className="text-white text-lg font-semibold">New Arrivals</h2>
            </div>

        </div>
    );
};

export default FashionNewArrivalCard;
