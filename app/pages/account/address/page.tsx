import { AddressView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Address",
};

export default function page() {
    return <AddressView />
}
