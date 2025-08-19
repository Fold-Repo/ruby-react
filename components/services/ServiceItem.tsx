import React from 'react';

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, className }) => {
    return (
        <div className={`flex flex-col justify-center text-center gap-y-0.5 ${className}`}>
            <div className="bg-gray-300 dark:bg-gray-700 rounded-full w-13 h-13 flex items-center justify-center text-white m-auto mb-4">
                <div className="flex items-center justify-center bg-black dark:bg-gray-900 rounded-full w-10 h-10 text-lg text-white">
                    {icon}
                </div>
            </div>
            <h2 className="text-sm font-extrabold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default ServiceItem;
