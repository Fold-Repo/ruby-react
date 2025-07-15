'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib';

type AccordionProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
    contentClassName?: string;
    buttonClassName?: string;
};

export default function Accordion({
    title,
    children,
    defaultOpen = false,
    className,
    contentClassName,
    buttonClassName
}: AccordionProps) {

    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={cn('w-full', className)}>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'flex w-full items-center justify-between border-b border-black/30 pb-3 text-left font-semibold text-gray-600 cursor-pointer',
                    isOpen && 'text-black', buttonClassName 
                )}>
                <span>{title}</span>
                <ChevronDownIcon className={cn('h-5 w-5 transform transition-transform duration-300', isOpen && 'rotate-180')}/>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="accordion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">

                        <div className={cn(
                                'mt-4 rounded-lg border border-black/30 p-4 text-sm lg:text-base text-gray-800',
                                contentClassName
                            )}>
                            {children}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
