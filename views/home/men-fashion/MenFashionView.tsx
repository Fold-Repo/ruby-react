'use client'

import { Container, ServiceSection } from '@/components'
import React from 'react'
import { MenFashionBanner } from './components'
import { MenComingSoonProducts, MenFashionCategories, MenNewCollection, NewWeek } from './sections'

const MenFashionView = () => {
  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <MenFashionBanner />

      <Container>

        <div className="section-lg space-y-12">

          {/* ==== CATEGORIES ==== */}
          <MenFashionCategories />

          {/* ===== NEW COLLECTION ==== */}
          <MenNewCollection />

          {/* ==== NEW WEEK ==== */}
          <NewWeek />

          {/* ==== COMING SOON ==== */}
          <MenComingSoonProducts />

          {/* ======= SERVICES ======= */}
          <ServiceSection />

        </div>

      </Container>

    </>
  )
}

export default MenFashionView