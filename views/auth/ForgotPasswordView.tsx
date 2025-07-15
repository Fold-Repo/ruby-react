import { Breadcrumb, Button, Input, PasswordInput } from '@/components'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ForgotPasswordView = () => {
    return (
        <>

            <Breadcrumb
                title="Forgot your Password"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Forgot your Password' },
                ]}
            />

            <div className="container m-auto section-md">

                <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-12">

                    <div className="w-full lg:w-1/2">

                        <Image width={503} height={503} src="/img/auth_image.png" alt="Auth Image" className="m-auto" />

                    </div>

                    <div className="w-full lg:w-1/2 max-w-xl m-auto">

                        <div className="pb-10 text-center space-y-3">

                            <h1 className="font-bold text-2xl">Forgot your Password</h1>

                            <p className="text-sm 2xl:text-base">
                                We will send you an email to reset your password
                            </p>

                        </div>

                        <form className="space-y-5">

                            <Input type='email' radius='xl' startContent={<EnvelopeIcon className='size-4 text-gray-500' />} name='email' placeholder='Email' />

                            <div className="flex justify-center !pt-5">
                                <Button className='w-full' rounded='full'> Submit </Button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ForgotPasswordView