import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { AddressType } from "@/types";

const AddressCard: React.FC<AddressType> = ({ name, address, phone, isDefault = false, onEdit, showSetDefault = true }) => {
    return (
        <div className="bg-white-smoke dark:bg-gray-800 p-3 rounded-xl space-y-4">

            <div className="flex items-center gap-3 justify-between border-b border-gray-400 dark:border-gray-700 pb-3">

                {showSetDefault ? (
                    <h2 className="text-gray-800 dark:text-gray-200 text-sm font-bold">Set as Default</h2>
                ) : (
                    <span />
                )}

                <button
                    type="button"
                    onClick={() => onEdit?.()}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm cursor-pointer">
                    <PencilIcon className="w-4 h-4" />
                    <span className="underline">Edit</span>
                </button>
            </div>

            <div className="space-y-3">
                <h2 className="text-gray-700 dark:text-gray-200 text-base font-bold">{name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{address}</p>
                <h1 className="text-xs font-semibold text-gray-600 dark:text-gray-300">{phone}</h1>

                {isDefault && (
                    <p className="font-bold text-xs text-primary">Default Address</p>
                )}
            </div>
        </div>
    );
};

export default AddressCard;
