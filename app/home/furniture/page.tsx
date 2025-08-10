import { FurnitureView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Furniture",
};

export default function page() {
    return <FurnitureView />
}
