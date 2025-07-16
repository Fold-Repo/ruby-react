import { BlogDetailsTwoView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Details",
};

export default function page() {
    return <BlogDetailsTwoView />
}
