'use client'

import { Container, Tab } from '@/components'
import { FurnitureProductCard } from '@/components/cards';
import { ProductCardSkeleton } from '@/components/skeleton';
import { useProductQuery } from '@/service';
import { ProductType } from '@/types';
import React, { useState } from 'react'

const tabItems = [
    { key: "new_arrivals", title: "New Arrivals" },
    { key: "best_seller", title: "Best seller" },
    { key: "on_sales", title: "On Sale" },
];
const ExploreProducts = () => {

    const [activeTab, setActiveTab] = useState("new_arrivals");

    const { products = [], isLoading } = useProductQuery({ page: 1, limit: 20, category: "Furniture", sort: "desc" })

    return (
        <Container>

            <div className="space-y-12">

                <div className="flex items-center gap-3 justify-between flex-wrap">

                    <h2 className="text-lg font-bold">Explore Our Products</h2>

                    <Tab tabs={tabItems} active={activeTab} onChange={setActiveTab} />

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                    {isLoading ? (
                        Array.from({ length: 10 }).map((_, index) => (
                            <ProductCardSkeleton />
                        ))
                    ) : (
                        products.map((product: ProductType, index: number) => (
                            <FurnitureProductCard product={product} />
                        ))
                    )}

                </div>

            </div>

        </Container>
    )
}

export default ExploreProducts