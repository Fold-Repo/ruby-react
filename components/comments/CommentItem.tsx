'use client';

import { CommentType } from '@/types';
import Image from 'next/image';
import React from 'react';

type CommentItemProps = {
    comment: CommentType;
    isReply?: boolean;
};

const CommentItem: React.FC<CommentItemProps> = ({ comment, isReply = false }) => {
    return (
        <div className={`${isReply ? 'pl-1' : ''} flex items-start gap-3`}>

            <Image src={comment.avatar} alt="Comment" width={48} height={48} className="size-10 rounded-full object-cover" />

            <div>

                <h1 className="text-sm font-bold">{comment.name}</h1>
                <span className="text-xs text-gray-600">{comment.date}</span>
                <p className="text-[13px] pt-2">{comment.message}</p>

                {comment.replies && comment.replies.length > 0 && (
                    <div className="space-y-5 mt-5">
                        {comment.replies.map((reply) => (
                            <CommentItem key={reply.id} comment={reply} isReply />
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default CommentItem;
