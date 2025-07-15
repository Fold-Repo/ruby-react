import { ForgotPasswordView } from '@/views';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Forgot Password",
};

export default function page() {
    return <ForgotPasswordView />
}
