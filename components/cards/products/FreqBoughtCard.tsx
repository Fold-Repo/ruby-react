'use client'

import { QuantitySelector } from '@/components/cart';
import { ProductVariantDropdown } from '@/components/product';
import { Checkbox } from '@/components/ui';
import { formatCurrency } from '@/lib';
import { ColorType, ProductType } from '@/types';
import { getDiscountPercentage } from '@/utils';
import { Image } from '@heroui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type FreqBoughtCardProps = {
    product: ProductType;
    onChange: (data: {
        checked: boolean;
        product: ProductType;
        selectedColor: string;
        selectedSize: string;
        quantity: number;
    }) => void;
    showQuantity?: boolean;
};

const FreqBoughtCard = ({ product, onChange, showQuantity = false }: FreqBoughtCardProps) => {

    const { id, title, price, oldPrice, sizes = [], images = [], colors = [] } = product || {};

    const discount =
        typeof oldPrice !== 'undefined'
        && getDiscountPercentage(oldPrice, price)

    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [checked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleChange = (newChecked: boolean) => {
        setChecked(newChecked);
        onChange({
            checked: newChecked,
            product,
            selectedColor,
            selectedSize,
            quantity,
        });
    };

    useEffect(() => {
        if (checked) {
            onChange({
                checked,
                product,
                selectedColor,
                selectedSize,
                quantity,
            });
        }
    }, [selectedColor, selectedSize, quantity]);

    return (
        <div className="inline-flex items-start gap-3">

            <Image src={images[0]} alt="Product"
                width={96} radius="md" className="w-32 aspect-[7/8] object-cover" />

            <div className="space-y-2 w-full">

                <div className="flex items-center justify-between gap-5">

                    <Link href={`/products/${id}`} 
                        className="hover:text-primary text-sm font-semibold block !line-clamp-1 text-gray-800 dark:text-gray-200">
                        {title}
                    </Link>

                    <Checkbox onChange={(e) => handleChange(e.target.checked)} checked={checked} />

                </div>

                <div className="flex items-center flex-wrap gap-2">

                    {colors.length > 0 && (
                        <ProductVariantDropdown
                            placeholder='Select Color'
                            options={colors.map((color: ColorType) => ({
                                label: color.name,
                                value: color.name,
                                image: color.image,
                            }))}
                            value={selectedColor}
                            onChange={(color) => setSelectedColor(color.value)}
                            variant='label'
                        />
                    )}

                    {sizes.length > 1 && (
                        <ProductVariantDropdown 
                            variant="label"
                            placeholder="Select Size"
                            options={sizes.map((size: string) => ({
                                label: size,
                                value: size
                            }))}
                            value={{ label: selectedSize, value: selectedSize }}
                            onChange={(size) => setSelectedSize(size.value)}
                        />
                    )}

                </div>

                {showQuantity && (
                    <QuantitySelector size='sm' value={quantity} onChange={(val) => setQuantity(val)} />
                )}

                {!showQuantity && (
                    <div className="flex items-center gap-x-3 text-sm font-medium">
                        <p className="text-primary">{formatCurrency(price)}</p>
                        {oldPrice && <p className="text-gray-400 dark:text-gray-500 line-through">{formatCurrency(oldPrice)}</p>}
                        {discount && (
                            <div className="bg-primary text-white text-[11px] py-0.5 px-2 rounded">
                                -{discount} <span className="hidden sm:inline">Discount</span>
                            </div>
                        )}
                    </div>
                )}

            </div>

        </div>
    )
}

export default FreqBoughtCard;
