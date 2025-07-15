import { Breadcrumb, ContactDetails, ContactForm, Container, MapLocation, SectionTitle } from '@/components'
import React from 'react'

const ContactView = () => {

    return (
        <>

            <Breadcrumb
                title="Get In Touch"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Get In Touch' },
                ]}
            />

            <div className="section-lg space-y-12">

                <div className="relative flex items-center gap-10">

                    <Container>

                        <div className="relative lg:w-[70%] my-8 z-10">

                            <div className="border border-gray-300 rounded-xl p-6 lg:p-10 bg-white">

                                <div className="lg:max-w-[65%] !space-y-12">

                                    <SectionTitle
                                        title="Get in Touch"
                                        icon="📞"
                                        description="We're here to help! Whether you have a question, feedback, or just want to say hello feel free to reach out."
                                    />

                                    <ContactForm />

                                </div>

                            </div>

                        </div>

                        <MapLocation className='!w-full !h-[350px] block lg:hidden' />

                    </Container>

                    <div className="hidden lg:block w-[40%] z-10 absolute left-1/2 rounded-2xl overflow-hidden h-[80%]">
                        <MapLocation className='w-full h-full' />
                    </div>

                    <div className="hidden lg:block w-[40%] absolute right-0 h-full rounded-l-2xl !bg-[#183A4A]" />

                </div>

            </div>

        </>
    )
}

export default ContactView