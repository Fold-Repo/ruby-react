import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { BlogListCard } from '@/components/cards'
import { posts } from '@/data'

const BlogListTwoView = () => {

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
                                    {posts.map((post, index) => (
                                        <BlogListCard key={index} post={post} footerPosition="bottom" />
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

export default BlogListTwoView