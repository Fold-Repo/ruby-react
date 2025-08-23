'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Props {
    value: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    size?: 'sm' | 'md'; 
}

export default function QuantitySelector({
    value,
    onChange,
    disabled,
    size = 'md',
}: Props) {
    const sizeClasses = {
        sm: {
            wrapper: 'rounded-lg p-1',
            button: 'py-1 px-2 text-xs',
            icon: 'w-3 h-3',
            input: 'w-8 text-xs',
        },
        md: {
            wrapper: 'rounded-xl p-1.5',
            button: 'py-1.5 px-3 text-sm',
            icon: 'w-4 h-4',
            input: 'w-12 text-sm',
        },
    };

    const currentSize = sizeClasses[size];

    return (
        <div className={`flex items-center justify-center border border-gray-400 max-w-max ${currentSize.wrapper}`}>

            <button
                disabled={disabled || value <= 1}
                onClick={() => onChange(value - 1)}
                className={`cursor-pointer rounded-lg bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ${currentSize.button}`}>
                <MinusIcon className={`${currentSize.icon} text-gray-700`} />
            </button>

            <input
                readOnly
                type="text"
                className={`border-0 py-0 text-center bg-transparent outline-none font-semibold ${currentSize.input}`}
                value={value}
            />

            <button
                disabled={disabled}
                onClick={() => onChange(value + 1)}
                className={`cursor-pointer rounded-lg text-white bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed ${currentSize.button}`}>
                <PlusIcon className={currentSize.icon} />
            </button>
            
        </div>
    );
}
