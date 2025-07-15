'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

type StarRatingProps = {
    value: number
    size?: string
}

export default function StarRating({ value, size = 'w-4.5 h-4.5' }: StarRatingProps) {
    const fullStars = Math.floor(value)
    const hasHalfStar = value - fullStars >= 0.25 && value - fullStars < 0.75
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
        <div className="inline-flex items-center gap-x-1 text-yellow-400">
            {Array.from({ length: fullStars }, (_, i) => (
                <StarIcon key={`full-${i}`} className={clsx(size)} />
            ))}
            {hasHalfStar && <StarIcon className={clsx(size, 'opacity-50')} />}
            {Array.from({ length: emptyStars }, (_, i) => (
                <StarIcon key={`empty-${i}`} className={clsx(size, 'text-gray-400')} />
            ))}
        </div>
    )
}
