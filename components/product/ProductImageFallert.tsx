'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib';
import { Image } from '@heroui/react';

interface ProductImageGalleryProps {
    images: string[];
    selectedImage?: string;
    onImageSelect?: (img: string) => void;
    variant?: 'grid' | 'grid2';
}

const ProductImageFallert: React.FC<ProductImageGalleryProps> = ({
    images,
    selectedImage,
    onImageSelect,
    variant = 'grid',
}) => {

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        if (selectedImage && images.includes(selectedImage)) {
            const index = images.indexOf(selectedImage);
            const el = imageRefs.current[index];
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedImage, images]);

    const handleClick = (img: string, index: number) => {
        onImageSelect?.(img);

        imageRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className="flex flex-col gap-5 overflow-hidden duration-300 transition-all">
            {variant === 'grid' &&
                images.map((img, idx) => (
                    <Image
                        width={800}
                        key={idx}
                        ref={(el) => {
                            imageRefs.current[idx] = el;
                        }}
                        src={img}
                        data-image={img}
                        alt={`Image ${idx + 1}`}
                        onClick={() => handleClick(img, idx)}
                        className={cn(
                            'object-top aspect-7/7 w-full object-cover rounded-xl cursor-pointer',
                            // internalSelectedImage === img && 'border-2 border-primary'
                        )}
                    />
                ))}

            {variant === 'grid2' &&
                Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => (
                    <div key={i} className="grid grid-cols-2 gap-3">
                        {images.slice(i * 2, i * 2 + 2).map((img, j) => {
                            const index = i * 2 + j;
                            return (
                                <Image
                                    width={800}
                                    key={j}
                                    ref={(el) => {
                                        imageRefs.current[j] = el;
                                    }}
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                    onClick={() => handleClick(img, index)}
                                    className={cn(
                                        'object-top aspect-7/9 w-full object-cover cursor-pointer',
                                        // internalSelectedImage === img && 'border-2 border-primary'
                                    )}
                                />
                            );
                        })}
                    </div>
                ))}
        </div>
    );
};

export default ProductImageFallert;
