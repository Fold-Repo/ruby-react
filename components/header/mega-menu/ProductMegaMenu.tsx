import { Button } from '@/components/ui'
import { productMenuItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductMegaMenu = () => {
    return (
        <div className="grid grid-cols-4 gap-3">

            {productMenuItems.map((group, index) => (
                <div key={index} className="flex flex-col">
                    <h1 className="text-sm !font-semibold mb-4">{group.title.toUpperCase()}</h1>
                    <ul className="space-y-2.5 font-medium text-[13px] text-gray-700 dark:text-gray-300">
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

            <div className="flex flex-col">

                <h1 className="text-sm font-semibold mb-4">NEW ARRIVAL</h1>

                <Link href="/shop_features/shop_collection" className="relative rounded-lg overflow-hidden">

                    <Image width={500} height={500} src="/img/mega_menu/3.jpg" alt="Product" 
                    className="w-full h-full object-cover aspect-square" />

                    <div className="absolute inset-0 bg-black opacity-30"></div>

                    <div className="absolute inset-0 flex items-center justify-center p-10">

                        <Button variant='transparent' rounded='full' className='text-white border !border-white w-full '>
                            Shop
                        </Button>

                    </div>
                </Link>

            </div>

        </div>
    )
}

export default ProductMegaMenu