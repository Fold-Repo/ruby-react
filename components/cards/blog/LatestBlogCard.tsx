import { PostType } from '@/types';
import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const LatestBlogCard = ({ post }: { post: PostType; }) => {

    const { id, title, description, imageUrl, author, commentsCount } = post;

    return (
        <div className="inline-flex gap-x-3 items-center py-4">

            <Image width={120} height={150} src={imageUrl} alt={title} className="w-28 rounded-lg object-cover aspect-7/7" />

            <div className="space-y-1">

                <Link href={`/blog/${id}`} className="text-gray-800 hover:text-primary text-sm font-bold line-clamp-1">
                    {title}
                </Link>

                <p className="text-[13px] line-clamp-2">{description}</p>

                <div className="flex items-center gap-x-2">

                    <div className="text-[13px] p-1.5 font-medium text-primary border border-gray-300 rounded-md inline-flex items-center gap-1">
                        <UserCircleIcon className="size-4" />
                        By {author}
                    </div>

                    <div className="text-[13px] p-1.5 font-medium text-primary border border-gray-300 rounded-md inline-flex items-center gap-1">
                        <ChatBubbleLeftRightIcon className="size-4" />
                        {commentsCount}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LatestBlogCard