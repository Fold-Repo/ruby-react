import { BlogListTwoView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog List",
};

export default function page() {
    return <BlogListTwoView />
}
