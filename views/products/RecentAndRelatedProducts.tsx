'use client'

import { Tab } from '@/components';
import React, { useState } from 'react'
import RecentView from './RecentView';
import RelatedProduct from './RelatedProduct';

const tabItems = [
    { key: "recent", title: "Recently Viewed" },
    { key: "related", title: "Related Product" },
];
const RecentAndRelatedProducts = ({ productId } : { productId: number | string }) => {

    const [activeTab, setActiveTab] = useState("recent");

    return (
        <>

            <Tab className='' tabs={tabItems} active={activeTab} onChange={setActiveTab} />

            {activeTab === 'recent' && <RecentView />}
            {activeTab === 'related' && <RelatedProduct productId={productId} />}

        </>
    )
}

export default RecentAndRelatedProducts