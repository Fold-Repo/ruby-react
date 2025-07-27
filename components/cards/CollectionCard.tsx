import React from 'react'
import Image from 'next/image'
import { CollectionType } from '@/types'

const CollectionCard = ({ collection } : { collection: CollectionType }) => {

    const {  img, title, subtitle, alt = '' } = collection || {}

    return (
        <div className="relative group duration-500 overflow-hidden cursor-pointer rounded-tl-2xl rounded-br-2xl">

            <Image src={img} alt={alt} width={500} height={625}
                className="object-cover aspect-[4/5] group-hover:scale-105 transition-transform 
                duration-500 w-full h-auto"
            />

            <div className="absolute bottom-5 left-3 right-3 duration-500 z-10">
                
                <div className="py-2 px-5 inline-flex flex-wrap items-center justify-between bg-white w-full rounded-lg">

                    <span className="text-sm font-semibold">{title}</span>

                    <span className="text-gray-600 text-[12.5px] font-medium">{subtitle}</span>

                </div>
                
            </div>

        </div>
    )
}

export default CollectionCard
