import { NextResponse } from 'next/server';
import { booksDatas } from '@/data';
import { BookType } from '@/types';

export async function GET() {
    const filterData = getBookFilterMeta(booksDatas);
    return NextResponse.json(filterData);
}

function getBookFilterMeta(products: BookType[]) {
    const categoryCounts = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        slug: name.replace(/\s+/g, '-').toLowerCase(),
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

    return {
        categories,
        stockOptions,
        priceRange,
    };
}
