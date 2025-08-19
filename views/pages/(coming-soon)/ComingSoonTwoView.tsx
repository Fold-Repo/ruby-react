'use client'

import { Breadcrumb, Container } from '@/components'
import { useCountdown } from '@/hooks';
import { formatDigits } from '@/utils';
import React from 'react'
import { FaDribbble, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const ComingSoonTwoView = () => {

    const { days, hours, minutes, seconds } = useCountdown('2028-08-01T12:00:00');

    const [d1, d2] = formatDigits(days);
    const [h1, h2] = formatDigits(hours);
    const [m1, m2] = formatDigits(minutes);
    const [s1, s2] = formatDigits(seconds);

    return (
        <>

            <Breadcrumb
                title="Coming Soon"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'Coming Soon' },
                ]}
            />

            <div className="bg-black dark:bg-gray-900 relative"
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

                        {/* ======== TIMING ======== */}
                        <div className="flex gap-6 flex-wrap justify-center">

                            <TimeUnit label="DAYS" digits={[d1, d2]} />
                            <TimeUnit label="HOURS" digits={[h1, h2]} />
                            <TimeUnit label="MINUTES" digits={[m1, m2]} />
                            <TimeUnit label="SECONDS" digits={[s1, s2]} />

                        </div>

                        <p className="text-[13px] text-white/80">
                            Stay tuned and be the first to know when we go live!
                        </p>

                        <form className="relative w-full">

                            <input type="email" required placeholder="Enter your email"
                                className="block w-full pl-5 pr-36 h-12 text-xs md:text-sm text-black dark:text-white bg-white dark:bg-gray-800 rounded-xl outline-none placeholder:text-black/50 dark:placeholder:text-white/50" />

                            <button type="submit"
                                className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 bg-primary text-white rounded-r-xl text-xs px-10 h-12 hover:bg-white hover:text-black transition-colors duration-300">
                                Notify Me
                            </button>

                        </form>

                        <div className="flex items-center gap-x-6 text-lg justify-center text-white/80">
                            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
                            <a href="#" className="hover:text-white transition-colors"><FaDribbble /></a>
                        </div>

                    </div>

                </Container>

            </div>

        </>
    )
}

const TimeUnit = ({ label, digits }: { label: string; digits: [string, string] }) => (
    <div className="flex flex-col items-center">
        <div className="flex gap-1">
            <div className="digit-box bg-white text-black dark:bg-gray-800 dark:text-white">{digits[0]}</div>
            <div className="digit-box bg-white text-black dark:bg-gray-800 dark:text-white">{digits[1]}</div>
        </div>
        <span className="mt-2 text-sm sm:text-base text-white/80">{label}</span>
    </div>
);

export default ComingSoonTwoView
