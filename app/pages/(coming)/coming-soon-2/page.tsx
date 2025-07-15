import { ComingSoonTwoView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Coming Soon",
};

export default function page() {
    return <ComingSoonTwoView />
}
