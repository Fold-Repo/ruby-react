import { TrendingFashionView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trending Fashion",
};

export default function page() {
    return <TrendingFashionView />
}
