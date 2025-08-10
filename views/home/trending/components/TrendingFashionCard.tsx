import { TrendingFashionType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TrendingFashionCard = ({ item } : { item: TrendingFashionType }) => {
    return (
        <Link href='/shop/shop_features/categories_top_1' 
            className="relative group duration-500 overflow-hidden cursor-pointer rounded-tl-2xl rounded-br-2xl">

            <div className="relative w-full aspect-[4/5]">
                <Image src={item.image} alt={item.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>

            <div className="absolute bottom-5 start-3 end-3 duration-500 z-10">

                <div className="bg-[#9F141499] text-center text-white flex flex-col items-center justify-center gap-y-1.5 p-3 w-full 
                rounded-tl-xl rounded-br-xl">

                    <span className="text-sm lg:!text-base font-bold">{item.title}</span>
                    <span className="text-sm font-medium">{item.desc}</span>

                </div>

            </div>

        </Link>
    )
}

export default TrendingFashionCard