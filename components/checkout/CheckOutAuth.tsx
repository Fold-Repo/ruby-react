import Link from 'next/link'
import React from 'react'
import { Button, Input, PasswordInput } from '@/components'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const CheckOutAuth = () => {
    return (
        <>

            <div className="bg-white-smoke p-3 text-sm lg:!text-base font-medium">
                <p className="text-black/50">Don’t have an account with us?{' '}
                    <Link href="/register" className="text-primary font-semibold underline">Register Here</Link>
                </p>
            </div>

            <div className="bg-white border border-black/30 rounded-xl p-5 space-y-6">

                <p className="text-black text-sm">Already have an account{' '}
                    <Link href="/login" className="font-semibold underline">Login here</Link>
                </p>

                <form action="" className="space-y-5">

                    <Input type='email' radius='xl' startContent={<EnvelopeIcon className='size-4 text-gray-500' />} 
                    name='email' placeholder='Email' />

                    <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />} 
                    name='password' placeholder='Password' />

                    <div className="flex justify-center !pt-2">
                        <Button rounded='full' className="max-w-xs w-full">Login</Button>
                    </div>

                </form>

            </div>

        </>
    )
}

export default CheckOutAuth