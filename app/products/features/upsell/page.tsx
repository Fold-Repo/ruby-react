import { UpSellView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products Layout",
};

export default function page() {
    return <UpSellView />
}
