import { ResetPasswordView } from '@/views';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Reset Password",
};

export default function page() {
    return <ResetPasswordView />
}
