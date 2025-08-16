import { NextResponse } from 'next/server';
import { paginate } from '@/utils';
import { BookType } from '@/types';
import { booksDatas } from '@/data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Pagination
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    // Filters
    const categories = searchParams.get('category')?.split(',') || [];
    const inStock = searchParams.get('stock');
    const minPrice = Number(searchParams.get('minPrice')) || 0;
    const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;
    const search = searchParams.get('search')?.toLowerCase() || '';
    const sort = searchParams.get('sort')?.toLowerCase() || '';

    const filteredBooks = booksDatas.filter(book => {

        if (search) {
            const searchableText = [
                book.title,
                book.category,
                book.author,
                book.publisher
            ].join(' ').toLowerCase();

            if (!searchableText.includes(search)) {
                return false;
            }
        }

        if (categories.length > 0 && !categories.includes(book.category)) {
            return false;
        }

        if (inStock !== null) {
            const isInStock = book.inStock ? 'in_stock' : 'out_of_stock';
            if (!inStock.includes(isInStock)) {
                return false;
            }
        }

        if (book.price < minPrice || book.price > maxPrice) {
            return false;
        }

        return true;
    });

    if (sort === 'asc') {
        filteredBooks.sort((a, b) => Number(a.id) - Number(b.id));
    } else if (sort === 'desc') {
        filteredBooks.sort((a, b) => Number(b.id) - Number(a.id));
    }

    // Pagination
    const paginated = paginate<BookType>(filteredBooks, { page, limit });

    return NextResponse.json(paginated);
}
