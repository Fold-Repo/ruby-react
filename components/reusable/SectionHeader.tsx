import React from 'react';
import { cn } from '@/lib';

type SectionHeaderProps = {
    label?: string;
    title?: string;
    colorClass?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    colorClass = 'bg-primary',
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-x-2 mb-1">
                <div className={cn(colorClass, 'w-3 h-8 rounded')}></div>
                {label && (
                    <h2 className="text-primary font-semibold text-sm lg:text-base">
                        {label}
                    </h2>
                )}
                {!label && (
                    <h2 className="text-lg font-bold">{title}</h2>
                )}
            </div>
            {label && (
                <h2 className="text-lg font-bold">{title}</h2>
            )}
        </div>
    );
};

export default SectionHeader;
