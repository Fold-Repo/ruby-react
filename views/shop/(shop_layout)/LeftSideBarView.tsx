'use client'

import { Breadcrumb, Container, FilterToolbar, Pagination, ResponsiveGrid } from '@/components'
import { ProductCard, ProductListCard } from '@/components/cards'
import Filterbar from '@/components/filter/Filterbar'
import { ProductCardSkeleton, ProductListCardSkeleton } from '@/components/skeleton'
import { useQueryParams } from '@/hooks'
import { useGetProductsMetas, useProductQuery } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const LeftSideBarView = () => {

  const { searchParams } = useQueryParams()
  const grid = searchParams.get('grid') || '4'
  const sort = searchParams.get('sort') || ''

  const { response: filterData = {}, isLoading: pending } = useGetProductsMetas()
  const { products, limit, currentPage, totalItems, isLoading } = useProductQuery({ page: 1, limit: 12 })

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
            loading={pending}
            data={filterData}
            showGridSwitcher={true}
            showFilterToggle={false}
            showSortDropdown={true}
          />


          <div className="grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-10">

            <div className="hidden lg:block col-span-3 bg-white">

              <Filterbar loading={pending} data={filterData} />

            </div>

            <div className="col-span-12 lg:col-span-9">

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

            </div>

          </div>

          <Pagination initialPage={currentPage} total={totalItems || 0} perPage={limit} />

        </div>

      </Container>

    </>
  )
}

export default LeftSideBarView