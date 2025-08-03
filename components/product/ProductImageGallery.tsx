'use client';

import { useEffect, useState } from 'react';
import { Image as HeroUIImage } from '@heroui/image';
import { cn } from '@/lib';
import { motion, AnimatePresence } from 'framer-motion';

type ThumbPosition = 'top' | 'bottom' | 'left' | 'right';

interface ProductImageGalleryProps {
    images: string[];
    thumbPosition?: ThumbPosition;
    selectedImage?: string;
    onImageSelect?: (img: string) => void;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    images,
    thumbPosition = 'bottom',
    selectedImage,
    onImageSelect,
}) => {
    const [internalSelectedImage, setInternalSelectedImage] = useState<string>(images[0]);

    useEffect(() => {
        if (images.length > 0) {
            setInternalSelectedImage(images[0]);
        }
    }, [images]);

    useEffect(() => {
        if (selectedImage) {
            setInternalSelectedImage(selectedImage);
        }
    }, [selectedImage]);

    const handleImageClick = (img: string) => {
        setInternalSelectedImage(img);
        onImageSelect?.(img);
    };

    const renderThumbnails = () => (
        <div className={cn(
                'flex gap-3 scrollbar-thin pr-1',
                thumbPosition === 'bottom' || thumbPosition === 'top'
                    ? 'flex-row overflow-x-auto'
                    : 'flex-row overflow-x-auto lg:flex-col lg:overflow-visible'
            )}>
            {images.map((img, index) => (
                <div key={index}
                    className={cn(
                        'relative w-20 h-20 min-w-[5rem] flex-shrink-0 cursor-pointer rounded-lg overflow-hidden',
                        internalSelectedImage === img ? 'border-2 border-primary' : ''
                    )}
                    onClick={() => handleImageClick(img)}>
                    <HeroUIImage
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-20 object-cover"
                        width={700}
                        radius="md"
                    />
                </div>
            ))}
        </div>
    );

    const renderMainImage = () => (
        <div className="relative w-full aspect-[7/8] rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={internalSelectedImage}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute inset-0">
                    <HeroUIImage
                        src={internalSelectedImage}
                        alt="Selected Product"
                        className="w-full aspect-[7/8] object-cover"
                        radius="lg"
                        width={1000}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <div className="lg:sticky top-24 h-fit self-start overflow-hidden transition-all duration-300 space-y-4">
            {thumbPosition === 'top' && (
                <>
                    {renderThumbnails()}
                    {renderMainImage()}
                </>
            )}

            {thumbPosition === 'bottom' && (
                <>
                    {renderMainImage()}
                    {renderThumbnails()}
                </>
            )}

            {(thumbPosition === 'left' || thumbPosition === 'right') && (
                <div className="flex flex-col-reverse lg:flex-row gap-4">
                    {thumbPosition === 'left' && (
                        <>
                            {renderThumbnails()}
                            <div className="lg:order-2 w-full">{renderMainImage()}</div>
                        </>
                    )}
                    {thumbPosition === 'right' && (
                        <>
                            <div className="lg:order-2">{renderThumbnails()}</div>
                            <div className="lg:order-1 w-full">{renderMainImage()}</div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductImageGallery;
