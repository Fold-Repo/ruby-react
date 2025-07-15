import { Timeline } from '@/components'
import { DeliveryInfoType, TimelineStepType } from '@/types'
import React from 'react'
import { RiCheckLine } from "react-icons/ri";

const DeliveryInfo = ({ deliveryInfo }: { deliveryInfo: DeliveryInfoType }) => {

    const { timeline, method, address } = deliveryInfo

    const stepsStacked: TimelineStepType[] = [
        {
            title: "Order Placed",
            timestamp: timeline.orderPlaced.timestamp,
            status: timeline.orderPlaced.status,
            icon: RiCheckLine,
        },
        {
            title: "Product Packaging",
            timestamp: timeline.productPackaging.timestamp,
            status: timeline.productPackaging.status,
            icon: RiCheckLine,
        },
        {
            title: "Product Shipped",
            timestamp: timeline.productShipped.timestamp,
            status: timeline.productShipped.status,
            icon: RiCheckLine,
        },
        {
            title: "Out for Delivery",
            timestamp: timeline.outForDelivery.timestamp,
            status: timeline.outForDelivery.status,
            icon: RiCheckLine,
        },
        {
            title: "Delivered",
            timestamp: timeline.delivered.timestamp,
            status: timeline.delivered.status,
            icon: RiCheckLine,
        },
    ];

    return (
        <div className="col-span-2 border border-gray-300 p-3 rounded-xl space-y-5">

            <h2 className="text-gray-800 text-base font-bold border-b border-gray-300 pb-2">
                Delivery Information
            </h2>

            <div className="flex items-center flex-wrap gap-3 justify-between">

                <div className="flex flex-col gap-y-1.5">

                    <h2 className="text-gray-800 text-base font-semibold">Delivery Method</h2>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">{method}</p>
                    </div>

                </div>

                <div className="flex flex-col gap-y-1.5">

                    <h2 className="text-gray-800 text-base font-semibold">Shipping Address</h2>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                            {address}
                        </p>
                    </div>

                </div>

            </div>

            <div className="flex flex-col gap-y-4">

                <h2 className="text-gray-800 text-base font-semibold">Delivery Timeline </h2>

                <Timeline steps={stepsStacked} layout="stacked" />

            </div>

        </div>
    )
}

export default DeliveryInfo