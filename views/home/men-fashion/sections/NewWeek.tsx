import { ProductCard } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const NewWeek = () => {

    const { products = [], isLoading } = useProductQuery({ page: 1, limit: 4, gender: "men", sort: 'desc' })

    return (
        <div className="space-y-6">

            <div>
                <h2 className="text-lg font-bold">New This Week</h2>
                <p className="text-sm">Summer {new Date().getFullYear()} </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">

                {isLoading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                ) : (
                    products?.map((product: ProductType, index: string) => (
                        <ProductCard key={index} styleType='style1' product={product} />
                    ))
                )}

            </div>

        </div>
    )
}

export default NewWeek