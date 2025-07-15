import { Breadcrumb, Button, PasswordInput } from '@/components'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const ResetPasswordView = () => {
    return (
        <>

            <Breadcrumb
                title="Reset your Password"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Reset your Password' },
                ]}
            />

            <div className="container m-auto section-md">

                <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-12">

                    <div className="w-full lg:w-1/2">

                        <Image width={503} height={503} src="/img/auth_image.png" alt="Auth Image" className="m-auto" />

                    </div>

                    <div className="w-full lg:w-1/2 max-w-xl m-auto">

                        <div className="pb-10 text-center space-y-3">

                            <h1 className="font-bold text-2xl">Reset your password</h1>

                            <p className="text-sm 2xl:text-base">
                                Enter a new password to regain access
                            </p>

                        </div>

                        <form className="space-y-5">

                            <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} name='password' placeholder='Password' />

                            <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} name='confirm_password' placeholder='Confirm Password' />

                            <div className="flex justify-center !pt-5">
                                <Button className='w-full' rounded='full'> Reset Password </Button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default ResetPasswordView