import { NextResponse } from 'next/server';
import { products } from '@/data';
import { ProductType } from '@/types';

export async function GET() {

    const shuffled = [...products].sort(() => Math.random() - 0.5);
    const wishlists: ProductType[] = shuffled.slice(0, 8);

    return NextResponse.json(wishlists);
}
