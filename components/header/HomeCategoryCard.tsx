import { HomeCategoryType } from '@/types';
import { Image } from '@heroui/react';
import Link from 'next/link';


export default function HomeCategoryCard({ title, href, img, badge }: HomeCategoryType) {
    return (
        <Link href={href} className="rounded-lg duration-300 transition-all bg-[#F8F5F5] block">

            <div className="relative w-full">
                <Image src={img} alt={title} className=" aspect-[7/9] object-cover object-top rounded-lg" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-1 p-3 pt-4">

                <h2 className="text-xs md:text-sm font-semibold">{title}</h2>

                {badge && (
                    <span className={`inline-flex items-center py-1 px-2.5 rounded-lg text-xs font-medium text-white ${badge.color}`}>
                        {badge.label}
                    </span>
                )}

            </div>
            
        </Link>
    );
}
