import { TrackingView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tracking",
};

export default function page() {
    return <TrackingView />
}
