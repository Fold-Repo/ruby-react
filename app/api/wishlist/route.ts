import { NextResponse } from 'next/server';
import { products, skinCareProducts, sportProducts, otherProducts, electronicProducts } from '@/data';
import { ProductType } from '@/types';

export async function GET() {

    // Combine all product categories
    const allProducts = [
        ...products,
        ...skinCareProducts,
        ...sportProducts,
        ...otherProducts,
        ...electronicProducts,
    ];

    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    const wishlists: ProductType[] = shuffled.slice(0, 8);

    return NextResponse.json(wishlists);
}
