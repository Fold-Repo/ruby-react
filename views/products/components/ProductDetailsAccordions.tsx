'use clinet'

import { Accordion } from '@/components'
import React from 'react'
import ProductReview from './ProductReview'
import { ProductReviewType, RatingBreakdownType } from '@/types'
import ProductDesc from './ProductDesc'
import ProductsPolicy from './ProductsPolicy'
import ShippingAndReturn from './ShippingAndReturn'

const ProductDetailsAccordions = ({ desc, ratingsBreakdown, reviews, ratingAverage } : 
{ desc: string; ratingsBreakdown: RatingBreakdownType; reviews: ProductReviewType[], ratingAverage: number }) => {

    const style = 'cursor-pointer !border-b-0 bg-gray-200/80 rounded-lg py-3 px-4 text-gray-600'

    return (
        <div className='space-y-4'>

            <Accordion defaultOpen={true} className='gap-y-5' buttonClassName={style} title="Customer Reviews">

                <ProductReview ratingsBreakdown={ratingsBreakdown} reviews={reviews} 
                ratingAverage={ratingAverage} />

            </Accordion>

            <Accordion buttonClassName={style} title="Description">
                <ProductDesc desc={desc} />
            </Accordion>

            <Accordion buttonClassName={style} title="Return Policies">
                <ProductsPolicy />
            </Accordion>

            <Accordion buttonClassName={style} title="Shipping & Returns">
                <ShippingAndReturn />
            </Accordion>

        </div>
    )
}

export default ProductDetailsAccordions