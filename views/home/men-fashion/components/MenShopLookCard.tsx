import { Button } from '@/components'
import { ProductType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenShopLookCard = ({ product }: { product: ProductType }) => {

    const { images, title, description, id } = product || {}

    return (
        <div className="swiper-slide bg-gray-100 rounded-lg relative overflow-hidden">

            <div className="relative w-full aspect-[7/9]">
                <Image
                    src={images[0]}
                    alt={title}
                    width={400}
                    height={514}
                    className="w-full h-full object-cover object-top rounded-lg"
                    priority
                />
            </div>

            <div className="space-y-2 absolute z-10 bottom-0 w-full bg-black/50 p-3 text-white">

                <h1 className="font-semibold text-sm">{title}</h1>
                <p className="text-[11px] !line-clamp-2">{description}</p>

                <Link href={`/products/${id}`}>
                    <Button size='sm' className="w-full rounded-full hover:bg-black">
                        Shop the Look
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export default MenShopLookCard