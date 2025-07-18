'use client'

import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogListCard } from '@/components/cards'
import { usePostsQuery } from './hook'
import { BlogListCardSkeleton } from '@/components/skeleton'
import { PostType } from '@/types'

const BlogListTwoView = () => {

    const { posts = [], currentPage, totalItems, limit, isLoading } = usePostsQuery({ page: 1, limit: 3 });

    return (
        <>

            <Breadcrumb
                title="Blog List"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '#' },
                    { label: 'Blog List' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    <BlogLayout
                        left={
                            <div className='space-y-12'>

                                <div className="flex flex-col gap-y-5 max-w-4xl">

                                    {isLoading
                                        ? Array.from({ length: 5 }).map((_, index) => (
                                            <BlogListCardSkeleton key={index} />
                                        ))
                                        : posts?.map((post: PostType, index: number) => (
                                            <BlogListCard key={index} post={post} footerPosition="bottom" />
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

export default BlogListTwoView