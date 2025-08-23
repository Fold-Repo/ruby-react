import { CommentItem, Dropdown, RatingBreakdown } from '@/components'
import { timeAgo } from '@/lib';
import { ProductReviewType, RatingBreakdownType } from '@/types';
import React, { useState } from 'react'

const ProductReview = ({ ratingsBreakdown, reviews, ratingAverage }:
    { ratingsBreakdown: RatingBreakdownType; reviews: ProductReviewType[]; ratingAverage: number; }) => {

    const [selectedSort, setSelectedSort] = useState('')

    const totalReviews = reviews.length;

    const breakdownArray = Object.entries(ratingsBreakdown || {}).map(
        ([star, count]) => ({
            star: Number(star),
            percentage: totalReviews ? Math.round((count / totalReviews) * 100) : 0,
        })
    ).sort((a, b) => b.star - a.star);

    return (
        <div className="space-y-5">

            <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-base md:text-lg text-gray-800 dark:text-gray-200">
                    Ruby
                </h2>

                <Dropdown
                    className="z-50"
                    label="Sort by:"
                    options={[
                        { label: 'Most Recent', value: 'recent' },
                    ]}
                    selected={selectedSort}
                    onSelect={(value) => setSelectedSort(value)}
                />
            </div>

            <RatingBreakdown
                average={ratingAverage}
                totalReviews={totalReviews}
                breakdown={breakdownArray}
            />

            <div className="space-y-5">
                <h1 className="font-bold text-sm lg:!text-base text-gray-900 dark:text-gray-100">
                    Customers Comments
                </h1>

                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <CommentItem
                            key={review.id}
                            comment={{
                                id: review.id,
                                name: review.user.name,
                                avatar: review.user.avatar || '',
                                date: timeAgo(review.createdAt),
                                message: review.comment,
                            }}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        No reviews yet.
                    </p>
                )}
            </div>

        </div>
    )
}

export default ProductReview
