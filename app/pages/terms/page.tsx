import { TermsView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms",
};

export default function page() {
    return <TermsView />
}
