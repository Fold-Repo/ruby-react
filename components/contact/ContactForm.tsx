import React from 'react'
import { Button, Input, TextArea } from '../ui'
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid'

const ContactForm = () => {
    return (
        <form className="sm:space-y-5">

            <div className="grid sm:grid-cols-2 gap-x-5">

                <Input startContent={<UserIcon className='size-4 text-gray-600 dark:text-gray-300' />} radius='xl' name='name' placeholder='Full Name' />

                <Input type='Email' startContent={<EnvelopeIcon className='size-4 text-gray-600 dark:text-gray-300' />} radius='xl' name='email' placeholder='Email address' />

            </div>

            <TextArea className='p-5 h-52' radius='xl' placeholder='Type your message here' />

            <div className="flex justify-center !pt-2">
                <Button rounded='2xl' className="btn btn-primary max-w-xs w-full">Send Message</Button>
            </div>

        </form>
    )
}

export default ContactForm