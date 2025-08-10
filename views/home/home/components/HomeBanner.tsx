import { Button, Container } from '@/components'
import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
    return (
        <section className="overflow-hidden relative">

            <div className="relative !h-[50vh] xl:!h-[90vh]">

                <img className="w-full h-full object-cover object-bottom" src="/img/banner/home_page.png"
                    alt="home" />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                    <Container>

                        <div className="text-white text-center mx-auto max-w-4xl space-y-5">

                            <h1 className="fade-item fade-item-1 text-3xl sm:!text-5xl 2xl:!text-6xl/18 font-semibold">
                                Find Your Signature style
                            </h1>

                            <p className="max-w-2xl mx-auto text-sm md:text-base leading-7">
                                Discover hand-picked sneakers, apparel, and accessories that bring comfort,
                                confidence, and style to your everyday look. Whether it’s the latest drops or timeless classics,
                                we’ve got your next favorite piece waiting.
                            </p>

                            <Link href="/shop/shop_features/shop_collection" className='flex items-center justify-center'>
                                <Button className="px-12 !rounded-full">
                                    Explore Collection
                                </Button>
                            </Link>

                        </div>

                    </Container>

                </div>

            </div>

        </section>
    )
}

export default HomeBanner