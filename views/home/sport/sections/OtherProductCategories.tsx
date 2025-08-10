'use client';

import { Container } from '@/components';
import { SportProductCardTwo } from '@/components/cards';
import { useGetSportProducts } from '@/service';
import React from 'react';
import { ProductType } from '@/types';
import { SportProductCardSkeleton } from '@/components/skeleton';

const OtherProductCategories: React.FC = () => {
    
    const { response, isLoading } = useGetSportProducts({ page: 1, limit: 9, sort: "desc" });
    const products: ProductType[] = response?.data || [];

    const topSneakers: ProductType[] = products.slice(0, 3);
    const runningSneakers: ProductType[] = products.slice(3, 6);
    const chunkySneakers: ProductType[] = products.slice(6, 9);

    return (
        <Container>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                {/* TOP SNEAKERS */}
                <div className="flex flex-col gap-y-6">

                    <h2 className="text-base font-bold">Top Sneakers</h2>

                    <div className="grid grid-cols-1 gap-y-4">
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <SportProductCardSkeleton key={i} />
                            ))
                            : topSneakers.map((product: ProductType) => (
                                <SportProductCardTwo key={product.id} product={product} />
                            ))}
                    </div>

                </div>

                {/* RUNNING SNEAKERS */}
                <div className="flex flex-col gap-y-6">

                    <h2 className="text-base font-bold">Running Sneakers</h2>

                    <div className="grid grid-cols-1 gap-y-4">
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <SportProductCardSkeleton key={i} />
                            ))
                            : runningSneakers.map((product: ProductType) => (
                                <SportProductCardTwo key={product.id} product={product} />
                            ))}
                    </div>

                </div>

                {/* CHUNKY SNEAKERS */}
                <div className="flex flex-col gap-y-6">

                    <h2 className="text-base font-bold">Chunky Sneakers</h2>

                    <div className="grid grid-cols-1 gap-y-4">
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <SportProductCardSkeleton key={i} />
                            ))
                            : chunkySneakers.map((product: ProductType) => (
                                <SportProductCardTwo key={product.id} product={product} />
                            ))}
                    </div>

                </div>

            </div>

        </Container>
    );
};

export default OtherProductCategories;
