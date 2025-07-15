'use client';

import Image from 'next/image';
import Link from 'next/link';
import { footerSections, footerContact, newsletterText } from '@/constants';
import { Button } from '../ui';
import Container from '../container';

const Footer = () => {
    return (
        <footer className="bg-black py-10">

            <Container>

                <div className="mb-15 m-auto relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-y-8 sm:gap-y-12 px-6 sm:px-0 z-20">

                    <div className="w-full mb-5 lg:mb-0">
                        <Link href="/">
                            <Image
                                alt="Logo"
                                src={footerContact.logo}
                                width={128}
                                height={40}
                                className="w-28"
                            />
                        </Link>

                        <div className="space-y-4 pt-8 text-xs font-medium text-white/80">
                            <p className="block">GET DIRECTION</p>
                            <a className="block" href={`mailto:${footerContact.email}`}>{footerContact.email}</a>
                            <a className="block" href={`tel:${footerContact.phone}`}>{footerContact.phone}</a>
                        </div>

                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index} className="w-full">
                            <h2 className="text-sm font-semibold text-white mb-5">{section.title}</h2>
                            <ul className="text-white/80 space-y-5 font-light list-none text-xs">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Section */}
                    <div className="w-full pt-2 col-span-2">

                        <h2 className="text-sm font-semibold text-white mb-10">Newsletter</h2>

                        <div className="flex flex-col space-y-6">

                            <p className="text-white text-xs">{newsletterText}</p>

                            <form className="relative w-full max-w-md">
                                <input type="email" required placeholder="Enter your email" className="block w-full pl-5 pr-16 py-3.5 text-xs md:text-sm !text-black bg-white rounded-full !outline-0 ring-0" />
                                <Button size='sm' type='submit' className='absolute top-1/2 -translate-y-1/2 right-1.5 !text-xs px-6 !py-2' rounded='full'>Send</Button>
                            </form>

                            <div className="flex items-start gap-2">

                                <input type="checkbox" className="size-4 text-primary !bg-transparent border-gray-300 focus:ring-white !rounded-full" />

                                <p className="text-xs text-white/80 tracking-tight">
                                    By clicking subscribe, you agree to{' '}
                                    <Link className="text-white underline" href="#">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link className="text-white underline" href="#">
                                        Privacy Policy
                                    </Link>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

            {/* Footer Bottom Bar */}
            <div className="pt-10 border-t border-gray-50">

                <Container>

                    <div className="m-auto px-5 flex justify-between items-center flex-wrap text-xs gap-y-8">

                        <div className="flex items-center gap-3 text-white">
                            <span>Payment:</span>
                            <Image
                                src="/img/payment/payment_cards.svg"
                                alt="Payment Lists"
                                width={250}
                                height={40}
                            />
                        </div>

                        <p className="text-white/70">
                            Copyright {new Date().getFullYear()}. All rights reserved
                        </p>

                    </div>

                </Container>

            </div>

        </footer>
    );
};

export default Footer;
