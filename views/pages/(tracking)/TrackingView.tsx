'use client'

import { Breadcrumb, Button, Container, Input } from '@/components'
import { ArrowLongRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TrackingView = () => {

    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId) return;

        setLoading(true); 

        setTimeout(() => {
            router.push(`tracking/${orderId}`);
        }, 1000);

    };

    return (
        <>

            <Breadcrumb
                title="Tracking Order"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Tracking Order' },
                ]}
            />

            <Container>

                <div className="section-lg max-w-xl m-auto space-y-8">

                    <p className="!text-base text-center">
                        To track your order please enter your Order ID in the box below and press
                        the "Track" button. This was given to you on your receipt and in the confirmation email you should have
                        received.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-5">

                        <Input
                            inputSize="lg"
                            radius="xl"
                            name="search"
                            placeholder="Enter order ID"
                            endContent={<MagnifyingGlassIcon className="size-5" />}
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />

                        <Button
                            type="submit"
                            className="mx-auto px-12"
                            rounded="full"
                            loading={loading}
                            rightIcon={<ArrowLongRightIcon className="size-5" />}>
                            Track Order
                        </Button>

                    </form>

                </div>

            </Container>

        </>
    )
}

export default TrackingView