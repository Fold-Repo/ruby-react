"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ColorType } from "@/types";

type Props = {
    colors: ColorType[];
    value?: string;
    onHover?: (color: ColorType) => void;
    onClick?: (color: ColorType) => void;
    className?: string;
};

export default function ColorSwatchGroup({
    colors,
    value,
    onHover,
    onClick,
    className,
}: Props) {
    return (
        <ul className="flex gap-x-2">
            {colors.map((color) => {

                const isActive = value === color.image || value === color.name;

                return (
                    <li key={color.hex}>
                        <button
                            title={color.name}
                            onMouseEnter={() => onHover?.(color)}
                            onClick={() => onClick?.(color)}
                            className={cn(
                                "cursor-pointer border border-gray-500 rounded-full inline-flex ring-offset-2 transition-all size-4",
                                isActive && "ring-1 ring-gray-400",
                                className
                            )}
                            style={{
                                backgroundColor: color.hex,
                                ...(isActive ? { '--tw-ring-color': color.hex } : {}),
                            }}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
