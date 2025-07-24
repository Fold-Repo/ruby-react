'use client'

import { Breadcrumb, Container, FilterToolbar, ResponsiveGrid } from '@/components'
import { ProductCard, ProductListCard } from '@/components/cards'
import { ProductCardSkeleton, ProductListCardSkeleton } from '@/components/skeleton'
import { useInfiniteScroll, useQueryParams } from '@/hooks'
import { useGetProductsMetas, useInfiniteProductsQuery } from '@/service'
import { ProductType } from '@/types'
import { Spinner } from '@heroui/react'
import React, { useRef } from 'react'

const InfiniteView = () => {

  const { searchParams } = useQueryParams()
  const grid = searchParams.get('grid') || '4'
  const sort = searchParams.get('sort') || ''

  const { response: filterData = {}, isLoading: pending } = useGetProductsMetas()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteProductsQuery();

  const loaderRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(loaderRef, fetchNextPage, hasNextPage, isFetchingNextPage)

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

          <div ref={loaderRef} />

          {isFetchingNextPage && (
            <div className="flex items-center justify-center py-4">
              <Spinner color='primary' />
            </div>
          )}

          {!hasNextPage && products.length > 0 && (
            <div className="text-center text-gray-700 font-medium">
              You've reached the end of products
            </div>
          )}


        </div>

      </Container>

    </>
  )
}

export default InfiniteView