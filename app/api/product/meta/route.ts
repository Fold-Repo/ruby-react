import { NextResponse } from 'next/server';
import { products } from '@/data/products';
import { ProductType } from '@/types';

export async function GET() {
    const filterData = getFilterMeta(products);
    return NextResponse.json(filterData);
}

function getFilterMeta(products: ProductType[]) {

    const categoryCounts = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        slug: name.replace(/\s+/g, '-'),
        count,
    }));

    const inStockCount = products.filter(p => p.inStock).length;
    const outOfStockCount = products.length - inStockCount;
    const stockOptions = [
        { id: 'in_stock', label: 'In Stock', count: inStockCount },
        { id: 'out_of_stock', label: 'Out of Stock', count: outOfStockCount },
    ];

    const prices = products.map(p => p.price);
    const priceRange = {
        min: Math.min(...prices),
        max: Math.max(...prices),
    };

    const allSizes = new Set<string>();
    products.forEach(p => {
        p.sizes?.forEach(size => allSizes.add(size));
    });
    const sizes = Array.from(allSizes);

    const colorMap = new Map<string, { hex: string; image: string }>();
    products.forEach(p => {
        p.colors?.forEach(color => {
            if (!colorMap.has(color.name)) {
                colorMap.set(color.name, {
                    hex: color.hex,
                    image: color.image,
                });
            }
        });
    });
    const colors = Array.from(colorMap.entries()).map(([name, { hex }]) => ({
        name,
        color: hex,
    }));

    const brandCounts = products.reduce((acc, product) => {
        if (product.brand !== undefined) {
            acc[product.brand] = (acc[product.brand] || 0) + 1;
        }
        return acc;
    }, {} as Record<string, number>);

    const brands = Object.entries(brandCounts).map(([label, count]) => ({
        id: label.toLowerCase().replace(/\s+/g, '_'),
        label,
        count,
    }));

    return {
        categories,
        stockOptions,
        priceRange,
        sizes,
        colors,
        brands,
    };
}
