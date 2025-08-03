'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    RiMapPinLine,
    RiTruckLine,
    RiArrowGoBackLine,
    RiErrorWarningFill,
    RiQuestionLine,
} from 'react-icons/ri';

type InfoType =
    | 'pickup'
    | 'delivery'
    | 'return'
    | 'store'
    | 'question'
    | 'sku'
    | 'vendor'
    | 'available'
    | 'categories';

interface InfoItem {
    type: InfoType;
    label?: string;
    value?: string | React.ReactNode;
    href?: string;
}

interface ProductInfoSectionProps {
    data: InfoItem[];
}

const ICON_MAP: Partial<Record<InfoType, React.ReactNode>> = {
    pickup: <RiMapPinLine className="text-lg text-gray-700" />,
    delivery: <RiTruckLine className="text-lg text-gray-700" />,
    return: <RiArrowGoBackLine className="text-lg text-gray-700" />,
    store: <RiErrorWarningFill className="text-lg text-gray-700" />,
    question: <RiQuestionLine className="text-lg text-gray-700" />,
};

const DEFAULT_LABELS: Record<InfoType, string> = {
    pickup: 'Available Pickup:',
    delivery: 'Estimated Delivery:',
    return: 'Return policy:',
    store: 'Store Information:',
    question: 'Ask A Question?',
    sku: 'SKU:',
    vendor: 'Vendor:',
    available: 'Available:',
    categories: 'Product Categories:',
};

const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({ data }) => {

    const generalTypes: InfoType[] = ['pickup', 'delivery', 'return', 'store', 'question'];
    const detailsTypes: InfoType[] = ['sku', 'vendor', 'available', 'categories'];

    const generalData = data.filter((item) => generalTypes.includes(item.type));
    const detailData = data.filter((item) => detailsTypes.includes(item.type));

    return (
        <div className="divide-y divide-gray-300 pt-2">

            <div className="flex flex-col space-y-4 py-4">
                {generalData.map((item, index) => (
                    <p key={index} className="text-sm inline-flex flex-wrap items-start gap-x-2 gap-y-1">
                        <span className="inline-flex items-center gap-2 font-bold">
                            {ICON_MAP[item.type]}
                            {item.label ?? DEFAULT_LABELS[item.type]}
                        </span>
                        <span>
                            {item.type === 'store' ? (
                                <>
                                    {item.value}{' '}
                                    {item.href && (
                                        <Link target='_blank' href={item.href} className="underline font-semibold">
                                            Click Here
                                        </Link>
                                    )}
                                </>
                            ) : (
                                item.value
                            )}
                        </span>
                    </p>
                ))}
            </div>

            <div className="flex flex-col space-y-3 py-4">
                {detailData.map((item, index) => (
                    <p key={index} className="text-sm inline-flex flex-wrap items-start gap-x-2 gap-y-1">
                        <span className="inline-flex items-center gap-2 font-bold">
                            {item.label ?? DEFAULT_LABELS[item.type]}
                        </span>
                        <span>{item.value}</span>
                    </p>
                ))}


                <p className="text-sm inline-flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-2 font-bold">
                        Payment System Checkout:
                    </span>
                    <Image
                        src="/img/payment/payment_cards.svg"
                        alt="Payment cards"
                        width={240}
                        height={40}
                        className="w-60"
                    />
                </p>
            </div>
        </div>
    );
};

export default ProductInfoSection;
