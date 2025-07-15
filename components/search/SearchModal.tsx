'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SearchInput from './SearchInput';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {

    const [query, setQuery] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-50 flex items-start justify-center p-2 overflow-x-hidden overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>

                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black opacity-50 z-[-1]"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white w-full max-w-6xl max-h-full rounded-xl md:py-6 py-5 px-5 md:px-12 ease-out transition-all sm:mx-auto"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>

                        <div className="flex items-center justify-between">

                            <h1 className="font-bold text-base text-gray-900">Search</h1>

                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-200 rounded-full size-7 text-sm flex items-center justify-center cursor-pointer">
                                <XMarkIcon className="w-4 h-4" />
                            </button>

                        </div>

                        <div className="pt-8 space-y-8">

                            <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for products..." />

                            <div className="space-y-3">
                                <h2 className="text-sm font-semibold text-gray-700">Key features</h2>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {['Men Dress', 'Summer Collection', 'Slim Fit', 'Casual Wear'].map((tag) => (
                                        <span key={tag}
                                            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-300 bg-white text-black">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>,

        document.body
    );
};

export default SearchModal;
