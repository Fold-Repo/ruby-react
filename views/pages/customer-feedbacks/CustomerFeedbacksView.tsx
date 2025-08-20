import { Breadcrumb, Container, Pagination } from '@/components'
import React from 'react'
import { feedbacksData } from '@/data'
import FeedBackForm from './FeedBackForm'
import { FeedBackCard } from '@/components/cards'

const CustomerFeedbacksView = () => {
    return (
        <>

            <Breadcrumb
                title="Customer Feedbacks"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Customer Feedbacks' },
                ]}
            />

            <Container>

                <div className="section-lg space-y-20 text-white">

                    <div className="space-y-10">

                        <div className="text-center space-y-2">
                            <h1 className="font-bold text-lg lg:text-xl text-center text-primary">What Our Customers Are Saying</h1>
                            <p className="text-sm text-gray-400 dark:text-gray-300">
                                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                aliquet odio mattis.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                            {feedbacksData.map((feedback, index) => (
                                <FeedBackCard
                                    key={index}
                                    {...feedback}
                                />
                            ))}

                        </div>

                        <Pagination total={100} perPage={10} className="text-white" /> 

                    </div>

                    {/* ========== Send us Feedbacks ============ */}
                    <div className="bg-gray-900 p-6 rounded-xl">
                        <FeedBackForm  /> 
                    </div>

                </div>

            </Container>

        </>
    )
}

export default CustomerFeedbacksView
