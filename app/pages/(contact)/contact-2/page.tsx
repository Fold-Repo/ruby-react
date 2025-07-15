import { ContactView2 } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact",
};

export default function page() {
    return <ContactView2 />
}
