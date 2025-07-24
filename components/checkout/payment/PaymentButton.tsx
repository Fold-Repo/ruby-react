import Image from 'next/image';
import React from 'react';

interface PaymentButtonProps {
    image?: string;
    label: string;
    onClick?: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ image, label, onClick }) => {
    return (
        <button onClick={onClick}
            className="flex items-center gap-x-2 p-3 rounded-xl border border-black/50 cursor-pointer w-full text-sm"
            type="button">
            {image && (
                <Image src={image} alt={label} width={20}
                height={20} className="w-5 h-5 object-contain"
                />
            )}
            <span className="text-sm lg:!text-base text-gray-500">{label}</span>
        </button>
    );
};

export default PaymentButton;
