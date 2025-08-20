import React from 'react';
import { CalendarDaysIcon, EyeIcon, ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/24/solid';

interface PostMetaInfoProps {
    author: string;
    date?: string;
    views?: string;
    comments?: string;
}

const PostMetaInfo: React.FC<PostMetaInfoProps> = ({ author, date, views, comments }) => {
    return (
        <div className="flex items-center flex-wrap gap-3 justify-between text-sm">

            <div className="inline-flex items-center gap-2">
                <UserCircleIcon className="size-4 text-gray-700 dark:text-gray-300" />
                <span className="font-medium text-gray-800 dark:text-gray-200">By {author}</span>
            </div>

            <div className="flex items-center gap-3">

                {date && (
                    <div className="inline-flex items-center gap-2">
                        <CalendarDaysIcon className="size-4 text-gray-700 dark:text-gray-300" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{date}</span>
                    </div>
                )}

                {views && (
                    <div className="inline-flex items-center gap-2">
                        <EyeIcon className="size-4 text-gray-700 dark:text-gray-300" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{views} View</span>
                    </div>
                )}

                {comments && (
                    <div className="inline-flex items-center gap-2">
                        <ChatBubbleLeftRightIcon className="size-4 text-gray-700 dark:text-gray-300" />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{comments}</span>
                    </div>
                )}

            </div>

        </div>
    )
}

export default PostMetaInfo;
