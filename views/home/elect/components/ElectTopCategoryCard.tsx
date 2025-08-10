import { ElectCategoryType } from '@/types'
import Image from 'next/image'
import React from 'react'

const ElectTopCategoryCard = ({ category }: { category: ElectCategoryType }) => {

    const { name, image } = category

    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-5">
            <div className="bg-gray-100 rounded-xl aspect-7/7 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="object-cover object-center h-full w-full rounded-lg"
                />
            </div>
            <h2 className="text-base font-semibold">{name}</h2>
        </div>
    )
}

export default ElectTopCategoryCard