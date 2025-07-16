import { LatestBlogCard } from '@/components/cards'
import { latestBlogPosts } from '@/data'
import React from 'react'

const LatestPublication = () => {
    return (
        <div className="border border-gray-300 p-3 rounded-lg space-y-3">

            <h1 className="font-semibold text-sm lg:text-base text-primary pb-3 border-b border-gray-300">
                Latest Publication
            </h1>

            {/* ====== BLOG ITEMS ===== */}
            <div className="divide-y divide-gray-300 ">

                {latestBlogPosts.map((item, index) => (
                    <LatestBlogCard key={index} post={item} />
                ))}

            </div>

        </div>
    )
}

export default LatestPublication