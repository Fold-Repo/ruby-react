'use client'

import { Breadcrumb, Container, FilterToolbar, Pagination, ResponsiveGrid } from '@/components'
import { ProductCard, ProductListCard } from '@/components/cards'
import { ProductCardSkeleton, ProductListCardSkeleton } from '@/components/skeleton'
import { useQueryParams } from '@/hooks'
import { useGetProductsMetas, useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const ShopLayoutView = () => {

    const { searchParams } = useQueryParams()
    const grid = searchParams.get('grid') || '4'
    const sort = searchParams.get('sort') || ''
    
    const { response: filterData = {}, isLoading: pending } = useGetProductsMetas()
    const { products, limit, currentPage, totalItems, isLoading } = useProductQuery({ page: 1, limit: 8 })

    const skeletons = Array.from({ length: 8 })

    return (
        <>

            <Breadcrumb
                title="Woman Fashion"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Shop', href: '#' },
                    { label: 'Shop Layout' },
                ]}
            />

            <Container>

                <div className="section-lg space-y-16">

                    <FilterToolbar
                        selectedSort={sort}
                        selectedGrid={grid}
                        data={filterData}
                        loading={pending}
                        showGridSwitcher={true}
                        showFilterToggle={true}
                        showSortDropdown={true}
                    />


                    <ResponsiveGrid columns={grid}>

                        {isLoading
                            ? skeletons.map((_, index) =>
                                grid === '1' ? (
                                    <ProductListCardSkeleton key={index} />
                                ) : (
                                    <ProductCardSkeleton key={index} />
                                )
                            )
                            : products?.map((item: ProductType, index: number) =>
                                grid === '1' ? (
                                    <ProductListCard styeType="style1" key={index} product={item} />
                                ) : (
                                    <ProductCard styleType="style1" key={index} product={item} />
                                )
                            )
                        }

                    </ResponsiveGrid>

                    <Pagination initialPage={currentPage} total={totalItems || 0} perPage={limit} />

                </div>

            </Container>

        </>
    )
}

export default ShopLayoutView