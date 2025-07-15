"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
    key: string;
    title: string;
}

interface TabProps {
    tabs: TabItem[];
    className?: string;
    active?: string;
    onChange?: (key: string) => void;
}

export default function Tab({
    tabs,
    className,
    active: controlledActiveTab,
    onChange,
}: TabProps) {

    const [internalActiveTab, setInternalActiveTab] = useState<string>(tabs[0]?.key || "");
    const activeTab = controlledActiveTab ?? internalActiveTab;

    const handleTabClick = (key: string) => {
        if (!controlledActiveTab) setInternalActiveTab(key);
        onChange?.(key);
    };

    return (
        <div className='w-full overflow-x-auto'>
            <div className={cn('flex justify-start sm:justify-center gap-x-4 sm:gap-x-6 px-4 text-sm whitespace-nowrap relative', className)}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.key;
                    return (
                        <button
                            key={tab.key}
                            onClick={() => handleTabClick(tab.key)}
                            className={cn(
                                "relative px-1 inline-flex items-center gap-x-2 transition-colors duration-300 cursor-pointer",
                                isActive
                                    ? "text-primary !font-semibold"
                                    : "text-gray-600 hover:text-primary"
                            )} >
                            <span className="relative z-10">{tab.title}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="tab-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
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
