'use client'

import { Breadcrumb, CommentForm, CommentItem, Container } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { AuthorCard } from '@/components/cards'
import { BlogBanner, PostMetaInfo, BlogImageRow, PostShareBar } from '@/components/blog'
import { CommentType } from '@/types'
import RelatedPosts from './components/RelatedPosts'
import { useGetPostById } from '@/service'
import { notFound } from 'next/navigation'
import { AuthorCardSkeleton, BlogDetailsViewSkeleton } from '@/components/skeleton'


const BlogDetailsTwoView = () => {

    const postId = Math.floor(Math.random() * 5) + 1;
    const { response: post = {}, isLoading } = useGetPostById(postId);

    if (!post) return notFound()

    const { title, description, imageUrl, author, date, views, commentsCount, content, tags,
        shareData, galleryImages, comments } = post || {};

    return (
        <>

            <Breadcrumb
                title={title || 'Blog Details'}
            />

            <Container>

                <div className="section-lg">

                    <BlogLayout
                        left={
                            <div className='space-y-10'>

                                {isLoading ? (
                                    <BlogDetailsViewSkeleton variant='single' />
                                ) : (
                                    <>

                                        {/* ========== BLOG CONTENT ============= */}
                                        <div className="space-y-5">

                                            <BlogBanner imageUrl={imageUrl} />

                                            <PostMetaInfo
                                                author={author}
                                                date={date}
                                                views={views}
                                                comments={commentsCount}
                                            />

                                            <p className="text-sm">
                                                {content}
                                            </p>

                                            <BlogImageRow
                                                variant='trio'
                                                images={galleryImages || []}
                                            />

                                            <h1 className="font-bold text-sm lg:!text-[15px]">
                                                {title}
                                            </h1>

                                            <p className="text-sm leading-7">
                                                {description}
                                            </p>

                                        </div>

                                        {/* ========== SHARE BLOG POST ============= */}
                                        <PostShareBar
                                            tags={tags}
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
                                                {comments?.map((comment: CommentType) => (
                                                    <CommentItem key={comment.id} comment={comment} />
                                                ))}
                                            </div>

                                        </div>

                                        {/*  ========== LEAVE COMMENT ============= */}
                                        <CommentForm />

                                    </>
                                )}

                            </div>
                        }
                        right={
                            <>

                                {isLoading ? (
                                    <AuthorCardSkeleton />
                                ) : (
                                    <AuthorCard name={author} followers="20k"
                                        bio={author + ' is a fashion enthusiast and blogger.'}
                                        imageUrl="/img/blog/author.jpg"
                                        onFollow={() => console.log('Followed!')}
                                    />
                                )}

                                <BlogRightSide />

                            </>
                        }
                    />

                    <RelatedPosts postId={postId} />

                </div>

            </Container>

        </>
    )
}

export default BlogDetailsTwoView