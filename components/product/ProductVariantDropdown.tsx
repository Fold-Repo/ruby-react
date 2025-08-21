"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/classname";
import { useClickOutside } from "@/hooks";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type VariantOption = {
    label: string;
    value: string;
    image?: string;
};

type ProductVariantDropdownProps = {
    options: VariantOption[];
    value?: VariantOption | string;
    onChange: (option: VariantOption) => void;
    variant?: "label" | "image";
    className?: string;
    placeholder?: string;
    showCheck?: boolean;
};

export default function ProductVariantDropdown({
    options,
    value,
    onChange,
    variant = "label",
    className,
    placeholder = "Select an option",
    showCheck = true,
}: ProductVariantDropdownProps) {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(dropdownRef, () => setOpen(false));

    const selected =
        typeof value === "string"
            ? options.find((o) => o.value === value)
            : value || options[0];

    return (
        <div ref={dropdownRef} className={cn("relative", className)}>
    
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer inline-flex items-center justify-between 
                border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 
                text-gray-800 dark:text-gray-200
                rounded-lg w-full py-2.5 px-3 gap-x-2 text-xs">
                <span className="flex items-center gap-x-2">
                    {variant === "image" && selected?.image && (
                        <Image
                            src={selected.image}
                            alt={selected.label}
                            width={20}
                            height={20}
                            className="size-5 rounded object-cover"
                        />
                    )}
                    {selected?.label || placeholder}
                </span>
                <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>

   
            {open && (
                <div
                    className="absolute left-0 top-full z-10 mt-1 w-full 
                    bg-white dark:bg-gray-800 
                    rounded-md shadow-lg dark:shadow-none 
                    p-1.5 max-h-64 overflow-y-auto">
                    <ul className="text-sm text-gray-700 dark:text-gray-200 font-medium space-y-1">
                        {options.map((option) => {
                            const isActive = option.value === selected?.value;
                            return (
                                <li
                                    key={option.value}
                                    onClick={() => {
                                        onChange(option);
                                        setOpen(false);
                                    }}
                                    className={cn(
                                        "flex items-center justify-between gap-2 py-1.5 px-3 rounded-md text-xs cursor-pointer",
                                        "hover:bg-gray-100 dark:hover:bg-gray-700",
                                        isActive && "bg-gray-100 dark:bg-gray-700"
                                    )}>
                                    <div className="flex items-center gap-2">
                                        {variant === "image" && option.image && (
                                            <Image
                                                height={100}
                                                width={100}
                                                src={option.image}
                                                alt={option.label}
                                                className="w-5 h-5 rounded object-cover"
                                            />
                                        )}
                                        <span>{option.label}</span>
                                    </div>
                                    {isActive && showCheck && (
                                        <i className="ri-check-line text-primary text-base" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
