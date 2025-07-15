import { PaymentConfirmation } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Payment Confirmation",
};

export default function page() {
    return <PaymentConfirmation />
}
