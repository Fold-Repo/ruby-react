import { Breadcrumb, Button, Container } from '@/components'
import Link from 'next/link'
import React from 'react'

const PaymentFailed = () => {
    return (
        <>

            <Breadcrumb
                title="Payment Failure"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Payment Failure' },
                ]}
            />

            <Container>

                <div className="section-lg max-w-xl m-auto space-y-5">

                    <div className="bg-lavender p-5 md:p-8 rounded-xl space-y-8 text-center">

                        <h2 className="text-primary font-semibold text-base lg:!text-lg">Payment Failure</h2>

                        <div className="text-sm space-y-4">

                            <p>
                                We’re sorry, but your transaction could not be completed.
                            </p>

                            <p>
                                Please try again or use a different payment method.
                            </p>

                        </div>

                        <div className="flex justify-center pt-3">
                            <Button className="!rounded-2xl w-full max-w-xs">Retry</Button>
                        </div>

                    </div>

                </div>

            </Container>

        </>
    )
}

export default PaymentFailed