'use client'

import Image from 'next/image'
import { StarRating } from '@/components'
import { FeedBackType } from '@/types'

function FeedBackCard({ name, role, image, message, rating }: FeedBackType) {
    return (
        <div className="h-full flex justify-between flex-col p-4 border rounded-xl border-gray-300 dark:border-gray-700 space-y-3 bg-white dark:bg-gray-800">

            <StarRating value={rating} />

            <p className="text-sm text-gray-500 dark:text-gray-300">{message}</p>

            <div className="flex items-center gap-x-2">
                <Image
                    src={image}
                    width={40}
                    height={40}
                    alt={name}
                    className="rounded-full object-cover"
                />
                <div>
                    <h2 className="text-sm font-bold text-gray-800 dark:text-gray-200">{name}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
                </div>
            </div>

        </div>
    )
}

export default FeedBackCard
