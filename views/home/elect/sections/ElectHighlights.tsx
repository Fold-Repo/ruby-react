'use client'

import React from 'react'
import { ElectronicProductCardTwo } from '@/components/cards'
import { useGetElectronicsProducts } from '@/service'
import { ProductType } from '@/types'
import { ElectProductTwoSkeleton } from '@/components/skeleton'

const ElectHighlights: React.FC = () => {
    const { response, isLoading } = useGetElectronicsProducts({ limit: 6, sort: 'desc' })
    const products: ProductType[] = response?.data || []

    const newProducts: ProductType[] = products.slice(0, 2)
    const featuredProducts: ProductType[] = products.slice(2, 4)
    const bestOfWeek: ProductType[] = products.slice(4, 6)
    const popularInCategory: ProductType[] = products.slice(0, 2)

    const renderProducts = (items: ProductType[]) => {
        if (isLoading) {
            return (
                <>
                    <ElectProductTwoSkeleton />
                    <ElectProductTwoSkeleton />
                </>
            )
        }

        if (items.length === 0) {
            return <p className="text-sm text-gray-500">No products found.</p>
        }

        return items.map((product, index) => (
            <ElectronicProductCardTwo key={index} product={product} />
        ))
    }

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

            <div className="flex flex-col gap-y-8">
                <h2 className="text-base font-bold">New Products</h2>
                <div className="grid grid-cols-1 gap-y-3">{renderProducts(newProducts)}</div>
            </div>

            <div className="flex flex-col gap-y-8">
                <h2 className="text-base font-bold">Featured products</h2>
                <div className="grid grid-cols-1 gap-y-3">{renderProducts(featuredProducts)}</div>
            </div>

            <div className="flex flex-col gap-y-8">
                <h2 className="text-base font-bold">Best of the week</h2>
                <div className="grid grid-cols-1 gap-y-3">{renderProducts(bestOfWeek)}</div>
            </div>

            <div className="flex flex-col gap-y-8">
                <h2 className="text-base font-bold">Popular In category</h2>
                <div className="grid grid-cols-1 gap-y-3">{renderProducts(popularInCategory)}</div>
            </div>

        </div>
    )
}

export default ElectHighlights
