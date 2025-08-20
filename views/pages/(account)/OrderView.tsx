'use client'

import { Pagination, Tab } from '@/components'
import { OrderCard } from '@/components/cards';
import { ordersData } from '@/data';
import React, { useState } from 'react'

const tabItems = [
    { key: "ongoing", title: "Ongoing" },
    { key: "delivered", title: "Delivered" },
    { key: "returned", title: "Returned" }
];
const OrderView = () => {

    const [activeTab, setActiveTab] = useState("ongoing");

    const filteredOrders = ordersData.filter(
        (order) => order.status.toLowerCase() === activeTab
    )

    return (
        <>

            {/*  ====== TAB ======== */}
            <div className="bg-white-smoke dark:bg-gray-800 rounded-lg p-4">
                <Tab tabs={tabItems} active={activeTab} onChange={setActiveTab} className="dark:text-white" />
            </div>


            <div className="space-y-4">
                {filteredOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                ))}
            </div>

            <Pagination total={100} perPage={10} />

        </>
    )
}

export default OrderView