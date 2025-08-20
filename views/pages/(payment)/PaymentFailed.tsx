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

                    <div className="bg-lavender dark:bg-gray-800 p-5 md:p-8 rounded-xl space-y-8 text-center text-black dark:text-white">

                        <h2 className="text-primary dark:text-green-400 font-semibold text-base lg:!text-lg">Payment Failure</h2>

                        <div className="text-sm space-y-4 text-gray-800 dark:text-gray-300">

                            <p>
                                We’re sorry, but your transaction could not be completed.
                            </p>

                            <p>
                                Please try again or use a different payment method.
                            </p>

                        </div>

                        <div className="flex justify-center pt-3">
                            <Button className="!rounded-2xl w-full max-w-xs bg-primary text-white dark:bg-primary dark:text-white 
                                hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black">
                                Retry
                            </Button>
                        </div>

                    </div>

                </div>

            </Container>

        </>
    )
}

export default PaymentFailed
