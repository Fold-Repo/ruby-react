'use client'

import { Breadcrumb, Container } from '@/components'
import { ProductCard } from '@/components/cards'
import { ProductCardSkeleton } from '@/components/skeleton'
import { useGetWishlists } from '@/service'
import { ProductType } from '@/types'
import React from 'react'

const WishlistView = () => {

    const skeletons = Array.from({ length: 8 })
    const { wishlists, isLoading } = useGetWishlists()

    return (
        <>

            <Breadcrumb
                title='Wishlists'
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'My wishlist' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">

                        {isLoading
                            ? skeletons.map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                            : wishlists?.map((item: ProductType, index: number) => (
                                <ProductCard styleType="style5" key={index} product={item} />
                            ))}

                    </div>

                </div>

            </Container>

        </>
    )
}

export default WishlistView