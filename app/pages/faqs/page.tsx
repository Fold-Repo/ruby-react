import { FaqView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQs",
};

export default function page() {
    return <FaqView />
}
