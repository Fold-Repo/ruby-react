import React from 'react'
import CreditCard from './CreditCard'
import PaymentButton from './PaymentButton'

const CheckoutPayments = () => {
    return (
        <div className="space-y-4">

            {/* ======== CREDIT CARD ======= */}
            <CreditCard />

            <PaymentButton image='/img/payment/paypal.png' label='Pay with Paypal' />
            <PaymentButton image='/img/payment/apple_pay.png' label='Pay with Apple Pay' />
            <PaymentButton label='Pay On Delivery' />

        </div>
    )
}

export default CheckoutPayments