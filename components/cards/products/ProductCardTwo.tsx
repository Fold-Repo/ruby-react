import { ProductActionIcons } from '@/components/product';
import { StarRating } from '@/components/reusable';
import { formatCurrency } from '@/lib';
import { ProductType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCardTwo = ({ product }: { product: ProductType }) => {
    const { id, title, price, images = [], ratingAverage, ratingTotal } = product;
    const image = images[0] || '';

    return (
        <div className="relative duration-500">

            <div className="relative overflow-hidden shadow-sm group rounded-md 
                duration-500 aspect-7/8 bg-gray-200 dark:bg-gray-800">

                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={700}
                    className="object-cover h-full w-full rounded-md product-image group-hover:scale-110 duration-500"
                />

                <ProductActionIcons product={product} styleType="style1" />

            </div>

            <div className="space-y-1.5 pt-3">

                <Link href={`/products/${id}`} className="hover:text-primary text-sm font-medium block !line-clamp-1 text-black dark:text-gray-200">
                    {title}
                </Link>

                <div className="flex items-center flex-wrap gap-2 text-sm">
                    <h2 className="font-semibold text-primary"> {formatCurrency(price)} </h2>
                    <StarRating size="w-3.5 h-3.5" value={ratingAverage} />
                    <p className="font-medium text-xs text-gray-600 dark:text-gray-400">
                        ({ratingTotal})
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ProductCardTwo;
