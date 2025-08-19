"use client"

import { Button, Container } from '@/components'
import { BookProductCard } from '@/components/cards'
import { BookProductCardSkeleton } from '@/components/skeleton'
import { useBookProductQuery } from '@/service'
import { BookType } from '@/types'
import Link from 'next/link'
import React from 'react'

const RecommendedAndBestSeller = () => {

    const { products, isLoading } = useBookProductQuery({ page: 1, limit: 20 })

    const recommendedBooks = products?.slice(0, 5) || []
    const best_sellers_book = products?.slice(6, 11) || []

    return (
        <Container>

            <div className="space-y-12">

                <div className="space-y-8">

                    <h2 className="text-lg font-bold">Recommended Books</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
                        {isLoading ? (
                            Array.from({ length: 10 }).map((_, index) => (
                                <BookProductCardSkeleton key={index} />
                            ))
                        ) : (
                            recommendedBooks.map((product: BookType, index: number) => (
                                <BookProductCard key={index} product={product} />
                            ))
                        )}
                    </div>

                </div>

                <div className="space-y-8">

                    <div className="flex items-center gap justify-between">
                        <h2 className="text-lg font-bold">Ruby BestSellers</h2>
                        <Link href="/shop/shop_features/book_collection">
                            <Button rounded='lg' size='sm' className='px-6'> View All </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
                        {isLoading ? (
                            Array.from({ length: 10 }).map((_, index) => (
                                <BookProductCardSkeleton key={index} />
                            ))
                        ) : (
                            best_sellers_book.map((product: BookType, index: number) => (
                                <BookProductCard key={index} product={product} />
                            ))
                        )}
                    </div>

                </div>

            </div>


        </Container>
    )
}

export default RecommendedAndBestSeller