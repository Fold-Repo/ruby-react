import { OrderDetails } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Orders",
};

export default async function Page({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    return <OrderDetails orderId={id} />;
}