import React from 'react';
import { Button } from '../ui';

const CouponInput = () => {
    return (
        <form className="relative w-full max-w-md">

            <input
                type="email"
                required
                placeholder="Enter your email"
                className="block w-full pl-5 pr-16 py-3.5 text-sm text-black dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border 
                    border-gray-300 dark:border-gray-700 rounded-full outline-none placeholder-gray-400 dark:placeholder-gray-400"
            />

            <Button size="sm" type="submit" className="absolute top-1/2 -translate-y-1/2 right-1.5 !text-xs px-6 !py-2"
                rounded="full">
                Apply
            </Button>

        </form>
    );
};

export default CouponInput;
