import { BlogDefaultView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Default",
};

export default function page() {
    return <BlogDefaultView />
}