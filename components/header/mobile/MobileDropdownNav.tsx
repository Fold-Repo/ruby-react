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
    close: () => void;
}

const MobileDropdownNav: React.FC<MobileDropdownNavProps> = ({ title, items, groups, homeItems, close }) => {

    const [open, setOpen] = useState(false);
    const [groupOpen, setGroupOpen] = useState<Record<number, boolean>>({});

    const toggleGroup = (idx: number) => {
        setGroupOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    const onclose = () => {
        setTimeout(() => {
            close();
            setGroupOpen({});
            setOpen(false);
        }, 200);
    }

    return (
        <div className="pt-5">

            <div className="flex items-center justify-between text-sm font-medium cursor-pointer pb-3 text-gray-200 hover:text-white transition-colors duration-300"
                onClick={() => setOpen(!open)}>

                <p>{title}</p>
                {open ? (
                    <MinusIcon className="w-4 h-4" />
                ) : (
                    <PlusIcon className="w-4 h-4" />
                )}
            </div>

            {/* Dropdown content */}
            <div className={`transition-all overflow-hidden duration-300 ease-in-out ${open ? 'max-h-[1000px] pt-1.5' : 'max-h-0'}`}>

      
                {items &&
                    items.map((item, index) => (
                        <div key={index} className="pl-3">
                            <Link href={item.href} onClick={onclose}
                                className="block py-2.5 text-[13px] text-gray-400 hover:text-primary transition-colors duration-300">
                                {item.label}
                            </Link>
                        </div>
                    ))}

                {/* Groups */}
                {groups &&
                    groups.map((group, idx) => (
                        <div key={idx} className="py-2 pl-3">
                            <div className="flex items-center justify-between text-xs font-semibold text-gray-200 uppercase cursor-pointer mb-3 hover:text-white transition-colors duration-300"
                                onClick={() => toggleGroup(idx)}>

                                <p>{group.title}</p>
                                {groupOpen[idx] ? (
                                    <MinusIcon className="w-4 h-4" />
                                ) : (
                                    <PlusIcon className="w-4 h-4" />
                                )}
                            </div>

                            <div className={`transition-all overflow-hidden duration-300 ease-in-out ${groupOpen[idx] ? 'max-h-96' : 'max-h-0'}`}>
                                <ul className="space-y-2.5 text-[13px] text-gray-400 pl-2">
                                    {group.items.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={onclose}
                                                className="hover:text-primary transition-colors duration-300 block py-1">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                {/* Home category cards */}
                {homeItems && (
                    <div className="grid grid-cols-2 gap-4 px-2 py-2">
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
