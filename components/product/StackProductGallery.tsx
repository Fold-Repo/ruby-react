'use client';

import React, { useEffect, useRef } from 'react';
import { Image } from '@heroui/react';
import { cn } from '@/lib'; 

interface StackGalleryProps {
    images: string[];
    selectedImage?: string;
    onImageSelect?: (img: string) => void;
}

const layoutPattern = [2, 1, 2, 2];

const StackProductGallery: React.FC<StackGalleryProps> = ({
    images,
    selectedImage,
    onImageSelect,
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

    const groups: string[][] = [];
    let i = 0;
    let patternIndex = 0;

    while (i < images.length) {
        const count = layoutPattern[patternIndex % layoutPattern.length];
        groups.push(images.slice(i, i + count));
        i += count;
        patternIndex++;
    }

    return (
        <div className="flex flex-col gap-5 overflow-hidden duration-300 transition-all">
            {groups.map((group, groupIdx) => (
                <div  key={groupIdx}
                    className={`grid grid-cols-${group.length} gap-3`}>
                    {group.map((img, j) => {
                        const globalIndex = group.slice(0, j).length + images.indexOf(img); 

                        return (
                            <Image
                                key={j}
                                width={800}
                                src={img}
                                alt={`Stack Image ${groupIdx}-${j}`}
                                ref={(el) => {
                                    imageRefs.current[globalIndex] = el;
                                }}
                                onClick={() => handleClick(img, globalIndex)}
                                className={cn(
                                    'object-top aspect-[7/8] w-full object-cover cursor-pointer rounded-xl',
                                    selectedImage === img && ''
                                )}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default StackProductGallery;
