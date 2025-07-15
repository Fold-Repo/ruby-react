import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { PasswordInput } from '../ui'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const SecurityInfo = () => {
    return (
        <div className="border border-gray-400 p-5 rounded-xl space-y-5">

            <div className="flex items-center gap-3 justify-between">

                <h2 className="text-gray-800 text-base font-bold">Security</h2>

                <button className="inline-flex items-center gap-1 text-primary font-medium text-sm cursor-pointer">
                    <PencilIcon className='size-4' />
                    <span className="underline">Edit</span>
                </button>

            </div>

            <div className="grid grid-cols-1 gap-4">

                <PasswordInput radius='xl' startContent={<LockClosedIcon  className='size-4 text-gray-500' />}
                    name='password' placeholder='Password' />

                <PasswordInput radius='xl' startContent={<LockClosedIcon  className='size-4 text-gray-500' />}
                    name='new_password' placeholder='New Password' />

                <PasswordInput radius='xl' startContent={<LockClosedIcon className='size-4 text-gray-500' />}
                    name='confirm_password' placeholder='Confirm Password' />

            </div>

        </div>
    )
}

export default SecurityInfo