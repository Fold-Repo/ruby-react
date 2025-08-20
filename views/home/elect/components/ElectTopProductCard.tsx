import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ElectCategoryType } from '@/types';

type ElectTopProductCardProps = {
    product: ElectCategoryType;
};

const ElectTopProductCard: React.FC<ElectTopProductCardProps> = ({ product }) => {
    return (
        <div className="group border border-gray-50 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-xl overflow-hidden">

            <div className="bg-gray-200 dark:bg-gray-700 aspect-[7/5] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
            </div>

            {/* Product Info */}
            <div className="group-hover:bg-[#E30047] group-hover:text-white dark:group-hover:bg-[#E30047] dark:text-gray-200 space-y-3 p-5 transition-colors duration-300">

                <h2 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-white">{product.name}</h2>

                <div className="flex items-center gap-4 justify-between">

                    <p className="text-sm text-gray-600 dark:text-gray-200 group-hover:text-white">
                        {product.count} {product.count === 1 ? 'Item' : 'Items'}
                    </p>

                    <Link href="/shop/shop_features/categories_top_1">
                        <svg
                            className="text-black dark:text-gray-100 group-hover:text-white"
                            width="46"
                            height="16"
                            viewBox="0 0 46 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M45.4672 9.03914C45.8578 8.64861 45.8578 8.01545 45.4672 7.62492L39.1033 1.26096C38.7128 0.870439 38.0796 0.870439 37.6891 1.26096C37.2985 1.65149 37.2985 2.28465 37.6891 2.67518L43.3459 8.33203L37.6891 13.9889C37.2985 14.3794 37.2985 15.0126 37.6891 15.4031C38.0796 15.7936 38.7128 15.7936 39.1033 15.4031L45.4672 9.03914ZM0.398438 8.33203V9.33203H44.7601V8.33203V7.33203H0.398438V8.33203Z"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ElectTopProductCard;
