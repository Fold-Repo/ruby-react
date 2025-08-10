import Image from "next/image";
import React from "react";

interface ServiceFeatureCardProps {
    icon: string;
    title: string;
    description: string;
    iconWidth?: string;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({
    icon,
    title,
    description,
    iconWidth = "w-12",
}) => {
    return (
        <div className="bg-gray-100 p-3 relative overflow-hidden rounded-tl-2xl rounded-br-2xl">
            <div className="flex items-center gap-x-3">
                <Image width={200} height={200} src={icon} className={iconWidth} alt={title} />
                <div>
                    <h2 className="text-base font-bold">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatureCard;
