import React from 'react'
import { BeautySkinBanner } from './components'
import { Container, ServiceSection } from '@/components'
import { ClientSuccessStories, ShopByType, TodaysTopPick, UnbeatableBeauty } from './sections'

const BeautySkinView = () => {
  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <BeautySkinBanner />

      <Container>

        <div className="section-lg space-y-14">

          {/* ======== Shop By Product Type ==========  */}
          <ShopByType />

          {/* ======== Today's Top Picks ==========  */}
          <TodaysTopPick />

          {/* ======== Unbeatable Beauty Deals ==========  */}
          <UnbeatableBeauty />

          {/* ======== Client’s Success Stories ==========  */}
          <ClientSuccessStories />

          {/*  ===== SERVICES ======  */}
          <ServiceSection />

        </div>

      </Container>

    </>
  )
}

export default BeautySkinView