import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const product = products.find(p => String(p.id) === id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const related = products
        .filter(p => String(p.id) !== id)
        .sort(() => Math.random() - 0.5) 
        .slice(0, 4);

    return NextResponse.json({
        related,
    });
}
