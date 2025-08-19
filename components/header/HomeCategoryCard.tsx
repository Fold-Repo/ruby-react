import { HomeCategoryType } from '@/types';
import { Image } from '@heroui/react';
import Link from 'next/link';


export default function HomeCategoryCard({ title, href, img, badge }: HomeCategoryType) {
    return (
        <Link href={href} className="rounded-lg duration-300 transition-all bg-[#F8F5F5] dark:bg-gray-600 block">

            <div className="relative w-full aspect-[7/9] overflow-hidden">
                <Image radius='none' src={img} alt={title} className="object-cover object-top rounded-t-lg" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-1 p-3 pt-4">

                <h2 className="text-xs 2xl:text-sm font-semibold dark:text-gray-100">{title}</h2>

                {badge && (
                    <span className={`inline-flex items-center py-1 px-2.5 rounded-md text-[10px] text-white ${badge.color}`}>
                        {badge.label}
                    </span>
                )}

            </div>
            
        </Link>
    );
}
