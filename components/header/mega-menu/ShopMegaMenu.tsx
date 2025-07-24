import { ProductCardTwo } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { shopMenuGroups } from '@/constants'
import { useGetProducts } from '@/service'
import { ProductType } from '@/types'
import Link from 'next/link'
import React from 'react'

const ShopMegaMenu = () => {

    const { response, isLoading } = useGetProducts({ limit: 2 })
    const products = response?.data

    const skeletons = Array.from({ length: 2 })

    return (
        <div className="grid grid-cols-6 gap-3">

            {shopMenuGroups.map((group, index) => (
                <div key={index} className="flex flex-col">
                    <h1 className="text-sm !font-semibold mb-4">{group.title.toUpperCase()}</h1>
                    <ul className="space-y-2.5 font-medium text-[13px] text-gray-700">
                        {group.items.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.href} className="hover:text-primary transition-colors duration-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="flex flex-col col-span-2">

                <h1 className="text-sm font-semibold mb-4">TOP CATEGORIES</h1>

                <div className="grid grid-cols-2 gap-3">
                    {isLoading
                        ? skeletons.map((_, index) =>
                            <ProductCardSkeleton key={index} />
                        )
                        : products?.map((item: ProductType, index: number) =>
                            <ProductCardTwo key={index} product={item} />
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default ShopMegaMenu