import Image from 'next/image';
import React from 'react';

interface PaymentButtonProps {
    image?: string;
    label: string;
    onClick?: () => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ image, label, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center gap-x-2 p-3 rounded-xl border border-black/30 dark:border-gray-600 
            cursor-pointer w-full text-sm bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            type="button">

            {image && (
                <Image
                    src={image}
                    alt={label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                />
            )}
            <span className="text-sm text-gray-700 dark:text-gray-200">{label}</span>
        </button>
    );
};

export default PaymentButton;
