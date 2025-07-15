import { formatCurrency } from '@/lib'
import { PaymentInfoType } from '@/types'
import React from 'react'

const PaymentInfo = ({ paymentInfo }: { paymentInfo: PaymentInfoType }) => {
    const { method, breakdown } = paymentInfo
    const { totalItems, deliveryFee, discount, totalSummary } = breakdown

    return (
        <div className="col-span-2 md:col-span-1 border border-gray-300 p-3 rounded-xl space-y-5">

            <h2 className="text-gray-800 text-base font-bold border-b border-gray-300 pb-2">
                Payment Information
            </h2>

            <div className="flex flex-col gap-y-3">
                <h2 className="text-gray-800 text-base font-semibold">Payment Method</h2>
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">{method}</p>
                </div>
            </div>

            <div className="flex flex-col gap-y-3">
                <h2 className="text-gray-800 text-base font-semibold">Payment Details</h2>
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                        Total Items: <span className="font-semibold">{formatCurrency(totalItems)}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Delivery fees: <span className="font-semibold">{formatCurrency(deliveryFee)}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Discount: <span className="font-semibold">{formatCurrency(discount)}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Total Summary: <span className="font-semibold">{formatCurrency(totalSummary)}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default PaymentInfo
