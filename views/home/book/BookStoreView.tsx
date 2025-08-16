import React from 'react'
import { BookNewsLetter, BookStoreBanner } from './component'
import { Container, ServiceSection } from '@/components'
import { BookDeal, BookShopCategory, EnrichLibrary, NewReleases, RecommendedAndBestSeller } from './sections'

const BookStoreView = () => {
  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <BookStoreBanner />

      <div className="section-lg space-y-16">

        {/*  ===== DEAL OF THE DAY ===== */}
        <BookDeal />

        {/* ======== Books Recommend // Ruby Bestsellers ======= */}
        <RecommendedAndBestSeller />

        {/* ======== New Releases Are Here! ======  */}
        <NewReleases />

        {/* ============ Enrich your library today! ======== */}
        <EnrichLibrary />

        <Container>

          <div className="space-y-16">

            {/* ===== Our Shop Categories ====== */}
            <BookShopCategory />

            {/* ====== Book Newsletter  ====== */}
            <BookNewsLetter />

            {/* ===== SERVICES ====== */}
            <ServiceSection />

          </div>

        </Container>

      </div>

    </>
  )
}

export default BookStoreView