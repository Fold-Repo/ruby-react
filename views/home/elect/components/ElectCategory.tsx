"use client"

import { useGetElectronicCategory } from '@/service'
import { ElectCategoryType } from '@/types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react'

const ElectCategory = () => {

    const [isOpen, setIsOpen] = useState(true);
    const { data, isLoading } = useGetElectronicCategory()
    const skeletonItems = Array(6).fill(0)

    return (
        <div className="border border-gray-200 rounded-b-2xl rounded-t-xl">

            <div onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-between text-white px-6 py-3 rounded-xl bg-primary w-full cursor-pointer">
                <span className="text-sm font-medium">Our Categories</span>
                {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5" />
                ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="categoryList"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">

                        <div className="p-3 space-y-2">

                            { isLoading ? (
                                skeletonItems.map((_, index) => (
                                    <div key={index} className="flex items-center gap-x-3 p-2.5 rounded-md">
                                        <div className="w-8 h-8 rounded bg-gray-200 animate-pulse"></div>
                                        <div className="flex-1 h-5 rounded bg-gray-100 animate-pulse"></div>
                                    </div>
                                ))
                            ) : (
                                data.map((cat: ElectCategoryType, index: number) => (
                                    <div key={index} className="flex items-center gap-x-3 hover:bg-gray-100 p-2.5 rounded-md cursor-pointer">
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            width={40}
                                            height={40}
                                            className="object-contain w-6 h-6 flex-shrink-0"
                                        />
                                        <span className="text-sm font-medium">{cat.name}</span>
                                    </div>
                                ))
                            )}

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ElectCategory