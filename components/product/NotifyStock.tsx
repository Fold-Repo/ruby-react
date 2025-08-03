import React from 'react'
import { Button, Input } from '../ui'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const NotifyStock = ({ productId } : { productId?: string }) => {

    console.log(productId)

    return (
        <div className="flex flex-col space-y-5 p-4 border border-gray-300 rounded-lg max-w-max">

            <div className="space-y-1.5">
                <h2 className="font-semibold text-base">Notify when in Stock</h2>
                <p className="text-gray-600 text-sm">Email your register to receive notifications when  products are in stock</p>
            </div>

            <div className="space-y-4">

                <Input  type='email' inputSize='sm' radius='xl' 
                    startContent={<EnvelopeIcon className='size-4 text-gray-500' />}
                    name='email' placeholder='Email' />

                <Button className='w-full' size='sm' rounded='xl'>Submit</Button>

            </div>

        </div>
    )
}

export default NotifyStock