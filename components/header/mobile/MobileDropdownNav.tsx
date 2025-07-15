'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { DropdownItemType, HomeCategoryType, MenuGroupType } from '@/types';
import HomeCategoryCard from '../HomeCategoryCard';

interface MobileDropdownNavProps {
    title: string;
    items?: DropdownItemType[];
    groups?: MenuGroupType[];
    homeItems?: HomeCategoryType[];
}

const MobileDropdownNav: React.FC<MobileDropdownNavProps> = ({ title, items, groups, homeItems }) => {

    const [open, setOpen] = useState(false);
    const [groupOpen, setGroupOpen] = useState<Record<number, boolean>>({});

    const toggleGroup = (idx: number) => {
        setGroupOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <div className="pt-5">

            <div className="flex items-center justify-between text-sm font-medium cursor-pointer pb-3"
                onClick={() => setOpen(!open)}>
                <p>{title}</p>
                {open ? (
                    <MinusIcon className="w-4 h-4" />
                ) : (
                    <PlusIcon className="w-4 h-4" />
                )}
            </div>

            <div className={`transition-all overflow-hidden duration-300 ease-in-out ${open ? 'max-h-[1000px] pt-1.5' : 'max-h-0'}`}>

                {items &&
                    items.map((item, index) => (
                        <div key={index} className="pl-3">
                            <Link href={item.href} className="block py-1 text-[13px] text-gray-500 hover:text-primary transition-colors duration-300">
                                {item.label}
                            </Link>
                        </div>
                    ))}

                {groups &&

                    groups.map((group, idx) => (

                        <div key={idx} className="py-3 pl-3">

                            <div className="flex items-center justify-between text-xs font-semibold text-gray-900 uppercase cursor-pointer mb-3"
                                onClick={() => toggleGroup(idx)}>
                                <p>{group.title}</p>
                                {groupOpen[idx] ? (
                                    <MinusIcon className="w-4 h-4" />
                                ) : (
                                    <PlusIcon className="w-4 h-4" />
                                )}
                            </div>

                            <div className={`transition-all overflow-hidden duration-300 ease-in-out ${groupOpen[idx] ? 'max-h-96' : 'max-h-0'
                                }`}>

                                <ul className="space-y-2 text-[13px] text-gray-500 pl-2">
                                    {group.items.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="hover:text-primary transition-colors duration-300 block py-1">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    ))}

                {homeItems && (
                    <div className="grid grid-cols-2 gap-4 px-2 pt-2">
                        {homeItems.map((item, index) => (
                            <HomeCategoryCard key={index} {...item} />
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default MobileDropdownNav;
