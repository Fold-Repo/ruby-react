"use client"

import { Button } from '@/components'
import { ElectronicProductCard } from '@/components/cards'
import { ElectronicProductCardSkeleton } from '@/components/skeleton'
import { useGetElectronicsProducts } from '@/service'
import { ProductType } from '@/types'
import Link from 'next/link'
import React from 'react'

const ElectTodayPicks = () => {

    const { response, isLoading } = useGetElectronicsProducts({ limit: 4 })
    const products = response?.data || []

    return (
        <div className="space-y-10">

            <div className="flex items-center gap justify-between">

                <h2 className="text-lg font-bold">Today’s picks</h2>

                <Link href="/shop/shop_layout">
                    <Button size='sm' className="px-8">View All</Button>
                </Link>

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 xl:gap-5">

                {isLoading ? (
                    [...Array(4)].map((_, i) => (
                        <ElectronicProductCardSkeleton />
                    ))
                ) : (
                    products.map((product: ProductType, index: number) => (
                        <ElectronicProductCard key={index} product={product} />
                    ))
                )}

            </div>

        </div>
    )
}

export default ElectTodayPicks