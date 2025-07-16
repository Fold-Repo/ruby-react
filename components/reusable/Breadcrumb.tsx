import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

type BreadcrumbItem = {
    label: string;
    href?: string; 
};

type BreadcrumbProps = {
    title: string;
    items?: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
    return (
        <div className="bg-[#F5F3EE] h-36 md:h-40 rounded flex flex-col items-center justify-center gap-y-2.5">

            <h1 className="font-bold text-xl 2xl:text-2xl max-w-xl text-center mx-auto">{title}</h1>

            {items && (
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.href ? (
                                <Link href={item.href} className="text-black/80 font-semibold">
                                    {item.label}
                                </Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                            {index < items.length - 1 && (
                                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Breadcrumb;
