import { StoreView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Store",
};

export default function page() {
    return <StoreView />
}
