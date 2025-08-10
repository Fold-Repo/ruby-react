import { MenFashionView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Men Fashion",
};

export default function page() {
    return <MenFashionView />
}
