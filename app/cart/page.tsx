import { CartView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cart",
};

export default function page() {
    return <CartView />
}
