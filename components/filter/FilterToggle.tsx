'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Filterbar from './Filterbar';
import { FilterDataType } from '@/types';

const FilterToggle = ({ data, loading }: { data: FilterDataType; loading?: boolean }) => {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);

    return (
        <>

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
                    <>

                        <motion.div
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />

                        <motion.aside
                            className="fixed left-0 top-0 z-50 h-full w-[min(23rem,90vw)] bg-white shadow p-5 overflow-y-auto"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}>

                            <div className="flex items-center justify-between mb-5">

                                <h2 className="font-semibold text-base">Filter</h2>

                                <button onClick={close} type="button"
                                    className="bg-gray-50 rounded-full size-7 text-sm flex items-center justify-center cursor-pointer">
                                    <XMarkIcon className='size-4' />
                                </button>

                            </div>

                            <Filterbar loading={loading} type='apply' close={close} data={data} />

                        </motion.aside>

                    </>
                )}
            </AnimatePresence>

        </>
    );
};

export default FilterToggle;
