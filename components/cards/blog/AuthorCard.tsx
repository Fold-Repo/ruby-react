'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';

interface AuthorCardProps {
    name: string;
    followers: string;
    bio: string;
    imageUrl: string;
    onFollow?: () => void;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, followers, bio, imageUrl, onFollow }) => {
    return (
        <div className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg space-y-4 bg-white dark:bg-gray-800">

            <div className="flex items-center gap-3 justify-between">

                <div className="inline-flex gap-2 items-center">

                    <Image
                        src={imageUrl}
                        alt={name}
                        width={56}
                        height={56}
                        className="object-cover size-13 rounded-full"
                    />

                    <div>
                        <h2 className="text-[14px] font-semibold text-gray-800 dark:text-gray-200">{name}</h2>
                        <span className="text-[13px] text-gray-600 dark:text-gray-400">{followers} Followers</span>
                    </div>

                </div>

                <Button rounded='lg' className='h-8 px-4' size='sm' onClick={onFollow}>
                    Follow
                </Button>

            </div>

            <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-6">{bio}</p>

        </div>
    );
};

export default AuthorCard;
