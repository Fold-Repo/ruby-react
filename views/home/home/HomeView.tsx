import { Container, ServiceSection } from '@/components'
import React from 'react'
import { HomeBanner } from './components'
import { FeaturedBrand, FlashSales, NewArrival, TestimonialSection, TopCategory } from './sections'

const HomeView = () => {
    return (
        <>

            {/* ===== HERO BANNER ===== */}
            <HomeBanner />

            <Container>

                <div className="section-lg space-y-12">

                    {/* ===== Flash Sales ===== */}
                    <FlashSales />

                    {/* ===== New Arrival ===== */}
                    <NewArrival />

                    {/* ===== Top Categories ===== */}
                    <TopCategory />

                    {/* ===== Featured Brand===== */}
                    <FeaturedBrand />

                    {/* ===== Testimonials===== */}
                    <TestimonialSection />

                    {/* ======= SERVICES ======= */}
                    <ServiceSection />

                </div>

            </Container>

        </>
    )
}

export default HomeView