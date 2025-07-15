import { ErrorView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "404",
};

export default function page() {
    return <ErrorView />
}
