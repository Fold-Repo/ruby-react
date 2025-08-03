'use client';

import React from 'react';
import { cn } from '@/lib';

interface Props {
    thumbPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const SkeletonBox = ({ className }: { className?: string }) => (
    <div className={cn('bg-slate-200 animate-pulse rounded-md', className)} />
);

const ProductImageGallerySkeleton: React.FC<Props> = ({ thumbPosition = 'bottom' }) => {
    const renderThumbnails = () => (
        <div className={cn(
            'flex gap-3',
            thumbPosition === 'bottom' || thumbPosition === 'top'
                ? 'flex-row overflow-x-auto'
                : 'flex-row overflow-x-auto lg:flex-col lg:overflow-visible'
        )}>
            {[...Array(4)].map((_, i) => (
                <SkeletonBox key={i} className="w-20 h-20 min-w-[5rem]" />
            ))}
        </div>
    );

    const renderMainImage = () => (
        <SkeletonBox className="w-full aspect-[7/8]" />
    );

    return (
        <div className="lg:sticky top-24 h-fit self-start transition-all duration-300 space-y-4">
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

export default ProductImageGallerySkeleton;
