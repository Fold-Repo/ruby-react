'use client'

import React from 'react'
import { WomenBestSelling, WomenFashionBanner, WomenTopPicks, 
WomenTopBrand, CommunitySales, WomenFashionTestimonial} from './sections'
import { Container } from '@/components'

const WomenFashionView = () => {
  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <WomenFashionBanner />

      <Container>

        <div className="section-lg space-y-12">

          {/* ===== BEST SELLING ===== */}
          <WomenBestSelling />


          {/* ===== Today’s Top Picks ===== */}
          <WomenTopPicks />


          {/* ====== Top Brand ======= */}
          <WomenTopBrand />

          {/* ====== Clothe Design For You ======= */}
          <CommunitySales />

          {/* ====== Testimonials ======= */}
          <WomenFashionTestimonial />

        </div>

      </Container>

    </>
  )
}

export default WomenFashionView