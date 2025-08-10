import { SectionHeader } from '@/components'
import { ProductCard } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const WomenTopPicks = () => {

    const { products, isLoading } = useProductQuery({ page: 1, limit: 8, gender: "women" })

    return (
        <div className="space-y-5">

            <SectionHeader
                label="Category"
                title="Today’s Top Picks"
            />

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    : products.map((product: ProductType, index: number) => (
                        <ProductCard
                            key={index}
                            styleType='style1'
                            product={product}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default WomenTopPicks