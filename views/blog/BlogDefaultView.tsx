import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogCard } from '@/components/cards'
import { posts } from '@/data'

const BlogDefaultView = () => {

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
                                    {posts.map((post, index) => (
                                        <BlogCard key={index} post={post} variant="detailed" />
                                    ))}
                                </div>

                                <Pagination total={100} perPage={10} />

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