import React from "react";
import { cn } from "@/lib";

interface SectionTitleProps {
    title: string;
    description: string;
    icon?: string;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, icon, className }) => {
    return (
        <div className={cn("max-w-6xl m-auto text-center space-y-3", className)}>
            <h1 className="font-bold text-lg lg:text-xl text-primary">
                {icon && <span className="mr-1">{icon}</span>}
                {title}
            </h1>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
};

export default SectionTitle;
