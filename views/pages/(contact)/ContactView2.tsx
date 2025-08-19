import { Breadcrumb, ContactDetails, ContactForm, Container, MapLocation, SectionTitle } from '@/components'
import React from 'react'

const ContactView2 = () => {

    return (
        <>

            <Breadcrumb
                title="Get In Touch"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Get In Touch' },
                ]}
            />

            <Container>

                <div className="section-lg !space-y-12">

                    <MapLocation className='h-[350px] lg:h-[400px]' />

                    <ContactDetails />

                    <div className="max-w-5xl mx-auto !space-y-10">

                        <SectionTitle
                            title="Get in Touch"
                            icon="📞"
                            description="We're here to help! Whether you have a question, feedback, or just want to say hello feel free to reach out."
                        />

                        <ContactForm />

                    </div>

                </div>

            </Container>

        </>
    )
}

export default ContactView2