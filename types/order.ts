import { TimelineStatusType } from "./global";

export type OrderStatusType = "Ongoing" | "Delivered" | "Returned";

export interface OrderProductDetailsType {
    name: string;
    quantity: number;
    oldPrice: number;
    price: number;
}

interface PaymentBreakdown {
    totalItems: number;
    deliveryFee: number;
    discount: number;
    totalSummary: number;
}

export interface TimelineStatus {
    timestamp: string;
    status: TimelineStatusType;
}

export interface DeliveryTimeline {
    orderPlaced: TimelineStatus;
    productPackaging: TimelineStatus;
    productShipped: TimelineStatus;
    outForDelivery: TimelineStatus;
    delivered: TimelineStatus;
}

export interface DeliveryInfoType {
    method: string;
    address: string;
    timeline: DeliveryTimeline;
}

export interface PaymentInfoType {
    method: string;
    breakdown: PaymentBreakdown;
}

export interface OrderType {
    image: string;
    title: string;
    orderId: string;
    status: OrderStatusType;
    orderDate: string;
    productDetails?: OrderProductDetailsType;
    paymentInfo?: PaymentInfoType;
    deliveryInfo?: DeliveryInfoType;
}
