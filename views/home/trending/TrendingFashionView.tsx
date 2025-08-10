'use client'

import React from 'react'
import { ServiceFeatureCard, TrendingFashionBanner, TrendingFashionCard, TrendingFashionCardTwo } from './components'
import { Container, SectionHeader } from '@/components'
import { DealOFTheDay, NewArrivalProducts, TrendingFashionCategories } from './sections'
import { useGetTrendFashionCategory } from '@/service'
import { TrendingFashionType } from '@/types'
import { TrendingFashionCardSkeleton } from '@/components/skeleton'

const TrendingFashionView = () => {

  const { categories, loadingCat } = useGetTrendFashionCategory()

  return (
    <>

      {/* ===== HERO BANNER ===== */}
      <TrendingFashionBanner />

      <Container>

        <div className="section-lg space-y-14">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {loadingCat
              ? Array(8)
                .fill(0)
                .map((_, index) => <TrendingFashionCardSkeleton key={index} />)
              : categories?.map((item: TrendingFashionType, index: number) => (
                <TrendingFashionCard key={index} item={item} />
              ))}
          </div>

          {/* ===== CATEGORIES ===== */}
          <TrendingFashionCategories />


          {/* ===== Deal Of the day ===== */}
          <DealOFTheDay />

          {/* ====== New Arrival ======= */}
          <div className="space-y-6">

            <NewArrivalProducts />

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <TrendingFashionCardTwo
              image="/img/home/trending/2.png"
              title="Clothing"
              description="From casual essentials to statement pieces — redefine your style with our trending apparel."
            />

            <TrendingFashionCardTwo
              image="/img/home/trending/3.png"
              title="Shoes & Accessories"
              description="Step up your look with fashion-forward footwear and accessories made to complement every outfit."
            />


          </div>

          {/* SERVICES */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                <ServiceFeatureCard
                  icon="/icon/service.png"
                  title="Customer Services"
                  description="Top notch customer service"
                  iconWidth="w-14"
                />

                <ServiceFeatureCard
                  icon="/icon/home.png"
                  title="Pickup At Any Store"
                  description="Free shipping on orders over $50"
                />

                <ServiceFeatureCard
                  icon="/icon/card.png"
                  title="Secured Payment"
                  description="We accept all major credit cards"
                />

                <ServiceFeatureCard
                  icon="/icon/return.png"
                  title="Free Returns"
                  description="30 days free return policy"
                />

          </div>

        </div>

      </Container>

    </>
  )
}

export default TrendingFashionView