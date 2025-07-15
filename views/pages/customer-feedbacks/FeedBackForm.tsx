import { Button, Input, TextArea } from '@/components'
import React from 'react'

const FeedBackForm = () => {
    return (
        <div className="max-w-5xl m-auto space-y-6">

            <h1 className="font-bold text-lg lg:text-xl text-center">Send us Feedbacks</h1>

            <form className="sm:space-y-5">

                <div className="grid sm:grid-cols-2 gap-x-5">

                    <Input radius='xl' name='name' placeholder='Full Name' />

                    <Input radius='xl' name='help' placeholder='How can we be of help?' />

                </div>

                <TextArea className='p-5 h-52' radius='xl' placeholder='Type your message here' />

                <div className="flex justify-center !pt-2">
                    <Button rounded='2xl' className="btn btn-primary max-w-xs w-full">Send Feedback</Button>
                </div>

            </form>

        </div>
    )
}

export default FeedBackForm