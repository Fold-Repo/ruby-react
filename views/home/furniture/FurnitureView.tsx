import React from 'react'
import { DiscountBanner, FurnitureBanner } from './components'
import { Container, ServiceSection } from '@/components'
import { BestSellingFurniture, ExploreCollection, ExploreProducts, HappyCustomer, WhatMakeUsDifferent } from './sections'

const FurnitureView = () => {
  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <FurnitureBanner />

      <div className="section-lg space-y-20">

        {/*  ======== Explore Our Collections ========== */}
        <ExploreCollection />


        {/* ======== Best - Selling Furnitures ==========  */}
        <BestSellingFurniture />


        {/* ======== Explore Our Products ======== */}
        <ExploreProducts />


        {/* ======== What make us different ======== */}
        <WhatMakeUsDifferent />

        <Container>

          <div className="space-y-20">

            {/*  ======== Client’s Success Stories ========== */}
            <HappyCustomer />

            {/*  ======== Weekend Discount ========= */}
            <DiscountBanner />

            {/*  ===== SERVICES ======  */}
            <ServiceSection />

          </div>

        </Container>

      </div>

    </>
  )
}

export default FurnitureView