import { LatestBlogCard } from '@/components/cards'
import { LatestBlogCardSkeleton } from '@/components/skeleton'
import { useGetPosts } from '@/service'
import { PostType } from '@/types'
import React from 'react'

const LatestPublication = () => {

    const { response, isLoading } = useGetPosts({ latest: true })
    const { data: post } = response || {}

    return (
        <div className="border border-gray-300 p-3 rounded-lg space-y-3">

            <h1 className="font-semibold text-sm lg:text-base text-primary pb-3 border-b border-gray-300">
                Latest Publication
            </h1>

            {/* ====== BLOG ITEMS ===== */}
            <div className="divide-y divide-gray-300 ">

                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <LatestBlogCardSkeleton key={index} />
                    ))
                    : post?.map((item: PostType, index: number) => (
                        <LatestBlogCard key={index} post={item} />
                    ))}

            </div>

        </div>
    )
}

export default LatestPublication