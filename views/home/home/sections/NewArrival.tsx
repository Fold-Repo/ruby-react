"use client"

import { SectionHeader } from '@/components';
import { ProductCardFour } from '@/components/cards';
import { ProductCardSkeleton } from '@/components/skeleton';
import { useGetOtherProducts } from '@/service';
import { ProductType } from '@/types';
import React from 'react';

const NewArrival = () => {
    const { response, isLoading } = useGetOtherProducts({ page: 1, limit: 10, sort: 'desc' });
    const products = response?.data || [];

    return (
        <div className="space-y-7">

            <SectionHeader title="New Arrival" label="Today’s" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))
                    : products.map((product: ProductType, index: number) => (
                        <ProductCardFour key={index} product={product} />
                    ))}
            </div>
            
        </div>
    );
};

export default NewArrival;
