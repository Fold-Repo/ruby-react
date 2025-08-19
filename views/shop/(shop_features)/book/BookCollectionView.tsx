"use client"

import React from 'react'
import { Breadcrumb, Container, FilterToolbar, ResponsiveGrid } from '@/components'
import { useQueryParams } from '@/hooks'
import { BookProductCard, BookProductCardTwo } from '@/components/cards'
import { useBookProductQuery, useGetProductBooksMetas } from '@/service'
import { BookType } from '@/types'
import { BookProductCardSkeleton, BookProductCardTwoSkeleton } from '@/components/skeleton'
import { BookShopCategory } from '@/views/home/book/sections'

const BookCollectionView = () => {

  const { searchParams } = useQueryParams()
  const grid = searchParams.get('grid') || '4'
  const sort = searchParams.get('sort') || ''

  const { response: filterData = {}, isLoading: pending } = useGetProductBooksMetas()
  const { products, isLoading } = useBookProductQuery({ page: 1, limit: 8 })

  const recommendedBooks = products?.slice(0, 4) || []
  const youMightLikeBooks = products?.slice(4, 8) || []


  const skeletons = Array.from({ length: 8 })

  return (
    <>

      <Breadcrumb
        title="Book Store"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Book Store' },
        ]}
      />

      <Container>

        <div className="section-lg space-y-12">

          <FilterToolbar
            selectedSort={sort}
            selectedGrid={grid}
            loading={pending}
            data={filterData}
            showGridSwitcher={true}
            showFilterToggle={true}
            showSortDropdown={true}
          />

          {/* ==== RECOMMENDED BOOKS ==== */}
          <div className="space-y-8">

            <h2 className="text-lg font-bold">Books Recommend</h2>

            <ResponsiveGrid columns={grid}>

              {isLoading
                ? skeletons.map((_, index) =>
                  grid === '1' ? (
                    <BookProductCardTwoSkeleton key={index} />
                  ) : (
                    <BookProductCardSkeleton key={index} />
                  )
                )
                : recommendedBooks?.map((item: BookType, index: number) =>
                  grid === '1' ? (
                    <BookProductCardTwo key={index} product={item} />
                  ) : (
                    <BookProductCard key={index} product={item} />
                  )
                )
              }

            </ResponsiveGrid>

          </div>

          {/* ==== You Might Also Like ==== */}
          <div className="space-y-8">

            <h2 className="text-lg font-bold">You Might Also Like</h2>

            <ResponsiveGrid columns={grid}>

              {isLoading
                ? skeletons.map((_, index) =>
                  grid === '1' ? (
                    <BookProductCardTwoSkeleton key={index} />
                  ) : (
                    <BookProductCardSkeleton key={index} />
                  )
                )
                : youMightLikeBooks?.map((item: BookType, index: number) =>
                  grid === '1' ? (
                    <BookProductCardTwo key={index} product={item} />
                  ) : (
                    <BookProductCard key={index} product={item} />
                  )
                )
              }

            </ResponsiveGrid>

          </div>

          {/* ==== Our Shop Categories ==== */}
          <BookShopCategory />

        </div>

      </Container>

    </>
  )
}

export default BookCollectionView