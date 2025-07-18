'use client'

import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogCard } from '@/components/cards'
import { usePostsQuery } from './hook'
import { PostType } from '@/types'
import { BlogCardSkeleton } from '@/components/skeleton'

const BlogGridView = () => {

    const { posts = [], currentPage, totalItems, limit, isLoading } = usePostsQuery({ page: 1, limit: 4 });

    return (
        <>

            <Breadcrumb
                title="Blog Grid"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog', href: '#' },
                    { label: 'Blog Grid' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    <BlogLayout
                        left={
                            <div className='space-y-12'>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {isLoading
                                        ? Array.from({ length: 6 }).map((_, index) => (
                                            <BlogCardSkeleton key={index} variant='compact' />
                                        ))
                                        : posts?.map((post: PostType, index: number) => (
                                            <BlogCard key={index} post={post} variant='compact' />
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

export default BlogGridView