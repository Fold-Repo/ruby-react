import { LeftSideBarView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Shop Layout",
};

export default function page() {
    return <LeftSideBarView />
}
