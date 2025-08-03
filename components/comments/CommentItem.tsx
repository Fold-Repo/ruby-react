'use client';

import { CommentType } from '@/types';
import { Avatar } from '@heroui/react';
import React from 'react';

type CommentItemProps = {
    comment: CommentType;
    isReply?: boolean;
};

const CommentItem: React.FC<CommentItemProps> = ({ comment, isReply = false }) => {
    return (
        <div className={`${isReply ? 'pl-1' : ''} flex items-start gap-3`}>

            <Avatar color='primary' name={comment.name} src={comment.avatar} alt="Comment" className="size-10" />

            <div>

                <h1 className="text-sm font-bold">{comment.name}</h1>
                <span className="text-xs text-gray-600">{comment.date}</span>
                <p className="text-[13px] pt-1">{comment.message}</p>

                {comment.replies && comment.replies.length > 0 && (
                    <div className="space-y-4 mt-5">
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
