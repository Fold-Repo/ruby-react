'use client'

import Image from 'next/image'
import { StarRating } from '@/components'
import { FeedBackType } from '@/types'

function FeedBackCard({ name, role, image, message, rating }: FeedBackType) {

    return (
        <div className="h-full flex  justify-between flex-col p-4 border rounded-xl border-gray-300 space-y-3">

            <StarRating value={rating} />

            <p className="text-sm text-slate-500">{message}</p>

            <div className="flex items-center gap-x-2">

                <Image src={image} width={40} height={40} alt={name} className="rounded-full object-cover" />

                <div>
                    <h2 className="text-sm text-slate-800 font-bold">{name}</h2>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>

            </div>

        </div>
    )
}


export default FeedBackCard