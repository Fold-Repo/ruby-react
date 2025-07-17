import React from 'react';
import Link from 'next/link';
import { DropdownItemType } from '@/types';


type DropdownMenuProps = {
    items: DropdownItemType[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
    return (
        <div className="absolute -left-4 top-18 rounded-lg w-44 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg text-start">
            <ul className="py-2 font-medium text-[13px] text-gray-700">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="block px-4 py-2 rounded hover:bg-gray-100">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
