'use client'

import { Breadcrumb, Container, ServiceSection, Tab } from '@/components'
import { aboutTabContent } from '@/data';
import Image from 'next/image'
import React, { useState } from 'react'
import AboutStat from './AboutStat';
import OurTeam from './OurTeam';
import CustomerReview from './CustomerReview';

const tabItems = [
    { key: "intro", title: "Introduction" },
    { key: "vision", title: "Our Vision" },
    { key: "apart", title: "What sets us Apart" },
    { key: "commitment", title: "Our Commitment" },
];

const AboutView = () => {

    const [activeTab, setActiveTab] = useState("intro");
    const current = aboutTabContent[activeTab];

    return (
        <>

            <Breadcrumb
                title="About Us"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'About Our Store' },
                ]}
            />

            <Container>

                <div className="section-lg space-y-12">

                    {/* ====== ABOUT BANNER ======== */}
                    <Image src="/img/about_banner.jpg" alt="About Banner" width={1200}
                        height={350} className="w-full rounded-xl h-[300px] 2xl:h-[350px] object-cover"
                        priority />

                    {/*  ========= ABOUT TAB ========== */}
                    <div className="max-w-6xl mx-auto space-y-10">

                        <Tab className='!justify-between' tabs={tabItems} active={activeTab} onChange={setActiveTab} />

                        <div className="text-sm leading-7">
                            {current}
                        </div>

                    </div>

                    {/*  ========= STATS VALUES =======  */}
                    <AboutStat />

                    {/* ======= OUR TEAM ======= */}
                    <OurTeam />

                    {/* ======= CUSTOMER REVIEWS ======= */}
                    <CustomerReview />

                    {/* ======= SERVICES ======= */}
                    <ServiceSection />

                </div>

            </Container>

        </>
    )
}

export default AboutView