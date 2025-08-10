import { WomenFashionView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Women Fashion",
};

export default function page() {
    return <WomenFashionView />
}
