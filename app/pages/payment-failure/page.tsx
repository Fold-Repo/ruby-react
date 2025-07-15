import { PaymentFailed } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Payment Failed",
};

export default function page() {
    return <PaymentFailed />
}
