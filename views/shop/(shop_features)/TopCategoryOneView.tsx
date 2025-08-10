'use client'

import { Breadcrumb, Container, FilterToolbar, Pagination, ResponsiveGrid } from '@/components'
import { CategoryCard, ProductCard, ProductListCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { CategoryCardSkeleton, ProductCardSkeleton, ProductListCardSkeleton } from '@/components/skeleton'
import { useQueryParams } from '@/hooks'
import { useGetProductsMetas, useGetTopCategories, useProductQuery } from '@/service'
import { CategoryType, ProductType } from '@/types'
import React from 'react'

const TopCategoryOneView = () => {

  const { searchParams } = useQueryParams()
  const grid = searchParams.get('grid') || '4'
  const sort = searchParams.get('sort') || ''

  // GET CATEGORIES
  const { categories, loadingCat } = useGetTopCategories()

  const { response: filterData = {}, isLoading: pending } = useGetProductsMetas()
  const { products, limit, currentPage, totalItems, isLoading } = useProductQuery({ page: 1, limit: 12 })

  const skeletons = Array.from({ length: 8 })

  return (
    <>

      <Breadcrumb
        title="Woman Fashion"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Woman Fashion' },
        ]}
      />

      <Container>

        <div className="section-lg space-y-16">

          <div className="">

            <SwiperCarousel
              mobile={2} sm={3} md={4} lg={5} xl={6}
              space={10} spaceMd={20} spaceLg={20}
              loop={false} centered={false}
              group={2} groupMd={3} groupLg={4} groupXl={6}
              paginationClass=".sw-pagination-categories">

              {loadingCat
                ? Array.from({ length: 6 }).map((_, i) => (

                  <SwiperSlide key={i}>
                    <CategoryCardSkeleton />
                  </SwiperSlide>
                ))

                : categories?.category_1?.map((cat: CategoryType, index: number) => (
                  <SwiperSlide key={index}>
                    <CategoryCard category={cat} />
                  </SwiperSlide>
                ))}

              {!loadingCat && <SwiperDots className="pt-5 sw-pagination-categories" />}

            </SwiperCarousel>

          </div>

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

          <Pagination initialPage={currentPage} total={totalItems || 0} perPage={limit} />

        </div>

      </Container>

    </>
  )
}

export default TopCategoryOneView