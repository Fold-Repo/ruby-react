import React from 'react'

const AboutStat = () => {
    return (
        <div className="gradient-black-red-black p-5 md:p-10 py-10 md:py-16 rounded-xl text-white text-center text-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col gap-y-1">
                    <h2 className="text-2xl xl:text-3xl font-extrabold">30K</h2>
                    <p>Daily Visitors</p>
                </div>

                <div className="flex flex-col gap-y-1">
                    <h2 className="text-2xl xl:text-3xl font-extrabold">30K</h2>
                    <p>Email Subscribers</p>
                </div>

                <div className="flex flex-col gap-y-1">
                    <h2 className="text-2xl xl:text-3xl font-extrabold">30K</h2>
                    <p>Daily Customers</p>
                </div>

                <div className="flex flex-col gap-y-1">
                    <h2 className="text-2xl xl:text-3xl font-extrabold">30K</h2>
                    <p>Customer Satisfaction</p>
                </div>
            </div>
        </div>
    )
}

export default AboutStat