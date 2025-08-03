"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/classname";

export interface TabItem {
    key: string;
    title: string;
}

interface TabProps {
    tabs: TabItem[];
    className?: string;
    active?: string;
    onChange?: (key: string) => void;
    direction?: "row" | "col";
}

export default function Tab({
    tabs,
    className,
    active: controlledActiveTab,
    onChange,
    direction = "row",
}: TabProps) {
    const [internalActiveTab, setInternalActiveTab] = useState<string>(
        tabs[0]?.key || ""
    );
    const activeTab = controlledActiveTab ?? internalActiveTab;

    const handleTabClick = (key: string) => {
        if (!controlledActiveTab) setInternalActiveTab(key);
        onChange?.(key);
    };

    const isRow = direction === "row";

    return (
        <div className={cn("w-full", isRow && "overflow-x-auto")}>
            <div className={cn(
                    "px-4 text-sm relative",
                    isRow
                        ? "flex justify-start sm:justify-center gap-x-4 sm:gap-x-6 whitespace-nowrap"
                        : "flex flex-col gap-y-2",
                    className
                )}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.key;
                    return (
                        <button
                            key={tab.key}
                            onClick={() => handleTabClick(tab.key)}
                            className={cn(
                                "relative inline-flex items-center gap-x-2 transition-colors duration-300 cursor-pointer",
                                isRow ? "px-1" : "py-1 pl-3",
                                isActive ? "text-primary !font-semibold" : "text-gray-600 hover:text-primary"
                            )}>
                            <span className="relative z-10">{tab.title}</span>

                            {isActive && (
                                <motion.div
                                    layoutId={`tab-underline-${direction}`}
                                    className={cn(
                                        "absolute bg-primary rounded-full",
                                        isRow
                                            ? "bottom-0 left-0 right-0 h-0.5"
                                            : "left-0 top-0 bottom-0 w-1"
                                    )}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
