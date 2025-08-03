import React from 'react'

const ShippingAndReturn = () => {
    return (
        <div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Shipping Policy</h1>
                <ul className="list-disc text-sm pl-5 space-y-1">
                    <li>We deliver across the UK and internationally.</li>
                    <li>Orders are processed within 1–2 working days after payment confirmation.</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Delivery times:</h1>
                <ul className="list-disc text-sm pl-5 space-y-1">
                    <li>UK Standard Delivery: 2–5 working days</li>
                    <li>UK Express Delivery: Next working day (for orders placed before 12pm)</li>
                    <li>International Delivery: 7–14 working days</li>
                    <li>You will receive a tracking number once your order has been dispatched.</li>
                    <li>Free UK delivery on orders over £80!</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Return Policy:</h1>
                <ul className="list-disc text-sm pl-5 space-y-1">
                    <li>If you are not completely happy with your purchase, you may return it within 14 days of
                        receiving your order.</li>
                    <li>Items must be unused, unworn, and in original packaging with all tags intact.</li>
                    <li>Unfortunately, sale items and personalized products are non-returnable.</li>
                    <li>Customers are responsible for return postage unless the item is faulty or incorrect.
                    </li>
                    <li>Refunds are issued within 7 working days after we receive and inspect your return.</li>
                </ul>
            </div>

            <div className="pb-0">
                <h1 className="font-semibold pb-3">Exchanges:</h1>
                <ul className="list-disc text-sm pl-5 space-y-1">
                    <li>Need a different size or style? Please contact our Customer Care team within 7 days to
                        arrange an exchange (subject to stock availability).</li>
                    <li>For any questions, please contact us at <a href="mailto:support@rubycompany.co.uk"
                        className="text-blue-600 underline">support@rubycompany.co.uk</a>.</li>
                    <li>Thank you for choosing Ruby Company — where quality and style meet elegance!</li>
                </ul>
            </div>

        </div>
    )
}

export default ShippingAndReturn