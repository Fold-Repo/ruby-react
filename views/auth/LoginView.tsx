import { Breadcrumb, Button, Checkbox, Input, PasswordInput } from '@/components'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const LoginView = () => {
    return (
        <>

            <Breadcrumb
                title="Login to Account"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Login to Account' },
                ]}
            />

            <div className="container m-auto section-md">

                <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-12">

                    <div className="w-full lg:w-1/2">

                        <div className="text-center flex items-center justify-center flex-col space-y-4">

                            <h1 className="font-bold text-2xl 2xl:text-3xl ">Welcome Back!</h1>

                            <p className="text-sm 2xl:!text-base">To keep connected with us please login with your personal info</p>

                            <Link href="/register">
                                <Button size='sm' type='button' className='px-16' rounded='full' variant='outline_primary'>Sign Up</Button>
                            </Link>

                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 max-w-xl m-auto">

                        <form className="space-y-6">

                            <Input type='email' radius='xl' startContent={<EnvelopeIcon className='size-4 text-gray-500' />} name='email' placeholder='Email' />

                            <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} name='password' placeholder='Password' />

                            <div className="flex items-center justify-between px-2">

                                <Checkbox label='Remember me' labelClassName='text-black/70' />

                                <Link className="text-black underline text-sm" href="/forgot-password">Forget password?</Link>

                            </div>

                            <div className="flex justify-center !pt-5">
                                <Button className='w-full' rounded='full'> Sign In </Button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default LoginView