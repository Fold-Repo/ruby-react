import { ShopCollectionView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Shop Features",
};

export default function page() {
    return <ShopCollectionView />
}
