import { ElectronicView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Electronic",
};

export default function page() {
    return <ElectronicView />
}
