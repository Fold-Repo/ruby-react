import React from 'react'
import { Button, Checkbox, Input, PopupModal } from '../ui';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { AddressType } from '@/types';

interface ShareModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mode: 'add' | 'edit';
    address: AddressType | null;
}

const AddressModal: React.FC<ShareModalProps> = ({ open, setOpen, address }) => {
    console.log(address)
    return (
        <PopupModal
            size="3xl"
            isOpen={open}
            onClose={() => setOpen(false)}
            placement="center"
            showCloseButton
            title='Add a new address'
            className="max-h-[80vh]">

            <div className="pb-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Input type='text' radius='xl' startContent={<UserIcon className='size-4 text-gray-500' />}
                        name='first_name' placeholder='First Name' />

                    <Input type='text' radius='xl' startContent={<UserIcon className='size-4 text-gray-500' />}
                        name='last_name' placeholder='Last Name' />

                    <Input type='email' radius='xl' startContent={<EnvelopeIcon className='size-4 text-gray-500' />}
                        name='email' placeholder='Email address' />

                    <Input type='tel' radius='xl' startContent={<PhoneIcon className='size-4 text-gray-500' />}
                        name='phone' placeholder='Phone' />

                    <div className='md:col-span-2'>
                        <Input type='text' radius='xl' startContent={<MapPinIcon className='size-4 text-gray-500' />}
                            name='location' placeholder='Location' />
                    </div>

                    <Checkbox label='Set as default address.' />

                </div>

                <div className="flex items-center justify-center mt-10">
                    <Button rounded='xl' className='max-w-md w-full'>Submit</Button>
                </div>

            </div>

        </PopupModal>
    )
}

export default AddressModal