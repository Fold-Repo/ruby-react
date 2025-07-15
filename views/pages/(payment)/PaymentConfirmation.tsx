import { Breadcrumb, Button, Container } from '@/components'
import Link from 'next/link'
import React from 'react'

const PaymentConfirmation = () => {
  return (
    <>

      <Breadcrumb
        title="Payment confirmation"
        items={[
          { label: 'Page', href: '#' },
          { label: 'Payment confirmation' },
        ]}
      />

      <Container>

        <div className="section-lg max-w-xl m-auto space-y-5">

            <div className="bg-white-smoke p-5 md:p-8 rounded-xl space-y-8 text-center">

              <h2 className="text-success font-semibold text-base lg:text-lg">Payment Successful</h2>

              <div className="text-sm space-y-3">

                <p>
                  Thank you for your purchase! Your transaction has been completed successfully.
                </p>

                <p>
                  We’ve sent you a confirmation email with your order details.
                </p>

              </div>

              <Link className="flex justify-center pt-3" href="/">
                <Button className="!rounded-2xl !px-12">Return Home</Button>
              </Link>

            </div>

            <div className="bg-white-smoke p-5 md:p-8 rounded-xl space-y-8">

              <h2 className="font-semibold text-base lg:!text-lg text-center">Payment Confirmation</h2>

              <div className="border p-4 rounded-xl border-gray-300 space-y-8">

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Date</span>

                  <span className="font-semibold">Jan 10, 2025</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Payment Method</span>

                  <span className="font-semibold">Visa</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Card Number</span>

                  <span className="font-semibold">0987 ********</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Cardholder Name</span>

                  <span className="font-semibold">Success Ruby</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Email</span>

                  <span className="font-semibold">Info@Rubyshop.com</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span>Phone Number</span>

                  <span className="font-semibold">+475 79736282</span>

                </div>

                <div className="flex items-center justify-between gap-2 text-sm">

                  <span className="font-extrabold">Subtotal</span>

                  <span className="font-extrabold">$209.00 USD</span>

                </div>

              </div>

            </div>

        </div>

      </Container>

    </>
  )
}

export default PaymentConfirmation