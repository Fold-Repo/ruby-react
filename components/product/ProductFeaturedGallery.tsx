'use client';

import { cn } from '@/lib';
import { Image } from '@heroui/react';

interface FeaturedGalleryProps {
    images: string[];
    selectedImage?: string;
    onImageSelect?: (img: string) => void;
}

const ProductFeaturedGallery: React.FC<FeaturedGalleryProps> = ({
    images,
    selectedImage,
    onImageSelect,
}) => {

    const filledImages = Array.from({ length: 5 }).map(
        (_, i) => images[i % images.length]
    );

    const [main, stacked1, stacked2, side1, side2] = filledImages;

    const handleClick = (img: string) => {
        onImageSelect?.(img);
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-5">

            <Image
                removeWrapper
                disableSkeleton={false}
                loading="lazy"
                width={700}
                src={main}
                data-image={main}
                alt="Main"
                onClick={() => handleClick(main)}
                className={cn(
                    'col-span-1 md:col-span-2 w-full h-full aspect-7/9 rounded-xl object-cover object-top cursor-pointer',
                    selectedImage === main && 'border-2 border-primary'
                )}
            />

            {/* Stacked column */}
            <div className="flex flex-col gap-3 lg:gap-5">
                {[stacked1, stacked2].map((img, i) => (
                    <Image
                        removeWrapper
                        disableSkeleton={false}
                        loading="lazy"
                        width={700}
                        key={i}
                        src={img}
                        data-image={img}
                        alt={`Stacked ${i + 1}`}
                        onClick={() => handleClick(img)}
                        className={cn(
                            'aspect-7/4 h-full w-full rounded-xl object-cover object-top cursor-pointer',
                            selectedImage === img && 'border-2 border-primary'
                        )}
                    />
                ))}
            </div>

            {/* Right-side column */}
            <div className="grid grid-cols-2 md:flex flex-col gap-3 md:gap-5 col-span-2">
                {[side1, side2].map((img, i) => (
                    <Image
                        removeWrapper
                        disableSkeleton={false}
                        loading="lazy"
                        width={700}
                        key={i}
                        src={img}
                        data-image={img}
                        alt={`Side ${i + 1}`}
                        onClick={() => handleClick(img)}
                        className={cn(
                            'aspect-7/6 md:aspect-7/4 h-full w-full rounded-xl object-cover object-top cursor-pointer',
                            selectedImage === img && 'border-2 border-primary'
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductFeaturedGallery;
