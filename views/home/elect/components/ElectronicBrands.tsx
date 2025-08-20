import Image from 'next/image';
import React from 'react'

const ElectronicBrands = () => {

    const brands = [
        "/img/home/elect/brand/1.png",
        "/img/home/elect/brand/2.png",
        "/img/home/elect/brand/3.png",
        "/img/home/elect/brand/4.png",
        "/img/home/elect/brand/5.png",
        "/img/home/elect/brand/6.png",
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((src, index) => (
                <div
                    key={index}
                    className="h-16 cursor-pointer bg-white dark:bg-gray-800 hover:shadow_brand p-1.5 rounded-lg border 
                        border-gray-50 dark:border-gray-700 flex items-center justify-center">
                    <Image
                        src={src}
                        alt={`Brand ${index + 1}`}
                        width={112}
                        height={64}
                        className="w-28 flex-shrink-0 object-contain dark:invert"
                    />
                </div>
            ))}
        </div>
    )
}

export default ElectronicBrands;
