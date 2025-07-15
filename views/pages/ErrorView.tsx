import { Button, Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ErrorView = () => {
    return (
        <Container>

            <div className="section-lg">

                <div className="max-w-xl m-auto text-center">

                    <Image width={339} height={339} src="/img/404.gif" alt="404" className="w-72 md:w-80 m-auto" 
                    unoptimized />

                        <div className="space-y-2 mt-6">

                            <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                                Oops <br />
                                it seems you follow backlink
                            </h2>

                            <Link href="/" className="flex justify-center pt-5">
                                <Button rounded='xl' className="w-full">
                                    Back To Home
                                </Button>
                            </Link>

                        </div>

                </div>

            </div>

        </Container>
    )
}

export default ErrorView