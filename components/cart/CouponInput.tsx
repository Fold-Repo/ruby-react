import React from 'react'
import { Button } from '../ui'

const CouponInput = () => {
    return (
        <form className="relative w-full max-w-md">

            <input type="email" required placeholder="Enter your email"
            className="border-0 block w-full pl-5 pr-16 py-3.5 text-sm  !text-black bg-input-bg rounded-full !outline-0" />

            <Button size='sm' type='submit'
                className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-1.5 !text-xs px-6 !py-2' rounded='full'>
                Apply
            </Button>
            
        </form>
    )
}

export default CouponInput