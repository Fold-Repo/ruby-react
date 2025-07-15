'use client'

import React, { useRef, useState } from 'react'
import NavBar from './NavBar'
import Container from '../container'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import HeaderRight from './HeaderRight'
import { menuItems } from '@/constants'
import NavItem from './NavItem'
import { MegaMenuContainer } from './mega-menu'
import type { MegaMenuType } from '@/types'
import { MobileNav } from './mobile'
import Image from 'next/image'

const Header = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const [megaMenuType, setMegaMenuType] = useState<MegaMenuType>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isMouseInMegaMenu = useRef(false)

    const openMegaMenu = (type: MegaMenuType) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setMegaMenuType(type)
    }

    const closeMegaMenu = () => {
        if (!isMouseInMegaMenu.current) {
            timeoutRef.current = setTimeout(() => {
                setMegaMenuType(null)
            }, 200)
        }
    }

    const cancelCloseMegaMenu = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleHoverChange = (type: MegaMenuType) => {
        if (type) {
            openMegaMenu(type)
        } else {
            closeMegaMenu()
        }
    }

    const handleMouseEnter = () => {
        cancelCloseMegaMenu();
    }

    const handleMouseLeave = () => {
        closeMegaMenu()
    }

    return (
        <>

            <NavBar />

            <header className="py-4 xl:py-0 bg-white sticky top-0 z-50" onMouseLeave={handleMouseLeave}>

                <Container>

                    <div className="flex items-center justify-between">

                        {/* MOBILE MENU ICON */}
                        <button onClick={() => setOpen(true)} type="button" className="cursor-pointer w-1/4 md:w-1/3 xl:hidden">
                            <Bars3Icon className="h-6 w-6 text-gray-800" />
                        </button>

                        {/* LOGO */}
                        <Link href="/"
                            className="logo-header"
                            onMouseEnter={closeMegaMenu} >
                            <Image width={153} height={63} src="/img/logo/black_logo.png" alt="logo" className="logo w-24 md:w-32" />
                        </Link>

                        {/* CENTER LINKS */}
                        <div className="hidden xl:block">
                            <nav>
                                <ul className="flex items-center text-sm gap-6">
                                    {menuItems.map((item) => (
                                        <NavItem
                                            key={item.title}
                                            {...item}
                                            onHoverChange={handleHoverChange}
                                            activeMegaMenuType={megaMenuType}
                                            onItemLeave={closeMegaMenu}
                                            onItemEnter={cancelCloseMegaMenu}
                                        />
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <HeaderRight />

                    </div>

                </Container>

                {/* ======== MEGA MENU ========== */}
                <div onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <MegaMenuContainer type={megaMenuType} />
                </div>

                {/* ======== MOBILE SIDEBAR ========== */}


            </header>

            <MobileNav open={open} setOpen={setOpen} />

        </>
    )
}

export default Header
