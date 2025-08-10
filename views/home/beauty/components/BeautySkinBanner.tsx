import { Button, Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BeautySkinBanner = () => {
    return (
        <section className="relative w-full bg-[#CE5858AB] text-white overflow-hidden h-[50vh] md:h-[70vh] xl:h-[calc(100vh_-_100px)]">

            <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">

                <Container>

                    <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center h-full space-y-4 md:space-y-6 lg:space-y-8">

                        <h1 className="text-4xl sm:!text-5xl md:!text-6xl xl:!text-7xl 2xl:!text-8xl font-medium font-oleo !leading-tighter">
                            Be comfortable in your skin
                        </h1>

                        <p className="text-sm sm:!text-base md:!text-lg">
                            How you care for your skin can greatly affect your appearance
                        </p>

                        <Link href='/shop/shop_features/shop_collection'>
                            <Button variant='white' className="max-w-max mx-auto lg:mx-0 px-12 !rounded-full">
                                Explore Collection
                            </Button>
                        </Link>

                    </div>

                </Container>

            </div>

            <div className="hidden lg:flex absolute top-0 right-0 w-1/2 h-full items-center justify-end z-0">
                <Image width={800} height={900} priority src="/img/banner/skin_care.png" alt="Facial"
                    className="h-[90%] object-contain object-center" />
            </div>

        </section>
    )
}

export default BeautySkinBanner