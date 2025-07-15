import { AccountView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Account",
};

export default function page() {
    return <AccountView />
}
