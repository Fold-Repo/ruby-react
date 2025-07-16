'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BlogLayoutProps {
    left: ReactNode;
    right: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ left, right }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-10">

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1 w-full lg:w-[65%]">
                {left}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 w-full lg:w-[35%]">
                <div className="space-y-5 sticky top-24">
                    {right}
                </div>
            </motion.div>
            
        </div>
    );
};

export default BlogLayout;
