'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HeartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { homeCategories, menuItems, productMenuItems, shopMenuGroups } from '@/constants';
import MobileDropdownNav from './MobileDropdownNav';

interface MobileNavProps {
    open: boolean;
    setOpen: (val: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {

    const close = () => {
        setOpen(false);
    };

    const getMegaMenuGroups = (type: string) => {
        switch (type) {
            case 'product':
                return productMenuItems;
            case 'shop':
                return shopMenuGroups;
            default:
                return [];
        }
    };

    return (
        <div className="xl:hidden">
            <AnimatePresence>
                {open && (
                    <>

                        {/* ========= Backdrop ======== */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={close}
                        />

                        {/* ======== Slide-in Menu ======== */}
                        <motion.aside
                            className="fixed left-0 top-0 z-50 h-full w-[min(20rem,90vw)] bg-white shadow-2xl ring-1 ring-black/10 !overflow-y-auto"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}>

                            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200">

                                <Link href="/" className="logo-header">
                                    <Image width={153} height={63} src="/img/logo/black_logo.png" alt="logo" className="logo w-24 md:w-32" />
                                </Link>

                                <button onClick={close} type="button" className="bg-gray-200 rounded-full size-7 text-sm flex items-center justify-center cursor-pointer">
                                    <XMarkIcon className='size-4' />
                                </button>

                            </div>

                            <div className="divide-y divide-gray-200 p-5">

                                {menuItems.map((item) =>
                                    item.dropdownItems ? (
                                        <MobileDropdownNav close={close} key={item.title} title={item.title} items={item.dropdownItems} />
                                    ) : item.megaMenuType === 'home' ? (
                                        <MobileDropdownNav close={close} key={item.title} title={item.title} homeItems={homeCategories} />
                                    ) : item.megaMenuType ? (
                                        <MobileDropdownNav close={close}
                                            key={item.title}
                                            title={item.title}
                                            groups={getMegaMenuGroups(item.megaMenuType)}
                                        />
                                    ) : item.linkOnly ? (
                                        <div key={item.title} className="pt-5">
                                            <div className="text-sm font-medium cursor-pointer pb-3">
                                                <Link href={item.href || '#'} className="hover:text-primary transition-colors duration-300">
                                                    {item.title}
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null
                                )}

                                <div className="flex items-center gap-2 mt-12">

                                    <Button className='bg-gray-200 text-black  w-full' rounded='lg' leftIcon={<HeartIcon className='size-4' />}>
                                        Wishlist
                                    </Button>

                                    <Button variant='dark' className='w-full' rounded='lg' leftIcon={<UserIcon className='size-4' />}>
                                        Login
                                    </Button>

                                </div>

                            </div>

                        </motion.aside>

                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
