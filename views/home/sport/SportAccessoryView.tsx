import React from 'react'
import { SportBanner } from './components'
import { ApparelSection, CheckoutInstagram, LatestSneaker, OtherProductCategories, SportTestimonial, TopPicksSection } from './sections'
import Image from 'next/image'
import { Container, ServiceSection } from '@/components'

const SportAccessoryView = () => {
  return (
    <>

      {/* ======= HERO BANNER ======== */}
      <SportBanner />

      <div className="section-lg space-y-16">

        {/* ======= TOP PICKS ======== */}
        <TopPicksSection />

        {/* ======== Sport Gallery ======= */}
        <div className="grid grid-cols-12 gap-3 md:gap-5 overflow-hidden">

          <div className="col-span-2 h-[250px] md:h-[350px] relative">
            <Image
              src="/img/home/sport/4.jpg"
              alt="Sport"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="col-span-7 h-[250px] md:h-[350px] relative">
            <Image
              src="/img/home/sport/5.jpg"
              alt="Sport"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="col-span-3 h-[250px] md:h-[350px] relative">
            <Image
              src="/img/home/sport/6.jpg"
              alt="Sport"
              layout="fill"
              objectFit="cover"
            />
          </div>

        </div>

        {/* ======== Apparel ========= */}
        <ApparelSection />

        {/* ======== LATEST SNEAKER ========= */}
        <LatestSneaker />

        {/*  ======== Top Sneaker / Running Sneaker / Chunky Sneaker ======= */}
        <OtherProductCategories />

        {/* ======= CLIENTS ======= */}
        <div className="relative h-[200px] md:h-[250px] bg-[url('/img/home/sport/18.jpg')] bg-cover bg-center bg-no-repeat">

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl md:!text-3xl font-bold text-center">
              What Our Clients Say About Us
            </h2>
          </div>

        </div>

        <Container>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-12">

            <div className="col-span-12 xl:col-span-9 2xl:col-span-10">

              {/* ======== Testimonial ======= */}
              <SportTestimonial />

              {/* ======== Check us on Instagram==========  */}
              <CheckoutInstagram />

            </div>

            {/* ===== SERVICES ===== */}
            <div className="col-span-12 xl:col-span-3 2xl:col-span-2">
                <ServiceSection layout='col' />
            </div>

          </div>

        </Container>


      </div>

    </>
  )
}

export default SportAccessoryView