import { CustomerFeedbacksView } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Customer Feedbacks",
};

export default function page() {
    return <CustomerFeedbacksView />
}
