'use client';

import { Button } from '@/components';
import { FreqBoughtCard } from '@/components/cards';
import { useAppDispatch } from '@/store/hooks';
import { ProductType } from '@/types';
import { toast } from 'react-hot-toast';
import React, { useState } from 'react';
import { formatCurrency } from '@/lib';
import { addToCart } from '@/store/cartSlice';

const FreqBuyComponent = ({ products }: { products: ProductType[] }) => {
    const dispatch = useAppDispatch();

    const [selectedItems, setSelectedItems] = useState<{
        product: ProductType;
        selectedColor: string;
        selectedSize: string;
    }[]>([]);

    const handleSelectionChange = ({ checked, product, selectedColor, selectedSize }: {
        checked: boolean;
        product: ProductType;
        selectedColor: string;
        selectedSize: string;
    }) => {
        if (checked) {
            setSelectedItems((prev) => {
                const exists = prev.find((item) => item.product.id === product.id);
                if (exists) {
                    return prev.map((item) => item.product.id === product.id ? { product, selectedColor, selectedSize } : item);
                } else {
                    return [...prev, { product, selectedColor, selectedSize }];
                }
            });
        } else {
            setSelectedItems((prev) => prev.filter((item) => item.product.id !== product.id));
        }
    };

    const totalPrice = selectedItems.reduce((sum, item) => sum + item.product.price, 0);
    const totalOldPrice = selectedItems.reduce((sum, item) => sum + (item.product.oldPrice || item.product.price), 0);
    const discount = totalOldPrice > totalPrice ? totalOldPrice - totalPrice : 0;

    const handleCartAndBuy = () => {
        selectedItems.forEach(({ product, selectedColor, selectedSize }) => {
            dispatch(addToCart({ product, selectedColor, selectedSize, quantity: 1 }));
        });
        toast.success('Selected products added to cart');
    };

    return (
        <div className="border border-gray-300 p-3 md:p-5 rounded-lg space-y-5">
            <h1 className="text-sm md:text-base font-bold block">Frequently bought together</h1>

            <div className="flex flex-col space-y-3">
                {products?.map((product) => (
                    <FreqBoughtCard key={product.id} product={product} onChange={handleSelectionChange} />
                ))}
            </div>

            <div className="space-y-1.5 max-w-sm">
                <p className="text-sm">
                    Total Price: <span className="font-bold">{formatCurrency(totalPrice)}</span>
                </p>

                {discount > 0 && (
                    <p className="text-sm">
                        Discount:{' '}
                        <span className="font-bold text-gray-600 line-through">
                            {formatCurrency(totalOldPrice)}
                        </span>
                    </p>
                )}

                <div className="pt-3">
                    <Button className="px-12" size="sm" rounded="lg" onClick={handleCartAndBuy}
                        disabled={selectedItems.length === 0}>
                        Add all selected items to cart
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default FreqBuyComponent;
