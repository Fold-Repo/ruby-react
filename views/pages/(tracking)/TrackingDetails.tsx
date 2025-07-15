import { Breadcrumb, Container, MapLocation, Timeline } from '@/components'
import { TimelineStepType } from '@/types';
import React from 'react'
import { RiCheckLine, RiShipLine, RiBus2Line, RiBoxingLine } from "react-icons/ri";

const TrackingDetails = () => {

    const timeline: TimelineStepType[] = [
        {
            title: "Order Placed",
            timestamp: "Apr 20, 2025 10:00am",
            status: "completed",
            description: "Shipment information received by seller silicon valley.CA",
            icon: RiCheckLine,
        },
        {
            title: "Preparing to ship",
            timestamp: "Apr 20, 2025 10:00am",
            status: "completed",
            description: "Seller is preparing to ship your order",
            icon: RiShipLine,
        },
        {
            title: "Confirm Shipment",
            timestamp: "Apr 20, 2025 10:00am",
            status: "completed",
            description: "Shipment information received by carrier",
            icon: RiBus2Line,
        },
        {
            title: "Picked up",
            timestamp: "Apr 20, 2025 10:00am",
            status: "pending",
            icon: RiBoxingLine,
        },
    ];

    return (
        <>

            <Breadcrumb
                title="Tracking Order"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Tracking Order' },
                ]}
            />

            <div className="relative !my-16">

                <Container>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

                        <div className="space-y-7">

                            {/*  ====== SHIPPING DATE AND ORDER ID ======== */}
                            <div className="bg-lavender py-2 px-4 rounded-lg">
                                <h2 className="text-gray-700 font-medium text-sm">
                                    <b>Shipping Date:</b> Apr 14 2025 Order ID:Order-12567
                                </h2>
                            </div>

                            {/* - ======= LOCATION ============ */}
                            <div className="flex items-start space-x-2">

                                <div className="relative flex flex-col items-center pt-1">

                                    <div className="w-2 h-2 rounded-full bg-gray-400 z-10"></div>

                                    <div className="w-px h-12 bg-gray-400"></div>

                                    <div className="w-2 h-2 rounded-full bg-gray-400 z-10"></div>

                                </div>

                                <div className="flex flex-col justify-between text-gray-700 text-sm space-y-8.5">
                                    <div>2118 Ironridge Cir, Syracuse, 237458</div>
                                    <div>3517 W, Gray St. Utica, 57524</div>
                                </div>

                            </div>

                            {/*  =========== TIME DETAILS=========== */}
                            <div className="flex flex-col items-center space-y-4 w-full">

                                <div className="relative w-full flex items-center justify-between">

                                    <div className="w-2 h-2 bg-gray-400 rounded-full z-10"></div>

                                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-400 z-0"></div>

                                    <div className="w-2 h-2 bg-gray-400 rounded-full z-10"></div>

                                    <div className="w-2 h-2 bg-gray-400 rounded-full z-10"></div>
                                </div>

                                <div className="flex w-full justify-between text-gray-700 !text-xs md:!text-sm font-medium">

                                    <div className="text-left w-1/3">
                                        <h1 className="font-semibold text-black">Total Time</h1>
                                        <p>21 days, 6hours</p>
                                    </div>

                                    <div className="text-center w-1/3">
                                        <h1 className="font-semibold text-black">Departure Time</h1>
                                        <p>23 Aug 25 14:11pm</p>
                                    </div>

                                    <div className="text-end w-1/3">
                                        <h1 className="font-semibold text-black">Expected Arrival</h1>
                                        <p>14 Nov 25 14:86pm</p>
                                    </div>

                                </div>

                            </div>

                            <h2 className="tex-lg font-semibold mb-5">Shipment Status</h2>

                            <Timeline steps={timeline} layout="inline" />

                        </div>

                        <MapLocation className='rounded-xl w-full h-96 lg:h-full lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2' />

                    </div>

                </Container>

            </div>

        </>
    )
}

export default TrackingDetails