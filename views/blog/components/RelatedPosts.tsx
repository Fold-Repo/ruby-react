import { BlogCard } from '@/components/cards'
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel'
import { posts } from '@/data'
import React from 'react'

const RelatedPosts = () => {
    return (
        <div className="mt-20 overflow-hidden">

            <div className="max-w-xl m-auto text-center space-y-2 mb-12">
                <h1 className="font-bold text-base lg:text-lg">Related Blog</h1>
                <p className="text-sm">Discover the Hottest Fashion News and Trends Straight from the Runway</p>
            </div>

            <SwiperCarousel mobile={1} sm={2} md={2} lg={3} xl={3}
                space={10} spaceMd={20} spaceLg={20}
                loop={true} centered={false}
                group={1} groupMd={2} groupLg={3} groupXl={3}
                paginationClass=".sw-pagination-post">
                {posts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <BlogCard key={index} post={post} variant='compact' />
                    </SwiperSlide>
                ))}

                <SwiperDots className="pt-5 sw-pagination-post" />

            </SwiperCarousel>

        </div>
    )
}

export default RelatedPosts