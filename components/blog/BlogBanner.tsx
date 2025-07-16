'use client';

import Image from 'next/image';
import React from 'react';

type BlogBannerProps = {
    imageUrl: string;
    imageUrlRight?: string;
    variant?: 'single' | 'split';
};

const BlogBanner: React.FC<BlogBannerProps> = ({
    imageUrl,
    imageUrlRight,
    variant = 'single',
}) => {
    if (variant === 'single') {
        return (
            <div>
                <Image src={imageUrl} alt="Blog" width={1200} height={500} className="object-cover w-full aspect-[7/6] lg:aspect-[7/4] rounded-lg" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-5">

            <div className="col-span-3 lg:col-span-2">
                <Image src={imageUrl} alt="Blog" width={800} height={500}
                    className="object-cover w-full aspect-[7/6] lg:aspect-[7/4] rounded-lg" />
            </div>

            <div className="col-span-1 hidden lg:block">
                <Image src={imageUrlRight ?? imageUrl} alt="Blog" width={400} height={500}
                    className="object-cover w-full h-full aspect-[7/6] lg:aspect-[7/4] rounded-lg" />
            </div>

        </div>
    );
};

export default BlogBanner;
