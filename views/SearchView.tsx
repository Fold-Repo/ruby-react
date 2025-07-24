'use client'

import { Breadcrumb, Container } from '@/components'
import { ProductCard } from '@/components/cards';
import { SearchInput } from '@/components/search';
import { ProductCardSkeleton } from '@/components/skeleton';
import { useInfiniteScroll, useQueryParams } from '@/hooks';
import { useInfiniteProductsQuery } from '@/service';
import { ProductType } from '@/types';
import { Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

const SearchView = () => {

    const router = useRouter()
    const { searchParams } = useQueryParams()
    const searchTerm = searchParams.get('q') || ''

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteProductsQuery({ search: searchTerm });

    const loaderRef = useRef<HTMLDivElement>(null);
    useInfiniteScroll(loaderRef, fetchNextPage, hasNextPage, isFetchingNextPage)

    const products = data?.pages.flatMap(page => page.data) || [];

    const skeletons = Array.from({ length: 8 })

    const formattedTerm = searchTerm
        ? searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
        : 'Search';

    const handleSearch = (value: string) => {
        router.push(`/search?q=${encodeURIComponent(value)}`)
    }

    return (
        <>

            <Breadcrumb
                title={`Results for "${formattedTerm || 'Search'}"`}
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Search', href: '/search' },
                    ...(searchTerm ? [{ label: formattedTerm }] : []),
                ]}
            />

            <Container>

                <div className="section-lg space-y-16">

                    {/* SEARCH BAR */}
                    <div className="max-w-2xl mx-auto space-y-3">

                        <SearchInput className='w-full py-3' value={searchTerm} onSearch={handleSearch} placeholder="Search for products..." />

                        <p className="text-gray-500 text-sm md:text-base "> Search key: <span>Fashion, men, Women, Kid.......</span> </p>

                    </div>

                    {/* RSULTS */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7">

                        {isLoading
                            ? skeletons.map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                            : products?.map((item: ProductType, index: number) => (
                                <ProductCard styleType="style1" key={index} product={item} />
                            ))}

                    </div>

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

export default SearchView