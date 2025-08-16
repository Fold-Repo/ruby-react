import React from 'react';
import Link from 'next/link';
import { DropdownItemType } from '@/types';

type DropdownMenuProps = {
    items: DropdownItemType[];
    onLinkClick?: () => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onLinkClick }) => {
    return (
        <div className="absolute -left-4 top-18 rounded-lg w-44 bg-white z-50 shadow-lg text-start">
            <ul className="py-2 font-medium text-[13px] text-gray-700">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}
                            className="block px-4 py-2 rounded hover:bg-gray-100"
                            onClick={onLinkClick}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
