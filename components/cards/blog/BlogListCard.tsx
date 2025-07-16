import { PostType } from '@/types';
import React from 'react'
import { ChatBubbleLeftRightIcon, EyeIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';

const IconText = ({ icon: Icon, text, }: { icon: React.ElementType; text: string; }) => (
    <div className="inline-flex items-center gap-2 text-sm text-gray-800">
        <Icon className="size-5" />
        <span className="font-medium">{text}</span>
    </div>
);

type FooterPosition = 'top' | 'bottom';
const BlogListCard = ({ post, footerPosition }: { post: PostType; footerPosition?: FooterPosition; }) => {

    const { id, title, imageUrl, author, views, commentsCount, description } = post;

    const MetaInfo = () => (
        <div className="flex items-center gap-2 flex-wrap">
            <IconText icon={UserCircleIcon} text={`By ${author}`} />
            <IconText icon={EyeIcon} text={`${views} View`} />
            <IconText icon={ChatBubbleLeftRightIcon} text={commentsCount} />
        </div>
    );

    return (
        <div className="inline-flex flex-wrap md:flex-nowrap gap-3 items-start">

            <Image src={imageUrl} alt={title} width={298} height={294}
                className="w-full md:w-40 rounded-lg object-cover aspect-7/4 md:aspect-7/8" />

            <div className="space-y-3 md:border border-gray-300 md:p-4 rounded-lg w-full">

                <Link href={`/blog/${id}`} className="text-gray-800 hover:text-primary text-sm lg:text-base font-bold line-clamp-2 block">
                    {title}
                </Link>

                <p className="text-[13px] text-gray-700 line-clamp-2">{description}</p>

                {footerPosition === 'top' ? (
                    <div className="flex items-center gap-3 flex-wrap justify-between">
                        <Link href={`/blog/${id}`}>
                            <Button size='sm' rounded='lg' variant='outline_primary'>
                                Read More
                            </Button>
                        </Link>
                        <MetaInfo />
                    </div>
                ) : (
                    <>
                        <MetaInfo />
                        <Link href={`/blog/${id}`}>
                            <Button size='sm' rounded='lg' variant='outline_primary'>
                                Read More
                            </Button>
                        </Link>
                    </>
                )}

            </div>

        </div>
    )
}

export default BlogListCard