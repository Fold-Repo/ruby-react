'use client'

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Props {
    value: number;
    onChange: (value: number) => void;
    disabled?: boolean;
}

export default function QuantitySelector({ value, onChange, disabled }: Props) {
    return (
        <div className="flex items-center justify-center border border-gray-400 rounded-xl p-1.5 max-w-max">

            <button disabled={disabled || value <= 1}
                onClick={() => onChange(value - 1)}
                className="cursor-pointer rounded-lg py-1.5 px-3 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200">
                <MinusIcon className="w-4 h-4 text-gray-700" />
            </button>

            <input readOnly type="text" className="w-12 border-0 py-0 text-center text-sm bg-transparent outline-none font-semibold" value={value} />

            <button disabled={disabled}
                onClick={() => onChange(value + 1)}
                className="cursor-pointer rounded-lg py-1.5 px-3 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-red-500">
                <PlusIcon className="w-4 h-4" />
            </button>

        </div>
    );
}
