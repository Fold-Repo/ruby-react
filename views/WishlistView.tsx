'use client'

import { Breadcrumb, Container, EmptyState } from '@/components'
import { ProductCard } from '@/components/cards'
import { useAppSelector } from '@/store/hooks'
import { selectWishlist } from '@/store/wishlistSlice'
import { ProductType } from '@/types'
import React from 'react'

const WishlistView = () => {

    const wishlists = useAppSelector(selectWishlist)

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

                    {wishlists.length === 0 ? (
                        <EmptyState
                            title="Your wishlist is empty."
                            description="Start adding your favorite products to keep track of what you love."
                            actionLabel="Browse Products"
                            actionHref="/shop/shop_layout"
                        />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
                            {wishlists.map((item: ProductType, index: number) => (
                                <ProductCard styleType="style5" key={index} product={item} />
                            ))}
                        </div>
                    )}

                </div>

            </Container>

        </>
    )
}

export default WishlistView