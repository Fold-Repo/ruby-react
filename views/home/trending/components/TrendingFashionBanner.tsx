import { Container } from '@/components'
import React from 'react'

const TrendingFashionBanner = () => {
    return (
        <section className="overflow-hidden relative bg-[#EFF2F7] dark:bg-gray-900">

            <div className="relative">

                <img
                    className="w-full h-full object-cover object-top"
                    src="/img/banner/trending_2.png"
                    alt="Trending"
                />

                <div className="absolute inset-0 bg-white/40 md:bg-white/5 dark:bg-black/30"></div>

                <div className="absolute inset-0 flex items-center justify-end">

                    <Container>

                        <div className="text-black dark:text-white space-y-3 lg:space-y-4">

                            <h1 className="fade-item fade-item-1 text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                                New Trending <br /> Fashion
                            </h1>

                        </div>

                    </Container>

                </div>

            </div>

        </section>
    )
}

export default TrendingFashionBanner
