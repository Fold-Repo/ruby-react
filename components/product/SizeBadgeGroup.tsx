import React from "react";
import { cn } from "@/lib/classname";

type Props = {
    sizes: string[];
    className?: string;
    value?: string;
    onClick?: (value: string) => void;
    variant?: "rounded" | "rounded-full";
};

export default function SizeBadgeGroup({
    sizes,
    className,
    value,
    onClick,
    variant = "rounded",
}: Props) {
    return (
        <div className="flex gap-2 uppercase text-[10px] font-medium">
            {sizes.map((s) => {
                const isActive = s === value;
                return (
                    <span
                        key={s}
                        onClick={() => onClick?.(s)}
                        className={cn(
                            "size-5.5 inline-flex items-center justify-center text-center transition",
                            variant,
                            "bg-gray-300",
                            isActive && "bg-gray-900 text-white",
                            className
                        )}>
                        {s}
                    </span>
                );
            })}
        </div>
    );
}
