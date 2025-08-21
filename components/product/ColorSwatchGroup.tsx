"use client";

import React from "react";
import { cn } from "@/lib/classname";
import { ColorType } from "@/types";
import { Image } from "@heroui/react";

type Props = {
    colors: ColorType[];
    value?: string;
    onHover?: (color: ColorType) => void;
    onClick?: (color: ColorType) => void;
    className?: string;
    variant?: "circle" | "label" | "label-color" | "image" | "image-round";
};

export default function ColorSwatchGroup({
    colors,
    value,
    onHover,
    onClick,
    className,
    variant = "circle",
}: Props) {
    return (
        <ul className="flex gap-x-2 flex-wrap">
            {colors.map((color) => {
                const isActive = value === color.image || value === color.name;

                const commonProps = {
                    title: color.name,
                    onMouseEnter: () => onHover?.(color),
                    onClick: () => onClick?.(color),
                };

                return (
                    <li key={color.hex}>
                        {/* Circle Variant */}
                        {variant === "circle" && (
                            <button
                                {...commonProps}
                                className={cn(
                                    "cursor-pointer border border-gray-400 dark:border-gray-600 rounded-full inline-flex ring-offset-2 dark:ring-offset-gray-900 transition-all size-4",
                                    isActive && "ring-1 ring-gray-400 dark:ring-gray-200",
                                    className
                                )}
                                style={{
                                    backgroundColor: color.hex,
                                    ...(isActive ? { "--tw-ring-color": color.hex } : {}),
                                }}
                            />
                        )}

                        {/* Label Variant */}
                        {variant === "label" && (
                            <button
                                {...commonProps}
                                className={cn(
                                    "px-5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full inline-flex text-xs cursor-pointer text-gray-700 dark:text-gray-200",
                                    isActive &&
                                        "bg-black text-white dark:bg-white dark:text-black",
                                    className
                                )}>
                                {color.name}
                            </button>
                        )}

                        {/* Label + Color Variant */}
                        {variant === "label-color" && (
                            <button
                                {...commonProps}
                                className={cn(
                                    "items-center gap-x-2 pl-3 pr-2 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full inline-flex text-xs cursor-pointer text-gray-700 dark:text-gray-200",
                                    isActive &&
                                        "bg-black text-white dark:bg-white dark:text-black",
                                    className
                                )}>
                                {color.name}
                                <div
                                    className="size-4 border border-white dark:border-gray-800 rounded-full"
                                    style={{ backgroundColor: color.hex }}
                                />
                            </button>
                        )}

                        {/* Image Variant */}
                        {variant === "image" && color.image && (
                            <button
                                {...commonProps}
                                className={cn(
                                    "inline-flex rounded-lg overflow-hidden cursor-pointer",
                                    isActive && "ring ring-offset-2 ring-primary",
                                    className
                                )}>
                                <Image
                                    src={color.image}
                                    width={100}
                                    className="rounded w-16 h-20"
                                    alt={color.name}
                                />
                            </button>
                        )}

                        {/* Image Round Variant */}
                        {variant === "image-round" && color.image && (
                            <button
                                {...commonProps}
                                className={cn(
                                    "inline-flex rounded-full overflow-hidden cursor-pointer",
                                    isActive && "ring ring-offset-2 ring-primary",
                                    className
                                )}>
                                <Image
                                    src={color.image}
                                    width={200}
                                    className="rounded size-10"
                                    alt={color.name}
                                />
                            </button>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
