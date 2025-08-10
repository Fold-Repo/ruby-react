import { SportAccessoryView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sport Accessories",
};

export default function page() {
    return <SportAccessoryView />
}
