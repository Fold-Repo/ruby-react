"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib";

import { RiUserLine, RiShoppingCart2Line, RiMapPinLine, RiLogoutBoxRLine } from "react-icons/ri";

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    {
        label: "Account Information",
        href: "/pages/account",
        icon: <RiUserLine className="size-4" />,
    },
    {
        label: "Your Orders",
        href: "/pages/account/orders",
        icon: <RiShoppingCart2Line className="size-4" />,
    },
    {
        label: "My Address",
        href: "/pages/account/address",
        icon: <RiMapPinLine className="size-4" />,
    },
    {
        label: "Logout",
        href: "/login",
        icon: <RiLogoutBoxRLine className="size-4" />,
    },
];

const AccountSidebar: React.FC = () => {

    const pathname = usePathname();

    const activeHref = navItems
        .map((item) => item.href)
        .filter((href) => pathname.startsWith(href))
        .sort((a, b) => b.length - a.length)[0]

    return (
        <div className="bg-white-smoke p-4 rounded-xl space-y-4">
            {navItems.map((item) => {

                const isActive = item.href === activeHref;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "w-full rounded-lg text-sm p-3 inline-flex items-center gap-x-2 transition-colors",
                            isActive
                                ? "bg-primary text-white"
                                : "bg-transparent text-black hover:bg-gray-100"
                        )}>
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default AccountSidebar;
