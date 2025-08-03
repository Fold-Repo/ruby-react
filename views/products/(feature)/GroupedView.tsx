'use client';

import { Breadcrumb, Button, Container, StarRating } from '@/components';
import { ColorSwatchGroup, ProductImageGallery, ProductInfoSection, ProductTop, SizeBadgeGroup } from '@/components/product';
import { useProductDetails } from '@/service';
import { getUniqueProductImages } from '@/utils';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import RecentAndRelatedProducts from '../RecentAndRelatedProducts';
import { useAppDispatch } from '@/store/hooks';
import { addToRecentViews } from '@/store/productSlice';
import { addToCart } from '@/store/cartSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ProductDetailsSkeleton, ProductImageGallerySkeleton } from '@/components/skeleton';
import { FreqBoughtCard } from '@/components/cards';
import { ColorType, ProductType } from '@/types';
import { formatCurrency } from '@/lib';

const GroupedView = () => {
  const router = useRouter();
  const [productId] = useState<number>(Math.floor(Math.random() * 18) + 1);

  const { product, related, group, isLoading } = useProductDetails(productId || '');
  const { title, price, description, oldPrice, sizes = [], images = [], colors = [], category, ratingAverage,
    ratingTotal, stock, sku, deliveryEstimate, vendor } = product || {};

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [qty] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedGroupItems, setSelectedGroupItems] = useState<
    {
      product: ProductType;
      selectedColor: string;
      selectedSize: string;
      quantity: number;
    }[]
  >([]);

  const combinedImages = getUniqueProductImages(images, colors);
  const dispatch = useAppDispatch();

  if (product) dispatch(addToRecentViews(product));

  const handleCartAndBuy = (redirect = false) => {
    // Add main product
    dispatch(addToCart({ product, selectedColor, selectedSize, quantity: qty }));

    // Add selected group items
    selectedGroupItems.forEach((item) => {
      dispatch(
        addToCart({
          product: item.product,
          selectedColor: item.selectedColor,
          selectedSize: item.selectedSize,
          quantity: item.quantity,
        })
      );
    });

    toast.success('Product(s) added to cart');

    if (redirect) {
      router.push('/checkout');
    }
  };

  const handleGroupSelectionChange = ({ checked, product, selectedColor, selectedSize, quantity }: {
    checked: boolean;
    product: ProductType;
    selectedColor: string;
    selectedSize: string;
    quantity: number;
  }) => {
    if (checked) {
      console.log(quantity)
      setSelectedGroupItems((prev) => {
        const alreadyExists = prev.find((p) => p.product.id === product.id);
        if (alreadyExists) {
          return prev.map((p) =>
            p.product.id === product.id
              ? { product, selectedColor, selectedSize, quantity }
              : p
          );
        }
        return [...prev, { product, selectedColor, selectedSize, quantity }];
      });
    } else {
      setSelectedGroupItems((prev) =>
        prev.filter((p) => p.product.id !== product.id)
      );
    }
  };

  const totalPrice = (price || 0) * qty +
    selectedGroupItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const totalOldPrice = (oldPrice || 0) * qty +
    selectedGroupItems.reduce((sum, item) => {
      if (item.product.oldPrice && item.product.oldPrice > item.product.price) {
        return sum + item.product.oldPrice * item.quantity;
      }
      return sum;
    }, 0);

  return (
    <>
      <Breadcrumb
        title="Woman Fashion"
        items={[{ label: 'Product Features' }]} />

      <Container>
        <div className="section-lg space-y-16">
          <ProductTop loading={isLoading} product={related} />

          {isLoading ? (

            <LoadingScreen />

          ) : (
            <>
              <div className="grid lg:grid-cols-2 gap-10">
                <ProductImageGallery
                  thumbPosition="bottom"
                  images={combinedImages}
                  selectedImage={selectedImage}
                  onImageSelect={(img) => {
                    setSelectedImage(img);
                    const matchedColor = colors?.find((c: ColorType) => c.image === img);
                    if (matchedColor) setSelectedColor(matchedColor.name);
                  }}
                />

                <div className="space-y-4">
                  <h1 className="text-base md:text-lg font-semibold block">{title}</h1>
                  <p className="text-slate-500 md:block hidden text-[15px]">{description}</p>

                  {stock !== undefined && (
                    <div className="border border-gray-300 rounded-full py-1.5 text-sm px-3 max-w-max">
                      <span>{stock} In stock</span>{' '}
                      <span>{Math.max(0, 50 - stock)} items sold out</span>
                    </div>
                  )}

                  {(price || oldPrice || selectedGroupItems.length > 0) && (
                    <div className="items-center flex gap-x-3 text-base md:text-lg font-medium">
                      <p className="text-primary">{formatCurrency(totalPrice)}</p>
                      {totalOldPrice > totalPrice && (
                        <p className="text-gray-400 line-through">{formatCurrency(totalOldPrice)}</p>
                      )}
                    </div>
                  )}

                  {colors.length > 0 && (
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm font-medium" htmlFor="color">
                        Select Color
                        {selectedColor && <span className="font-bold">: {selectedColor}</span>}
                      </label>
                      <ColorSwatchGroup
                        value={selectedColor}
                        className="size-6"
                        colors={colors}
                        onClick={(color) => {
                          setSelectedColor(color.name);
                          setSelectedImage(color.image);
                        }}
                      />
                    </div>
                  )}

                  {sizes.length > 1 && (
                    <div className="flex flex-col gap-y-3">
                      <label className="text-sm font-medium" htmlFor="size">
                        Select Size
                        {selectedSize && <span className="font-bold">: {selectedSize}</span>}
                      </label>
                      <SizeBadgeGroup
                        onClick={(s) => setSelectedSize(s)}
                        value={selectedSize}
                        className="cursor-pointer size-7"
                        sizes={sizes}
                      />
                    </div>
                  )}

                  {(ratingAverage || ratingTotal) && (
                    <div className="flex items-center gap-3 font-medium">
                      <StarRating size="size-4" value={ratingAverage ?? 0} />
                      <span className="text-sm">{ratingTotal ?? 0} verified ratings</span>
                    </div>
                  )}

                  <div className="flex flex-col space-y-3">
                    {group.map((product: ProductType, index: number) => (
                      <FreqBoughtCard
                        key={index}
                        product={product}
                        showQuantity
                        onChange={handleGroupSelectionChange}
                      />
                    ))}
                  </div>

                  <div className="space-y-3 pt-3">

                    <Button onClick={() => handleCartAndBuy(true)} disabled={!stock} fullWidth
                      rounded="xl">
                      Buy Now
                    </Button>

                    <Button onClick={() => handleCartAndBuy(false)} disabled={!stock}
                      leftIcon={<ShoppingCartIcon className="size-5" />} fullWidth
                      rounded="xl">
                      Add to cart
                    </Button>

                  </div>

                  <ProductInfoSection
                    data={[
                      { type: 'pickup', value: 'At shop location, Usually ready in 12 hours' },
                      deliveryEstimate && { type: 'delivery', value: deliveryEstimate },
                      {
                        type: 'return',
                        value:
                          'Return within 50 days of purchase. Duties & Taxes are non-refundable.',
                      },
                      vendor?.name && {
                        type: 'store',
                        value: 'To know more about store',
                        href: `/store/${vendor.id}`,
                      },
                      { type: 'question' },
                      sku && { type: 'sku', value: sku },
                      vendor?.name && { type: 'vendor', value: vendor.name },
                      stock && { type: 'available', value: `${stock} In stock` },
                      category && { type: 'categories', value: category },
                    ].filter(Boolean) as any}
                  />

                </div>

              </div>

              <RecentAndRelatedProducts productId={productId} />

            </>

          )}

        </div>

      </Container>

    </>
  );
};

const LoadingScreen = () => (
  <div className="grid lg:grid-cols-2 gap-10">
    <ProductImageGallerySkeleton />
    <ProductDetailsSkeleton />
  </div>
);

export default GroupedView;
