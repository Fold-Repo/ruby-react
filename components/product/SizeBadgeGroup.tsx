import React from "react";
import { cn } from "@/lib/utils";

type Props = {
    sizes: string[];
    className?: string;
    value?: string;
    onClick?: (value: string) => void;
};

export default function SizeBadgeGroup({
    sizes,
    className,
    value,
    onClick,
}: Props) {
    return (
        <div className="flex gap-2  uppercase text-[10px] font-medium">
            {sizes.map((s) => {
                const isActive = s === value;
                return (
                    <span
                        key={s}
                        onClick={() => onClick?.(s)}
                        className={cn(
                            "size-5.5 bg-gray-300 inline-flex items-center justify-center text-center rounded transition",
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
