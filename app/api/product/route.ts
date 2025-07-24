import { NextResponse } from 'next/server';
import { paginate } from '@/utils';
import { ProductType } from '@/types';
import { products } from '@/data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Get all filter parameters
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const categories = searchParams.get('category')?.split(',') || [];
    const inStock = searchParams.get('stock');
    const minPrice = Number(searchParams.get('minPrice')) || 0;
    const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;
    const sizes = searchParams.get('size')?.split(',') || [];
    const colors = searchParams.get('color')?.split(',') || [];
    const brands = searchParams.get('brand')?.split(',') || [];
    const search = searchParams.get('search')?.toLowerCase() || '';

    const filteredProducts = products.filter(product => {

        // 🔍 General search (name, category, brand, etc.)
        if (search) {
            const searchableText = [
                product.title,
                product.category,
                product.brand,
                ...(product.colors?.map(c => c.name) || []),
                ...(product.sizes || [])
            ]
                .join(' ')
                .toLowerCase();

            if (!searchableText.includes(search)) {
                return false;
            }
        }

        if (categories.length > 0 && !categories.includes(product.category)) {
            return false;
        }

        if (inStock !== null) {
            const isInStock = product.inStock ? 'in_stock' : 'out_of_stock';
            if (!inStock.includes(isInStock)) {
                return false;
            }
        }

        if (product.price < minPrice || product.price > maxPrice) {
            return false;
        }

        if (sizes.length > 0 && product.sizes) {
            const hasSize = sizes.some(size => (product.sizes ?? []).includes(size));
            if (!hasSize) return false;
        }

        if (colors.length > 0 && product.colors) {
            const hasColor = colors.some(color =>
                (product.colors ?? []).some(c => c.name.toLowerCase() === color.toLowerCase())
            );
            if (!hasColor) return false;
        }

        if (brands.length > 0 && !brands.includes(product.brand)) {
            return false;
        }

        return true;
    });

    // ✅ Shuffle before pagination
    // filteredProducts = filteredProducts.sort(() => Math.random() - 0.5);

    const paginated = paginate<ProductType>(filteredProducts, { page, limit });

    return NextResponse.json(paginated);
}