'use client'

import { SkincareProductCardTwo } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetSkinCareProducts } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const TodaysTopPick = () => {

    const { response, isLoading } = useGetSkinCareProducts({ page: 1, limit: 5, sort: 'desc' })

    return (
        <div className="space-y-8">

            <div className="text-center space-y-2">
                <h2 className="!text-xl font-bold">Today's Top Picks</h2>
                <p className="text-sm text-gray-700">Fresh styles just in! Elevate your look.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                {isLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    : response?.data?.map((product: ProductType, index: number) => (
                        <SkincareProductCardTwo key={index} product={product} />
                    ))}

            </div>

        </div>
    )
}

export default TodaysTopPick