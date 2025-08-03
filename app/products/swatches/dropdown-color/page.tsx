import { SwatchesDropColorView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Swatches",
};

export default function page() {
    return <SwatchesDropColorView />
}
