'use client'

import { Breadcrumb, CommentForm, CommentItem, Container } from '@/components'
import React from 'react'
import { BlogBanner, PostMetaInfo, BlogImageRow, PostShareBar } from '@/components/blog'
import RelatedPosts from './components/RelatedPosts'
import { posts } from '@/data'
import { notFound } from 'next/navigation'


const BlogDetailsTwoView = ({ postId }: { postId: number | string }) => {

    const post = posts.find(post => post.id == postId)

    if (!post) return notFound()

    const { title, description, imageUrl, imageUrlRight, author, date, views, commentsCount, content, tags, 
    shareData, galleryImages, comments } = post;

    return (
        <>

            <Breadcrumb
                title={title}
            />

            <Container>

                <div className="section-lg space-y-8">

                    <BlogBanner variant='split' imageUrl={imageUrl} imageUrlRight={imageUrlRight} />

                    <div className="space-y-8 max-w-7xl m-auto">

                        <PostMetaInfo
                            author={author}
                            date={date}
                            views={views}
                            comments={commentsCount}
                        />

                        <p className="text-sm">
                            { content }
                        </p>

                        <BlogImageRow
                            variant="quad"
                            images={galleryImages || []}
                        />

                        <h1 className="font-bold text-sm lg:!text-[15px]">
                            { title }
                        </h1>

                        <p className="text-sm">
                            { description }
                        </p>

                    </div>

                    <div className="space-y-8 max-w-7xl m-auto pt-20">

                        {/* ========== SHARE BLOG POST ============= */}
                        <PostShareBar
                            tags={['Accessories', 'Fashion Trend']}
                            shareData={{
                                title: shareData?.title || title,
                                text: shareData?.text || description,
                            }}
                        />

                        {/* ========== BLOG COMMENTS ============= */}
                        <div className="space-y-5">

                            <h1 className="font-bold text-base lg:!text-lg">
                                Comments
                            </h1>

                            <div className="space-y-5">
                                {comments?.map((comment) => (
                                    <CommentItem key={comment.id} comment={comment} />
                                ))}
                            </div>

                        </div>

                        {/*  ========== LEAVE COMMENT ============= */}
                        <CommentForm />

                    </div>

                    <RelatedPosts />

                </div>

            </Container>

        </>
    )
}

export default BlogDetailsTwoView