'use client'

import { ProductType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { ProductActionIcons } from '@/components/product'
import { formatCurrency } from '@/lib'
import { StarIcon } from '@heroicons/react/24/solid'

const ProductCardThree = ({ product }: { product: ProductType }) => {
    
    const { id, title, price, ratingAverage, category, images = [] } = product
    const defaultImage = images[0]

    return (
        <div className="flex flex-col relative duration-500 product-card">

            <div className="!rounded-t-lg relative overflow-hidden shadow-sm group duration-500 aspect-7/8 bg-gray-200">

                <Image src={defaultImage} alt={title} width={500}
                    height={500} className="object-cover w-full h-full rounded-t-md product-image group-hover:scale-110 duration-500"
                />

                {/* Top Right Action Icons */}
                <ProductActionIcons product={product} styleType="style1" />

            </div>

            {/* Product Details */}
            <div className="!rounded-b-lg space-y-1.5 p-3 lg:p-4 bg-[#FAF8F8]">

                <div className="text-xs md:!text-sm font-medium flex items-center gap-2 justify-between">
                    <p>{category || 'Uncategorized'}</p>
                    <h6 className="text-primary">{formatCurrency(price)}</h6>
                </div>

                <div className="flex items-center gap-3 justify-between">

                    <Link href={`/products/${id}`}
                        className="hover:text-primary text-sm font-bold block !line-clamp-1">
                        {title}
                    </Link>

                    <div className="inline-flex items-center gap-x-1">
                        <span className="text-xs md:!text-sm font-medium">{ratingAverage ?? 0}</span>
                        <StarIcon className="size-4 text-yellow-500" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductCardThree
