import { BlogGridView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Grid",
};

export default function page() {
    return <BlogGridView />
}
