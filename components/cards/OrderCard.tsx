'use client'

import { cn } from "@/lib";
import { OrderType } from "@/types";
import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import { useRouter } from "next/navigation";

const getStatusColor = (status: string) => {
    switch (status) {
        case "Delivered":
            return "text-success";
        case "Returned":
            return "text-red-500";
        case "Ongoing":
        default:
            return "text-yellow-500";
    }
};

const OrderCard = ({ order } : { order: OrderType }) => {

    const { image, title, orderId, orderDate, status } = order
    const router = useRouter()

    return (
        <div className="flex items-start justify-between gap-3 border border-gray-300 p-3 rounded-xl">

            <div className="inline-flex gap-x-3 items-center">

                <Image width={200} height={200} src={image} alt="Product"
                    className="w-24 rounded-lg object-cover aspect-[1/1]"
                />

                <div className="space-y-1">

                    <h2 className="text-gray-800 text-base font-bold">{title}</h2>

                    <p className="text-[13px] text-gray-500">
                        Order: <span className="font-bold">{orderId}</span>
                    </p>

                    <p className="text-[13px] text-gray-500">
                        Status:{" "}
                        <span className={cn("font-bold", getStatusColor(status))}>
                            {status}
                        </span>
                    </p>

                    <p className="text-[13px] text-gray-500">
                        Order Date: <span className="font-bold">{orderDate}</span>
                    </p>

                </div>
            </div>

            <Button onClick={() => router.push(`orders/${orderId}`)} size="sm" rounded="lg">
                View Details
            </Button>

        </div>
    );
};

export default OrderCard;
