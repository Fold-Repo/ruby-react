'use client'

import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogCard } from '@/components/cards'
import { PostType } from '@/types'
import { BlogCardSkeleton } from '@/components/skeleton'
import { usePostsQuery } from './hook'

const BlogDefaultView = () => {

    const { posts, currentPage, totalItems, limit, isLoading } = usePostsQuery({ page: 1, limit: 3 });

    return (
        <>

            <Breadcrumb
                title="Default Blog"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '#' },
                    { label: 'Default Blog' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    <BlogLayout
                        left={
                            <div className='space-y-12'>

                                <div className="flex flex-col gap-y-7">
                                    {isLoading
                                        ? Array.from({ length: 5 }).map((_, index) => (
                                            <BlogCardSkeleton key={index} variant="detailed" />
                                        ))
                                        : posts?.map((post: PostType, index: number) => (
                                            <BlogCard key={index} post={post} variant="detailed" />
                                        ))}
                                </div>

                                <Pagination initialPage={currentPage} total={totalItems || 0} perPage={limit} />

                            </div>
                        }
                        right={
                            <BlogRightSide />
                        }
                    />

                </div>

            </Container>

        </>
    )
}

export default BlogDefaultView