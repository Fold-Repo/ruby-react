'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PostType, PostVariantType } from '@/types';
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, EyeIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const BlogCard = ({ post, variant }: { post: PostType; variant?: PostVariantType }) => {

    const { id, title, description, imageUrl, author, date, views, commentsCount } = post;

    return (
        <Link href={`/blog/${id}`} className={`group duration-200 ${variant === 'detailed' ? 'space-y-3' : 'space-y-2'}`}>

            {variant === 'detailed' && (
                <h1 className='font-semibold text-sm group-hover:text-primary lg:text-base line-clamp-2'>
                    {title}
                </h1>
            )}

            <Image src={imageUrl} alt="Blog" width={800} height={400} className="object-cover w-full aspect-[7/4] rounded-lg" />

            {variant === 'compact' && (
                <h1 className='font-semibold text-sm group-hover:text-primary lg:text-base line-clamp-1'>
                    {title}
                </h1>
            )}

            {variant === 'detailed' && date && (
                <div className="flex items-center flex-wrap gap-3 justify-between">

                    <div className="inline-flex items-center gap-2 text-sm">
                        <UserCircleIcon className="size-5" />
                        <span className="font-medium">By {author}</span>
                    </div>

                    <div className="flex items-center gap-3">

                        <div className="inline-flex items-center gap-2 text-sm">
                            <CalendarDaysIcon className="size-5" />
                            <span className="font-medium">{date}</span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm">
                            <EyeIcon className="size-5" />
                            <span className="font-medium">{views} View</span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm">
                            <ChatBubbleLeftRightIcon className="size-5" />
                            <span className="font-medium">{commentsCount}</span>
                        </div>

                    </div>

                </div>
            )}

            {variant === 'compact' && (
                <>

                    <p className="text-sm line-clamp-2">{description}</p>

                    <div className="flex items-center flex-wrap gap-y-3 gap-x-6">

                        <div className="inline-flex items-center gap-2 text-sm">
                            <UserCircleIcon className="size-5" />
                            <span className="font-medium">By {author}</span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm">
                            <EyeIcon  className="size-5" />
                            <span className="font-medium">{views} View</span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm">
                            <ChatBubbleLeftRightIcon className="size-5" />
                            <span className="font-medium">{commentsCount}</span>
                        </div>

                    </div>

                </>
            )}

            {variant === 'detailed' && (
                <p className="text-sm line-clamp-3">{description}</p>
            )}
        </Link>
    );
};

export default BlogCard;
