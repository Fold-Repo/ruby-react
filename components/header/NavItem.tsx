'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import DropdownMenu from './DropdownMenu'
import { MegaMenuType, NavItemType } from '@/types'

type Props = NavItemType & {
    onHoverChange?: (type: MegaMenuType) => void
    onItemLeave?: () => void
    onItemEnter?: () => void
    activeMegaMenuType?: MegaMenuType
}

const NavItem: React.FC<Props> = ({
    title,
    hasDropdown = false,
    linkOnly = false,
    href = '#',
    dropdownItems = [],
    megaMenuType,
    onHoverChange,
    activeMegaMenuType,
    onItemLeave,
    onItemEnter,
}) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLLIElement>(null)

    const handleMouseEnter = () => {
        if (megaMenuType) onHoverChange?.(megaMenuType)
        if (hasDropdown) setOpen(true)
        onItemEnter?.()
    }

    const handleMouseLeave = () => {
        if (megaMenuType) onItemLeave?.()
        if (hasDropdown) setOpen(false)
    }

    const handleLinkClick = () => {
        setOpen(false)
    }

    const isActive = megaMenuType && activeMegaMenuType === megaMenuType
    const textColor = isActive
        ? 'text-[var(--primary)]'
        : 'text-gray-800 dark:text-gray-200 group-hover:text-[var(--primary)]'

    const renderTrigger = () => {
        const baseClass = 'font-semibold flex items-center gap-1 transition-all relative'

        if (linkOnly || (!hasDropdown && href)) {
            return (
                <Link href={href} className={`${baseClass} ${textColor}`}>
                    {title}
                </Link>
            )
        }

        return (
            <span className={`${baseClass} ${textColor} cursor-pointer`}>
                {title}
                {hasDropdown && <ChevronDownIcon className="h-3 w-3" />}
            </span>
        )
    }

    return (
        <li ref={dropdownRef}
            className="py-6 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {renderTrigger()}

            {hasDropdown && dropdownItems.length > 0 && open && (
                <DropdownMenu items={dropdownItems} onLinkClick={handleLinkClick} />
            )}
        </li>
    )
}

export default NavItem
