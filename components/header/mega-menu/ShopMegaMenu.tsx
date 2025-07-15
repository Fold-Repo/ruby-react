import { shopMenuGroups } from '@/constants'
import Link from 'next/link'
import React from 'react'

const ShopMegaMenu = () => {
    return (
        <div className="grid grid-cols-6 gap-3">

            {shopMenuGroups.map((group, index) => (
                <div key={index} className="flex flex-col">
                    <h1 className="text-sm !font-semibold mb-4">{group.title.toUpperCase()}</h1>
                    <ul className="space-y-2.5 font-medium text-[13px] text-gray-700">
                        {group.items.map((item, idx) => (
                            <li key={idx}>
                                <Link href={item.href} className="hover:text-primary transition-colors duration-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="flex flex-col col-span-2">

                <h1 className="text-sm font-semibold mb-4">TOP CATEGORIES</h1>

            </div>

        </div>
    )
}

export default ShopMegaMenu