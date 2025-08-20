import { Accordion, Breadcrumb, Button, Container, Input, TextArea } from '@/components'
import { faqData } from '@/constants'
import React from 'react'

const FaqView = () => {
    return (
        <>

            <Breadcrumb
                title="Frequently Asked Questions"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Forgot your FAQs' },
                ]}
            />

            <Container>

                <div className="section-lg space-y-16">

                    <div className='space-y-5'>
                        {faqData.map((faq, index) => (
                            <Accordion defaultOpen={index  === 1} key={index} title={faq.title}>
                                <p className="leading-7">{faq.content}</p>
                            </Accordion>
                        ))}
                    </div>

                    {/* ========== ASK QUESTIONS ============ */}
                    <div className="max-w-5xl m-auto space-y-6">

                        <h1 className="font-bold text-lg lg:text-xl text-center">Frequently Asked Questions</h1>

                        <form className="sm:space-y-5">

                            <div className="grid sm:grid-cols-2 gap-x-5">

                                <Input radius='xl' name='name' placeholder='Full Name' />

                                <Input radius='xl' name='help' placeholder='How can we be of help?' />

                            </div>

                            <TextArea className='p-5 h-52' radius='xl' placeholder='Type your message here' />

                            <div className="flex justify-center !pt-2">
                                <Button rounded='2xl' className="max-w-xs w-full">Send Request</Button>
                            </div>

                        </form>

                    </div>

                </div>

            </Container >

        </>
    )
}

export default FaqView