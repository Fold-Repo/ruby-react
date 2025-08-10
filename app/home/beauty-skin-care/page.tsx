import { BeautySkinView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Beauty Skin Care",
};

export default function page() {
    return <BeautySkinView />
}
