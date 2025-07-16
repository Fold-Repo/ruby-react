'use client'

import { Breadcrumb, CommentForm, CommentItem, Container } from '@/components'
import React from 'react'
import { BlogLayout, BlogRightSide } from './components'
import { AuthorCard } from '@/components/cards'
import { BlogBanner, PostMetaInfo, BlogImageRow, PostShareBar } from '@/components/blog'
import { CommentType } from '@/types'
import RelatedPosts from './components/RelatedPosts'

const comments: CommentType[] = [
    {
        id: 1,
        avatar: '/img/blog/author.jpg',
        name: 'Success Vincent',
        date: '1 day ago',
        message:
            'Lorem ipsum dolor sit amet consectetur. Egestas gravida nulla ullamcorper sagittis...',
        replies: [
            {
                id: 2,
                avatar: '/img/blog/author.jpg',
                name: 'Reply User',
                date: '23 hours ago',
                message:
                    'Reply content here. Nulla at ante duis diam ac maecenas facilisis erat ipsum...',
            },
        ],
    }
];
const BlogDetailsTwoView = () => {
    return (
        <>

            <Breadcrumb
                title="The Future of Fashion How Technology Transforms the Industry"
            />

            <Container>

                <div className="section-lg">

                    <BlogLayout
                        left={
                            <div className='space-y-10'>

                                {/* ========== BLOG CONTENT ============= */}
                                <div className="space-y-5">

                                    <BlogBanner imageUrl='/img/blog/5.jpg' />

                                    <PostMetaInfo
                                        author="Ruby"
                                        date="Dec 30th 2025"
                                        views="50k"
                                        comments="50k"
                                    />

                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet consectetur. Cursus odio velit diam velit velit ac non facilisis
                                        morbi. Magna nulla pharetra diam duis hendrerit dictumst. Amet dictum tortor sagittis eu vitae
                                        lacus purus volutpat ut. Sed nibh amet vitae elementum convallis nisi. Ornare a pulvinar a
                                        neque. Neque aliquam massa dignissim volutpat sed sapien laoreet ut orci. Mauris vulputate amet
                                        fermentum tincidunt. Fermentum eros quam facilisis rutrum volutpat vulputate lacus. Convallis
                                        massa senectus id enim faucibus gravida vivamus senectus. Sagittis dis orci cursus ornare in.
                                        Leo ornare mi integer pellentesque amet tellus netus. Purus non sed mollis vel accumsan eleifend
                                        iaculis in pharetra. Neque consectetur a nulla id metus.
                                        Interdum nibh sed sit in sit. Mattis ipsum egestas platea aliquet in. Suscipit et amet viverra
                                        in nulla elementum. Suspendisse egestas sed tellus tellus nunc volutpat. At amet sed aliquam
                                        cras enim donec et condimentum ultrices. Nunc nulla magna elit ac at faucibus amet rhoncus.
                                        Egestas ut dignissim vivamus posuere quam morbi risus. Vestibulum congue sed sed justo integer
                                        mi. Habitant ac sit dui bibendum tincidunt ultrices purus arcu. Et fermentum adipiscing ornare
                                        aliquet quis quisque dolor massa. Elit dolor urna purus quis. Nisi eget ultrices hendrerit
                                        vestibulum varius laoreet.
                                        Semper at posuere elit tempor nulla arcu mauris. Pretium auctor viverra nunc iaculis. Rutrum
                                        arcu vitae semper tempus maecenas. Diam mattis pellentesque et mi vitae nisi laoreet. Tortor
                                        maecenas at massa pulvinar lorem nunc eros. Faucibus tortor vulputate viverra ipsum congue nec.
                                        Orci a a nec cras maecenas purus. Cursus tempor facilisi rhoncus sed. Pellentesque vitae
                                        praesent purus tellus cursus aliquam enim.
                                        Fermentum netus aliquam tristique aliquam lacus volutpat commodo. Suspendisse mattis imperdiet
                                        enim duis. Sollicitudin a quis libero et commodo. Pharetra sit sit velit feugiat faucibus. Nulla
                                        iaculis tortor interdum nullam purus.
                                        Urna ac sed ullamcorper elementum habitant. Ac faucibus lorem massa mi pellentesque pharetra
                                        odio in. Pharetra amet placerat orci id aliquam consequat enim diam sit. Viverra lectus odio
                                        enim in suscipit gravida maecenas sodales. Viverra nec est dignissim a id amet velit risus
                                        natoque. Tempus dignissim odio sapien enim porta arcu dapibus urna. Felis fermentum in tellus
                                        purus placerat tincidunt sit id fermentum. Condimentum fringilla cursus in velit neque nibh non
                                        eu. Tortor diam eget habitant nunc lectus facilisi ac quis fermentum. Eget vel etiam adipiscing
                                        egestas. Sed tempus iaculis proin tellus elit neque sit dignissim. Lectus elementum tempor nisl
                                        adipiscing turpis sit tellus vitae pharetra. Mi aliquam nam ullamcorper pretium tincidunt felis
                                        enim mattis ut.
                                    </p>

                                    <BlogImageRow
                                        variant="trio"
                                        images={[
                                            '/img/blog/5.jpg',
                                            '/img/blog/6.jpg',
                                            '/img/blog/3.jpg',
                                        ]}
                                    />


                                    <h1 className="font-bold text-sm lg:!text-[15px]">
                                        The Ultimate Guide to the Top 5 Fashion Trends for Summer 2024
                                    </h1>

                                    <p className="text-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum accusamus blanditiis ex
                                        veritatis nemo natus cupiditate asperiores enim porro aspernatur officiis soluta nam
                                        voluptatibus maiores eius non iure perferendis commodi, aperiam libero, sed dolore deserunt
                                        illo! Delectus, veniam. Aliquam repellat consectetur porro eos pariatur blanditiis eligendi
                                        quis, rem aspernatur nihil, quo similique doloribus laborum et, eveniet nesciunt? Dolore facilis
                                        ipsa a velit alias qui fuga amet perspiciatis iusto, ullam atque, voluptates odit assumenda
                                        perferendis vero fugiat ratione dolores repellendus delectus ipsum debitis. Enim repudiandae
                                        placeat animi totam laborum, ea ullam?
                                    </p>

                                </div>

                                {/* ========== SHARE BLOG POST ============= */}
                                <PostShareBar
                                    tags={['Accessories', 'Fashion Trend']}
                                    shareData={{
                                        title: 'Fashion Forward!',
                                        text: 'You’ve got to see these fashion tips.',
                                    }}
                                />

                                {/* ========== BLOG COMMENTS ============= */}
                                <div className="space-y-5">

                                    <h1 className="font-bold text-base lg:!text-lg">
                                        Comments
                                    </h1>

                                    <div className="space-y-5">
                                        {comments.map((comment) => (
                                            <CommentItem key={comment.id} comment={comment} />
                                        ))}
                                    </div>

                                </div>


                                {/*  ========== LEAVE COMMENT ============= */}
                                <CommentForm />

                            </div>
                        }
                        right={
                            <>

                                <AuthorCard name="Mike Sam" followers="20k"
                                    bio="Lorem ipsum dolor sit amet consectetur. Pellentesque condimentum in quam tincidunt netus mi posuere aliquam. At non in mauris nam velit vitae proin rhoncus adipiscing. Nulla orci enim quis nibh egestas mi vitae. Consectetur sem dolor senectus viverra."
                                    imageUrl="/img/blog/author.jpg"
                                    onFollow={() => console.log('Followed!')}
                                />

                                <BlogRightSide />

                            </>
                        }
                    />

                    <RelatedPosts />

                </div>

            </Container>

        </>
    )
}

export default BlogDetailsTwoView