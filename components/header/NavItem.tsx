'use client'

import React from 'react'
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
    onItemEnter
}) => {

    const handleMouseEnter = () => {
        onHoverChange?.(megaMenuType ?? null)
        onItemEnter?.()
    }

    const handleMouseLeave = () => {
        if (megaMenuType) onItemLeave?.()
    }

    const isActive = megaMenuType && activeMegaMenuType == megaMenuType

    const textColor = isActive
        ? 'text-primary'
        : 'text-gray-800 group-hover:text-primary'

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
        <li
            className="py-6 group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {renderTrigger()}

            {!megaMenuType && hasDropdown && dropdownItems.length > 0 && (
                <DropdownMenu items={dropdownItems} />
            )}
        </li>
    )
}

export default NavItem
