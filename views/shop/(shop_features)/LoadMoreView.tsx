'use client'

import { Breadcrumb, Container, FilterToolbar, ResponsiveGrid } from '@/components'
import { ProductCard, ProductListCard } from '@/components/cards'
import { ProductCardSkeleton, ProductListCardSkeleton } from '@/components/skeleton'
import { useQueryParams } from '@/hooks'
import { useGetProductsMetas, useInfiniteProductsQuery } from '@/service'
import { ProductType } from '@/types'
import { Button } from '@heroui/react'
import React from 'react'

const LoadMoreView = () => {

  const { searchParams } = useQueryParams()
  const grid = searchParams.get('grid') || '4'
  const sort = searchParams.get('sort') || ''

  const { response: filterData = {}, isLoading: pending } = useGetProductsMetas()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteProductsQuery({ limit: 8 });

  const products = data?.pages.flatMap(page => page.data) || [];

  const skeletons = Array.from({ length: 8 })

  return (
    <>

      <Breadcrumb
        title="Woman Fashion"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '#' },
          { label: 'Shop Features' },
        ]}
      />

      <Container>

        <div className="section-lg space-y-16">

          <FilterToolbar
            selectedSort={sort}
            selectedGrid={grid}
            loading={pending}
            data={filterData}
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

          {hasNextPage && (
            <div className="flex justify-center mt-6">
              <Button onPress={() => fetchNextPage()}
                isLoading={isFetchingNextPage} className="px-6 py-3 bg-black text-white text-sm">
                Load More
              </Button>
            </div>
          )}


          {!hasNextPage && products.length > 0 && (
            <div className="text-center text-gray-700 font-medium py-4">
              You've reached the end of products
            </div>
          )}


        </div>

      </Container>

    </>
  )
}

export default LoadMoreView