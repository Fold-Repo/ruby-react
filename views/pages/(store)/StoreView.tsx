import { Breadcrumb, ContactDetails, Container, MapLocation, SectionTitle } from '@/components'
import React from 'react'
import { storeList } from '@/data'
import { StoreCard } from '@/components/cards'

const StoreView = () => {
    return (
        <>

            <Breadcrumb
                title="Our Store Location"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Our Store Location' },
                ]}
            />

            <Container>

                <div className="section-lg !space-y-10">

                    <SectionTitle
                        title="Visit Our Stores"
                        icon="📍"
                        description="Discover Ruby in-person at one of our multiple locations across the UK. 
                        Enjoy hands-on service and the latest collections at your convenience." 
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {storeList.map((store, index) => (
                            <StoreCard key={index} {...store} />
                        ))}

                    </div>

                    <MapLocation />

                    <ContactDetails />

                </div>

            </Container>

        </>
    )
}

export default StoreView