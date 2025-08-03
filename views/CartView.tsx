'use client'

import { Breadcrumb, Container, Input } from '@/components'
import { CartItem, CartSummary, CouponInput, EmptyCart } from '@/components/cart'
import { selectCart } from '@/store/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const CartView = () => {

    const carts = useSelector(selectCart)
    const { items, totalAmount } = carts

    return (
        <>

            <Breadcrumb
                title='Shopping cart'
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Shopping cart' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    {items.length < 1 ? (

                        <EmptyCart />

                    ) : (
                        <div className='space-y-14'>

                            <CartItem carts={carts?.items} />

                            <div className="grid md:grid-cols-2 items-start gap-5">

                                <CouponInput />

                                <CartSummary subtotal={totalAmount} />

                            </div>

                        </div>
                    )}

                </div>

            </Container>

        </>
    )
}

export default CartView