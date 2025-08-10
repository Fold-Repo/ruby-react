import { NextRequest, NextResponse } from 'next/server';
import { products, skinCareProducts, sportProducts } from '@/data';
import { ProductType } from '@/types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    // Merge all product categories into one array
    const allProducts: ProductType[] = [
        ...products,
        ...skinCareProducts,
        ...sportProducts,
    ];

    // Find the current product
    const product = allProducts.find(p => String(p.id) === id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Get related products (excluding the current one)
    const related = allProducts
        .filter(p => String(p.id) !== id)
        .sort(() => Math.random() - 0.5) // randomize
        .slice(0, 4); // limit to 4

    return NextResponse.json({
        related,
    });
}
