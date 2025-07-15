import { OrderView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Orders",
};

export default function page() {
    return <OrderView />
}
