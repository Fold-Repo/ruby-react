import React from 'react';

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col justify-center text-center gap-y-0.5">
            <div className="bg-gray-300 rounded-full size-13 flex items-center justify-center text-white m-auto mb-4">
                <div className="flex items-center justify-center bg-black rounded-full size-10 text-lg text-white">
                    {icon}
                </div>
            </div>
            <h2 className="text-sm font-extrabold">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};

export default ServiceItem;
