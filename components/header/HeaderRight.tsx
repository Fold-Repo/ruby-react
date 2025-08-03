'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MagnifyingGlassIcon,
    UserIcon,
    HeartIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components';
import dynamic from 'next/dynamic';
import { selectCartQuantity } from '@/store/cartSlice';
import { useSelector } from 'react-redux';
import { selectWishlistCount } from '@/store/wishlistSlice';

const SearchModal = dynamic(() => import('../search/SearchModal'), {
    ssr: false,
});

const HeaderRight: React.FC = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const qty = useSelector(selectCartQuantity)
    const wishlistQty = useSelector(selectWishlistCount)

    return (
        <>

            <div className="flex justify-end items-center space-x-4">

                {/* Search */}
                <button onClick={() => setIsSearchOpen(true)} type="button" className="text-gray-800 hover:text-primary cursor-pointer">
                    <MagnifyingGlassIcon className="w-4.5 h-4.5" />
                </button>

                {/* Account */}
                <div className="relative group hidden md:block">

                    <button type="button" className="text-gray-800 hover:text-primary cursor-pointer !mt-1">
                        <UserIcon className="w-4.5 h-4.5" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute mt-3 -right-12 top-10 rounded-lg w-[290px] bg-white p-4 opacity-0 invisible transition-all duration-200 z-50 group-hover:opacity-100 group-hover:visible shadow-lg">

                        <div className="border-b border-gray-300 pb-4 mb-4">

                            <Link href='/login'>
                                <Button size='sm' color='dark' className='w-full' rounded='lg'>Login</Button>
                            </Link>

                            <p className="text-gray-600 text-sm pt-3">
                                Don't have an account?{' '}
                                <Link href="/register" className="font-bold text-black">
                                    Register
                                </Link>
                            </p>

                        </div>

                        <p className="text-sm font-medium text-black">Support</p>

                    </div>

                </div>

                {/* Wishlist */}
                <Link href="/wishlist" className="relative text-gray-800 hover:text-primary cursor-pointer">
                    <HeartIcon className="w-4.5 h-4.5" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {wishlistQty}
                    </span>
                </Link>

                {/* Cart */}
                <Link href="/cart" className="relative text-gray-800 hover:text-primary cursor-pointer">
                    <ShoppingBagIcon className="w-4.5 h-4.5" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                        {qty}
                    </span>
                </Link>

            </div>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        </>
    );
};

export default HeaderRight;
