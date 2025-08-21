'use client'

import { Breadcrumb, Button, Container, QuantitySelector, StarRating } from '@/components'
import { ColorSwatchGroup, ProductFeaturedGallery, ProductInfoSection, ProductTop, SizeBadgeGroup } from '@/components/product'
import { useProductDetails } from '@/service'
import { getUniqueProductImages } from '@/utils'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import RecentAndRelatedProducts from '../RecentAndRelatedProducts'
import { useAppDispatch } from '@/store/hooks'
import { addToRecentViews } from '@/store/productSlice'
import { addToCart } from '@/store/cartSlice'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { FeaturedGallerySkeleton, ProductDetailsSkeleton } from '@/components/skeleton'
import { ProductDetailsAccordions } from '../components'
import { formatCurrency } from '@/lib'

const FixedPriceView = () => {

  const router = useRouter()
  const productId = 6

  const { product, related, isLoading } = useProductDetails(productId || '');
  const { title, price, description, oldPrice, sizes = [], images = [], colors = [], category, ratingAverage,
    ratingTotal, stock, sku, deliveryEstimate, vendor, reviews, ratingsBreakdown } = product || {};

  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [qty, setQty] = useState<number>(1)

  const combinedImages = getUniqueProductImages(images, colors);

  const handleCartAndBuy = (redirect = false) => {
    dispatch(addToCart({
      product,
      selectedColor,
      selectedSize,
      quantity: qty
    }));
    toast.success('Product added to cart');
    if (redirect) {
      router.push('/checkout');
    }
  };

  // ADD AS RECENT VIEWED
  const dispatch = useAppDispatch();
  dispatch(addToRecentViews(product));

  return (
    <>

      <Breadcrumb
        title="Woman Fashion"
        items={[
          { label: 'Product Features' },
        ]}
      />

      <Container>

        <div className="section-lg space-y-16">

          <ProductTop loading={isLoading} product={related} />

          {isLoading ? (

            <LoadingScreen />

          ) : (

            <>

              <ProductFeaturedGallery images={combinedImages} />

              <div className="grid lg:grid-cols-2 gap-10">

                {/* PRODUCT DETAILS LEFT CONTENT */}
                <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 lg:p-10 lg:sticky top-24 h-fit space-y-4">

                  <h1 className="text-base md:text-lg font-semibold block text-gray-800 dark:text-gray-100">
                    {title}
                  </h1>

                  <p className="text-slate-600 dark:text-gray-300 text-[14px] leading-6">
                    {description}
                  </p>

                  {stock !== undefined && (
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full py-1.5 text-sm px-3 max-w-max text-gray-800 dark:text-gray-200">
                      <span>{stock} In stock</span>{' '}
                      <span>{Math.max(0, 50 - stock)} items sold out</span>
                    </div>
                  )}

                  {/*  ==== PRICE ====  */}
                  {(price || oldPrice) && (
                    <div className="items-center flex gap-x-3 text-base md:text-lg font-medium">
                      {price && <p className="text-primary"> {formatCurrency(price)} </p>}
                      {oldPrice && <p className="text-gray-400 dark:text-gray-500 line-through"> {formatCurrency(oldPrice)} </p>}
                    </div>
                  )}

                  {colors.length > 0 && (
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="size">
                        Select Color
                        {selectedColor && <span className="font-bold">: {selectedColor} </span>}
                      </label>
                      <ColorSwatchGroup
                        value={selectedColor}
                        className="size-6"
                        colors={colors}
                        onClick={(color) => {
                          setSelectedColor(color.name)
                          // setSelectedImage(color.image);
                        }}
                      />
                    </div>
                  )}

                  {sizes.length > 1 && (
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="size">
                        Select Size
                        {selectedSize && <span className="font-bold">: {selectedSize} </span>}
                      </label>
                      <SizeBadgeGroup
                        onClick={(s) => setSelectedSize(s)}
                        value={selectedSize}
                        className="cursor-pointer size-7"
                        sizes={sizes}
                      />
                    </div>
                  )}

                  {/* QTY */}
                  <div className="flex flex-col gap-y-3">
                    <label className="text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="qty">
                      Quantity
                    </label>
                    <QuantitySelector value={qty} onChange={setQty} />
                  </div>

                  {(ratingAverage || ratingTotal) && (
                    <div className="flex items-center gap-3 font-medium text-gray-800 dark:text-gray-200">
                      <StarRating size="size-4" value={ratingAverage ?? 0} />
                      <span className="text-sm">
                        {ratingTotal ?? 0} verified ratings
                      </span>
                    </div>
                  )}

                  {/*  ====== ACTIONS BUTTONS =======  */}
                  <div className="space-y-3 pt-3">

                    <Button onClick={() => handleCartAndBuy(true)} disabled={!stock} fullWidth rounded="xl">
                      Buy Now
                    </Button>

                    <Button onClick={() => handleCartAndBuy(false)} disabled={!stock} leftIcon={<ShoppingCartIcon className="size-5" />} 
                      fullWidth rounded="xl">
                      Add to cart
                    </Button>
                    
                  </div>

                </div>


                {/* PRODUCTS DETAILS RIGHT CONTENT */}
                <div className="space-y-10">

                  <ProductInfoSection
                    data={[
                      { type: 'pickup', value: 'At shop location, Usually ready in 12 hours' },
                      deliveryEstimate && {
                        type: 'delivery',
                        value: deliveryEstimate
                      },
                      { type: 'return', value: 'Return within 50 days of purchase. Duties & Taxes are non-refundable.' },
                      vendor?.name && {
                        type: 'store',
                        value: 'To know more about store',
                        href: `/store/${vendor.id}`
                      },
                      { type: 'question' },
                      sku && {
                        type: 'sku',
                        value: sku
                      },
                      vendor?.name && {
                        type: 'vendor',
                        value: vendor.name
                      },
                      stock && {
                        type: 'available',
                        value: `${stock} In stock`
                      },
                      category && {
                        type: 'categories',
                        value: category
                      }
                    ].filter(Boolean) as any} />

                  <ProductDetailsAccordions desc={description}
                    ratingsBreakdown={ratingsBreakdown} reviews={reviews} ratingAverage={ratingAverage} />

                </div>

              </div>

              <RecentAndRelatedProducts productId={productId} />

            </>

          )}

        </div>

      </Container>

    </>
  )
}

const LoadingScreen = () => (
  <div className="space-y-16">

    <FeaturedGallerySkeleton />

    <div className="grid lg:grid-cols-2 gap-10">
      <ProductDetailsSkeleton />
    </div>

  </div>
)

export default FixedPriceView