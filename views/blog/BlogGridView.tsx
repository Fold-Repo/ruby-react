import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogCard } from '@/components/cards'
import { posts } from '@/data'

const BlogGridView = () => {

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
                                    {posts.map((post, index) => (
                                        <BlogCard key={index} post={post} variant='compact' />
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

export default BlogGridView