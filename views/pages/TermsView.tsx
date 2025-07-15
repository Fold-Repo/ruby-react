'use client'

import { Breadcrumb, Container, Tab } from '@/components'
import React, { useState } from 'react'

const tabItems = [
    { key: "terms", title: "Terms" },
    { key: "limitations", title: "Limitations" },
    { key: "revisions", title: "Revisions and Errata" },
    { key: "modifications", title: "Site Terms of Use Modifications" },
    { key: "risks", title: "Risks" },
];

const tabContent: Record<string, { title: string; content: React.JSX.Element }> = {
    terms: {
        title: "Terms",
        content: (
            <div className="space-y-4 mt-5 text-sm">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed euismod justo, sit amet
                    efficitur dui...
                </p>
                <p>
                    In malesuada neque quis libero laoreet posuere. In consequat vitae ligula quis rutrum...
                </p>
                <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi finibus tristique interdum...
                </p>
            </div>
        ),
    },
    limitations: {
        title: "Limitations",
        content: (
            <div className="space-y-4 mt-5 text-sm">
                <p>
                    Our service is subject to certain limitations based on technology, location, and legal boundaries...
                </p>
            </div>
        ),
    },
    revisions: {
        title: "Revisions and Errata",
        content: (
            <div className="space-y-4 mt-5 text-sm">
                <p>
                    Content on our site may include errors. We reserve the right to make corrections at any time...
                </p>
            </div>
        ),
    },
    modifications: {
        title: "Site Terms of Use Modifications",
        content: (
            <div className="space-y-4 mt-5 text-sm">
                <p>
                    We may modify these terms of use without prior notice. You are responsible for reviewing them periodically...
                </p>
            </div>
        ),
    },
    risks: {
        title: "Risks",
        content: (
            <div className="space-y-4 mt-5 text-sm">
                <p>
                    Usage of this site carries inherent risks, including but not limited to data loss or service outages...
                </p>
            </div>
        ),
    },
};

const TermsView = () => {

    const [activeTab, setActiveTab] = useState("terms");
    const current = tabContent[activeTab];

    return (
        <>

            <Breadcrumb
                title="Terms of use"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Terms of use' },
                ]}
            />

            <Container>

                <div className="section-lg max-w-6xl m-auto space-y-12">

                    {/*  ====== TAB ======== */}
                    <div className="bg-white-smoke rounded-lg p-3">
                        <Tab tabs={tabItems} active={activeTab} onChange={setActiveTab} />
                    </div>

                    {/*  ====== TAB CONTENT ======== */}
                    <div className="border border-black/30 p-5 rounded-lg">

                        <h2 className="text-lg font-semibold">{current.title}</h2>

                        {current.content}

                    </div>

                </div>

            </Container >

        </>
    )
}

export default TermsView