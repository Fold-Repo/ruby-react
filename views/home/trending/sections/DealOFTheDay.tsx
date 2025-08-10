import { SectionHeader, Tab } from '@/components'
import React, { useState } from 'react'
import { FashionNewArrivalCard } from '../components';
import { SwiperCarousel, SwiperDots, SwiperSlide } from '@/components/carousel';
import { ProductType } from '@/types';
import { ProductCardThree } from '@/components/cards';
import { useProductQuery } from '@/service';
import { ProductCardThreeSkeleton } from '@/components/skeleton';

const tabItems = [
    { key: "featured", title: "Featured" },
    { key: "popular", title: "Popular" },
];
const DealOFTheDay = () => {

    const [activeTab, setActiveTab] = useState("featured");
    const { products, isLoading } = useProductQuery({
        page: 1,
        limit: 10,
        type: activeTab,
    })

    return (
        <div className="space-y-6">

            {/* TAB & SECTION HEADER */}
            <div className="flex items-center gap-3 justify-between">

                <SectionHeader title="Deal Of the day" />

                <Tab tabs={tabItems} active={activeTab} onChange={setActiveTab} />

            </div>

            {/* ITEMS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-5 tab-content-container">

                <div className="lg:col-span-3">
                    <FashionNewArrivalCard />
                </div>

                <div className="lg:col-span-9">

                    <SwiperCarousel
                        mobile={1} sm={2} md={2} lg={3} xl={4}
                        space={10} spaceMd={20} spaceLg={20}
                        loop={false} centered={false}
                        group={1} groupMd={2} groupLg={3} groupXl={3}
                        paginationClass=".sw-pagination-deal">

                        {isLoading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <SwiperSlide key={i}>
                                    <ProductCardThreeSkeleton />
                                </SwiperSlide>
                            ))
                            : products?.map((product: ProductType, index: number) => (
                                <SwiperSlide key={index}>
                                    <ProductCardThree product={product} />
                                </SwiperSlide>
                            ))}

                        <SwiperDots className="pt-2 sw-pagination-deal" />

                    </SwiperCarousel>

                </div>

            </div>

        </div>
    )
}

export default DealOFTheDay