import { cn } from '@/lib';
import React from 'react';

type Variant = 'single' | 'split';

const SkeletonBox = ({ className }: { className?: string }) => (
    <div className={`bg-gray-200 rounded-md animate-pulse ${className}`} />
);

const BlogDetailsViewSkeleton = ({ variant = 'single' }: { variant?: Variant }) => {
    return (
        <div className="space-y-12">

            {variant === 'single' ? (
                <SkeletonBox className="w-full aspect-[7/6] lg:aspect-[7/4]" />
            ) : (
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-3 lg:col-span-2">
                        <SkeletonBox className="w-full aspect-[7/6] lg:aspect-[7/4]" />
                    </div>
                    <div className="col-span-1 hidden lg:block">
                        <SkeletonBox className="w-full h-full aspect-[7/6] lg:aspect-[7/4]" />
                    </div>
                </div>
            )}

            <div className="space-y-8 max-w-7xl mx-auto">

                {/* PostMetaInfo Skeleton */}
                <div className="flex items-center flex-wrap gap-3 justify-between text-sm">
                    <SkeletonBox className="h-4 w-40" /> {/* Author */}
                    <div className="flex items-center gap-3">
                        <SkeletonBox className="h-4 w-24" /> {/* Date */}
                        <SkeletonBox className="h-4 w-16" /> {/* Views */}
                        <SkeletonBox className="h-4 w-16" /> {/* Comments */}
                    </div>
                </div>

                <div className="space-y-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded w-full" />
                    ))}
                </div>

                <div className="flex items-center justify-between py-10 mb-32">
                    {[0, 1, 2].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                'bg-gray-100 rounded-full',
                                i === 1 ? 'translate-y-28' : '',
                                'size-32 sm:size-40 md:size-52'
                            )}
                        />
                    ))}
                </div>

                {/* Title */}
                <div className="h-8 bg-gray-200 rounded w-2/3" />

                {/* Paragraph lines */}
                <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-4 bg-gray-100 rounded w-full" />
                    ))}
                </div>

            </div>

            <div className="space-y-8 max-w-7xl mx-auto">

                {/* === POST SHARE BAR SKELETON === */}
                <div className="flex items-center justify-between gap-5 flex-wrap border border-gray-300 rounded-xl p-4 animate-pulse">

                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        <div className="flex items-center gap-2 flex-wrap">
                            {Array(3)
                                .fill(null)
                                .map((_, index) => (
                                    <div key={index} className="h-6 w-16 bg-gray-200 rounded-md"></div>
                                ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="h-4 w-20 bg-gray-200 rounded"></div>
                        <div className="flex items-center gap-2 text-lg">
                            {Array(5)
                                .fill(null)
                                .map((_, index) => (
                                    <div key={index} className="h-6 w-6 bg-gray-200 rounded-full"></div>
                                ))}
                        </div>
                    </div>

                </div>

                <div className="space-y-5">
                    <div className="h-5 w-24 bg-gray-300 rounded animate-pulse" />
                    <div className="space-y-5 animate-pulse">
                        {[...Array(3)].map((_, i) => (
                            <div key={i}>
                                <CommentItemSkeleton />
                                {i === 0 && (
                                    <div className="mt-5 space-y-5">
                                        <CommentItemSkeleton isReply />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default BlogDetailsViewSkeleton;


const CommentItemSkeleton = ({ isReply = false }: { isReply?: boolean }) => (
    <div className={`${isReply ? 'pl-1' : ''} flex items-start gap-3`}>
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="space-y-2 flex-1">
            <div className="h-4 w-1/4 bg-gray-200 rounded" />
            <div className="h-3 w-1/5 bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
        </div>
    </div>
);
