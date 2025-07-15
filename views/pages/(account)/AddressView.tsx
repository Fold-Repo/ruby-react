'use client'

import { Button } from '@/components'
import { AddressCard } from '@/components/cards'
import { AddressModal } from '@/components/modal'
import { addresses as initialAddresses } from '@/data'
import React, { useState } from 'react'

const AddressView = () => {

    const [open, setOpen] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState<any | null>(null)
    const [mode, setMode] = useState<'add' | 'edit'>('add')

    const handleAdd = () => {
        setMode('add')
        setSelectedAddress(null)
        setOpen(true)
    }

    const handleEdit = (index: number) => {
        setMode('edit')
        setSelectedAddress(initialAddresses[index])
        setOpen(true)
    }

    return (
        <>

            <div className="flex items-center justify-between gap-3 border-b border-gray-400 pb-3">

                <h1 className="font-bold text-base md:text-lg">My Account</h1>

                <Button onClick={() => setOpen(true)} size='sm' type="button" rounded='lg'>
                    Add New Address
                </Button>

            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

                {initialAddresses.map((addr, index) => (
                    <AddressCard
                        key={index}
                        {...addr}
                        onEdit={() => handleEdit(index)}
                        showSetDefault={!addr.isDefault}
                    />
                ))}

            </div>

            <AddressModal
                open={open}
                setOpen={setOpen}
                mode={mode}
                address={selectedAddress}
            />

        </>
    )
}

export default AddressView