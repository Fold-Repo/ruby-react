import { CheckoutView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Checkout",
};

export default function page() {
    return <CheckoutView />
}
