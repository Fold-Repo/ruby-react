import React from 'react'

const ProductsPolicy = () => {
    return (
        <div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Return & Exchange Policy</h1>
                <p className="text-sm">
                    At Ruby Company, we are committed to ensuring you are 100% satisfied with your purchase. If
                    for any reason you are not completely happy with your item, we offer easy returns and
                    exchanges under the following conditions:
                </p>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Return Conditions:</h1>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Items must be returned within 14 days of delivery.</li>
                    <li>Items must be unworn, unwashed, and in original condition with all tags attached.</li>
                    <li>Items must be returned in the original packaging.</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Non-Returnable Items:</h1>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Sale items or items marked as Final Sale.</li>
                    <li>Items damaged due to misuse or neglect</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">How to Initiate a Return:</h1>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Contact our Customer Support team at <a href="mailto:support@rubycompany.com"
                        className="text-blue-600 underline">support@rubycompany.com</a> with your order number
                        and reason for return.</li>
                    <li>We will provide you with a return address and instructions.</li>
                    <li>Once we receive and inspect your returned item, we will process your refund within 7-10
                        business days to your original payment method.</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="font-semibold pb-3">Exchange Policy:</h1>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>If you wish to exchange an item for a different size or color, please email us within 7
                        days of receiving your order.</li>
                    <li>Exchanges are subject to product availability.</li>
                </ul>
            </div>

            <div className="pb-0">
                <h1 className="font-semibold pb-3">Shipping Costs:</h1>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Return shipping costs are the responsibility of the customer unless the return is due to
                        a damaged or incorrect item sent by us.
                    </li>
                    <li>Thank you for shopping with Ruby Company! We value your trust and look forward to
                        serving you again.</li>
                </ul>
            </div>

        </div>
    )
}

export default ProductsPolicy