import { Breadcrumb, Button, Container, Input } from '@/components'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { FaDribbble, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const ComingSoonView = () => {
    return (
        <>

            <Breadcrumb
                title="Coming Soon"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Coming Soon' },
                ]}
            />

            <div className="bg-black"
                style={{
                    backgroundImage: "url('/img/coming_soon_cover.png')",
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>

                <Container>

                    <div className="max-w-xl m-auto h-[70vh] md:h-[85vh] 2xl:h-[65vh] flex flex-col justify-center text-white text-center space-y-8">

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            We're Launching Soon!
                        </h2>

                        <p className="text-[13px]">
                            Our fashion collections are almost ready. Stay tuned and be the first to know when we go live!
                        </p>

                        <form className="space-y-8">

                            <Input radius='lg' startContent={<EnvelopeIcon className='size-4' />}
                                className='!bg-transparent border border-white placeholder:text-white/60 !text-white/80'
                                type='email' name='email' placeholder='Enter email address' required />

                            <div className="flex justify-center">
                                <Button type="submit" rounded='2xl' className="hover:bg-white hover:text-black max-w-md w-full">
                                    Notify Me
                                </Button>
                            </div>
                        </form>

                        <div className="flex items-center gap-x-6 text-lg justify-center">

                            <a href="#">
                                <FaFacebookF />
                            </a>

                            <a href="#">
                                <FaLinkedinIn />
                            </a>

                            <a href="#">
                                <FaInstagram />
                            </a>

                            <a href="#">
                                <FaDribbble />
                            </a>

                        </div>

                    </div>

                </Container>

            </div>

        </>
    )
}

export default ComingSoonView