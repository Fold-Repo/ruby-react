import React from 'react';
import { cn } from '@/lib';

type ResponsiveGridProps = {
    columns: string; 
    children?: React.ReactNode;
    className?: string;
};

const gridClassMap: Record<string, string> = {
    '1': 'grid-cols-1 gap-y-6',
    '2': 'grid-cols-2 gap-3',
    '3': 'grid-cols-2 sm:grid-cols-3 gap-3',
    '4': 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4',
    '5': 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5',
    '6': 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-7',
};

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ columns, children, className }) => {
    const gridClass = gridClassMap[columns] || gridClassMap['4'];

    return (
        <div className={cn('grid', gridClass, className)}>
            {children}
        </div>
    );
};

export default ResponsiveGrid;
