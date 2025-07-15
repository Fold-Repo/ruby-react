import { PencilIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon, MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import { Input } from '../ui'

const PersonalInfo = () => {
  return (
    <div className="border border-gray-400 p-5 rounded-xl space-y-5">

      <div className="flex items-center gap-3 justify-between">

        <h2 className="text-gray-800 text-base font-bold">Personal Information</h2>

        <button className="inline-flex items-center gap-1 text-primary font-medium text-sm cursor-pointer">
          <PencilIcon className='size-4' />
          <span className="underline">Edit</span>
        </button>

      </div>

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

      </div>

    </div>
  )
}

export default PersonalInfo