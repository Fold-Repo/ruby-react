import { TimelineStepType } from "@/types";
import React from "react";
import { RiCheckLine } from "react-icons/ri";

interface TimelineProps {
    steps: TimelineStepType[];
    layout?: "inline" | "stacked";
}

const Timeline: React.FC<TimelineProps> = ({ steps, layout = "inline" }) => {
    return (
        <div className="space-y-0.5">
            {steps.map((step, index) => {
                const Icon = step.icon || RiCheckLine;
                const isLast = index === steps.length - 1;

                const colorMap = {
                    completed: "#28A745",
                    current: "#454545",
                    "in-progress": "#F59E0B",
                    pending: "#D1D5DB",
                };

                const iconBgClass =
                    step.status === "completed"
                        ? "bg-[#28A745] text-white"
                        : step.status === "current"
                            ? "bg-[#454545] text-white"
                            : step.status === "in-progress"
                                ? "bg-amber-500 text-white"
                                : "bg-gray-300 dark:bg-gray-600 text-black dark:text-white";

                const lineColor = colorMap[step.status];

                return (
                    <div key={index} className="flex gap-x-3">

                        <div className="relative">

                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <span className={`flex shrink-0 justify-center items-center size-6 md:size-7 rounded-full ${iconBgClass}`}>
                                    <Icon size={16} />
                                </span>
                            </div>

                            {!isLast && (
                                <div className="absolute top-7 bottom-0 start-3.5 w-px -translate-x-[0.5px]"
                                    style={{ backgroundColor: lineColor }}
                                />
                            )}

                        </div>

                        {layout === "inline" ? (
                            <div className="flex gap-3 flex-wrap w-full items-center justify-between pb-12">
                                <div className="text-sm">
                                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{step.title}</h3>
                                    {step.description && (
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                                <p className="text-gray-500 dark:text-gray-300 !text-xs md:!text-sm whitespace-nowrap">
                                    {step.timestamp}
                                </p>
                            </div>
                        ) : (
                            <div className={`flex flex-col text-sm ${!isLast ? "pb-8" : "pb-0"}`}>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{step.title}</h3>
                                {step.description && (
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                )}
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{step.timestamp}</p>
                            </div>
                        )}

                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
