import { Container, ServiceSection } from '@/components'
import React from 'react'
import { ElectBanner, ElectCategory, ElectronicBrands } from './components'
import { ElectHighlights, ElectronicSaveUp, ElectTodayPicks, ElectTopCategories, ElectTrendingProducts, OurTopProducts, SundayDiscountBanner } from './sections'

const ElectronicView = () => {
  return (
    <Container>

      {/* ===== HERO BANNER ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-8">

        <div className="col-span-1 lg:col-span-9">
            <ElectBanner />
        </div>

        <div className="col-span-1 lg:col-span-3">
            <ElectCategory />
        </div>

      </div>

      <div className="section-md space-y-12">

        {/* ===== BRANDS ====== */}
        <ElectronicBrands />

        {/* ===== Trending Products ====== */}
        <ElectTrendingProducts />

        {/* ===== Save Up / Studio Display ====== */}
        <ElectronicSaveUp />

        {/* ===== Top Categories ======  */}
        <ElectTopCategories />

        {/*  ===== Get every sunday 40% discount ====== */}
        <SundayDiscountBanner />

        {/* ===== Today’s picks ====== */}
        <ElectTodayPicks />

        {/* ===== New Products / Featured products / Best of the week / Popular In category ====== */}
        <ElectHighlights />

        {/* ===== Our Top Product’s ====== */}
        <OurTopProducts />

        {/* ===== SERVICES ====== */}
        <ServiceSection />

      </div>

    </Container>
  )
}

export default ElectronicView