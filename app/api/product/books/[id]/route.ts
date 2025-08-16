import { NextRequest, NextResponse } from 'next/server';
import { booksDatas } from '@/data';
import { BookType } from '@/types';


type ResponseData = {
    product: BookType;
    related: BookType[];
};

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const product = booksDatas.find((b) => String(b.id) === id);

    // Pick two random related books (excluding the current one)
    const otherBooks = booksDatas.filter((b) => String(b.id) !== id);
    const shuffled = otherBooks.sort(() => 0.5 - Math.random());
    const related = shuffled.slice(0, 2);

    if (!product) {
        return NextResponse.json({ message: 'Book not found' }, { status: 404 });
    }

    const responseData: ResponseData = {
        product,
        related,
    };

    return NextResponse.json(responseData);
}
