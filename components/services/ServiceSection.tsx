import React from 'react';
import { FaTruck, FaHeadset, FaShieldAlt, FaTags } from 'react-icons/fa';
import { cn } from '@/lib';
import ServiceItem from './ServiceItem';

interface ServiceSectionProps {
    layout?: 'row' | 'col';
    className?: string;
}

const serviceItems = [
    {
        icon: <FaTruck />,
        title: 'FREE AND FAST DELIVERY',
        description: 'Free delivery for all orders over $140',
    },
    {
        icon: <FaHeadset />,
        title: '24/7 CUSTOMER SERVICE',
        description: 'Friendly 24/7 customer support',
    },
    {
        icon: <FaShieldAlt />,
        title: 'MONEY BACK GUARANTEE',
        description: 'We return money within 30 days',
    },
    {
        icon: <FaTags />,
        title: 'MEMBER DISCOUNTS',
        description: 'Special prices for our loyal customers',
    },
];

const ServiceSection: React.FC<ServiceSectionProps> = ({ layout = 'row', className }) => {
    
    const isRow = layout === 'row';

    return (
        <div className={cn(
                'pt-12',
                isRow
                    ? 'flex items-center flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-between'
                    : 'flex flex-col items-center gap-10',
                className
            )}>
            {serviceItems.map((item, idx) => (
                <ServiceItem
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default ServiceSection;
