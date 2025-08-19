import { BookStoreDetailsView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Book Store Details",
};

export default async function page({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    return <BookStoreDetailsView bookId={id} />
}