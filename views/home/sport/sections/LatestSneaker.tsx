"use client"

import { Button, Container } from '@/components'
import { SportProductCard } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetSportProducts } from '@/service'
import { ProductType } from '@/types'
import Link from 'next/link'
import React from 'react'

const LatestSneaker = () => {

    const { response, isLoading } = useGetSportProducts({ page: 1, limit: 10 })
    const products = response?.data || []

    return (
        <Container>

            <div className="space-y-12">

                <div className="flex items-center gap justify-between">

                    <h2 className="text-lg font-bold">Latest Sneaker</h2>

                    <Link href="/shop/shop_layout">
                        <Button size='sm' className="px-8">View All</Button>
                    </Link>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                    {isLoading
                        ? Array.from({ length: 10 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))
                        : products?.map((product: ProductType, index: number) => (
                            <SportProductCard key={index} product={product} />
                        ))}

                </div>

            </div>

        </Container>
    )
}

export default LatestSneaker