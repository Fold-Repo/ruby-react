import { Breadcrumb, Button, Checkbox, Input, PasswordInput } from '@/components'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const RegisterView = () => {
    return (
        <>

            <Breadcrumb
                title="Create an Account"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Create an Account' },
                ]}
            />

            <div className="container m-auto section-md">

                <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-12">

                    <div className="w-full lg:w-1/2">

                        <div className="text-center flex items-center justify-center flex-col space-y-4">

                            <h1 className="font-bold text-2xl 2xl:text-3xl ">Hello, Friend</h1>

                            <p className="text-sm 2xl:!text-base">Enter your personal datails and start journey with us</p>

                            <Link href="/login">
                                <Button size='sm' type='button' className='px-16' rounded='full' variant='outline_primary'>Sign In</Button>
                            </Link>

                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 max-w-xl m-auto">

                        <form className="space-y-6">

                            <Input type='text' radius='xl' startContent={<UserIcon className='size-4 text-gray-500' />} name='email' placeholder='Email' />

                            <Input type='email' radius='xl' startContent={<EnvelopeIcon className='size-4 text-gray-500' />} name='email' placeholder='Email' />

                            <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} name='password' placeholder='Password' />

                            <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} name='confirm_password' placeholder='Confirm Password' />

                            <div className="flex justify-center !pt-5">
                                <Button className='w-full' rounded='full'> Sign Up </Button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default RegisterView