import { CustomerNoteView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products Featurs",
};

export default function page() {
    return <CustomerNoteView />
}
