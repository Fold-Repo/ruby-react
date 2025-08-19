"use client"

import { Tab } from '@/components';
import { ElectronicProductCard } from '@/components/cards';
import { ElectronicProductCardSkeleton } from '@/components/skeleton';
import { useGetElectronicsProducts } from '@/service';
import { ProductType } from '@/types';
import React, { useState } from 'react'

const tabItems = [
    { key: "all", title: "All Products" },
    { key: "new", title: "New Product" },
    { key: "best_seller", title: "Best Seller" },
];
const ElectTrendingProducts = () => {

    const [activeTab, setActiveTab] = useState(tabItems[0].key)
    const { response, isLoading } = useGetElectronicsProducts({ limit: 4 })
    const products = response?.data || []

    return (
        <div className="space-y-10">

            <div className="flex items-center flex-wrap gap-3 justify-between">

                <h2 className="text-lg font-bold">Trending Products</h2>

                <Tab tabs={tabItems} active={activeTab} onChange={setActiveTab} />

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 xl:gap-5">

                { isLoading ? (
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

export default ElectTrendingProducts