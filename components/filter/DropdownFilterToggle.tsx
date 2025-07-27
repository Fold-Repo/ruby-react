'use client';

import { useState, useRef } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib';
import { useClickOutside } from '@/hooks';
import Filterbar from './Filterbar';
import { FilterDataType } from '@/types';

const DropdownFilterToggle = ({ data, loading }: { data: FilterDataType; loading?: boolean }) => {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);

    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, close); 

    return (
        <div ref={dropdownRef}>
            <button
                type="button"
                onClick={toggle}
                className={cn(
                    'cursor-pointer inline-flex items-center border border-primary rounded-full py-2 gap-x-1 px-3 text-[13px]'
                )}>
                <span>Filters</span>
                <ChevronDownIcon className="size-4" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="w-full absolute left-0 right-0 top-12 bg-white transition-all duration-200 !z-[100] px-4 py-8 !rounded-xl shadow"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}>

                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-semibold text-base">Filter</h2>
                            <button
                                onClick={close}
                                type="button"
                                className="bg-gray-100 rounded-full size-7 text-sm flex items-center justify-center">
                                <XMarkIcon className="size-4" />
                            </button>
                        </div>

                        <Filterbar grid type="apply" close={close} loading={loading} data={data} />

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownFilterToggle;
