'use client'

import { ProfileImage } from '@/components'
import React from 'react'

const UploadProfileImage = () => {

    const handleFileChange = () => {

    }

    return (
        <div className="flex gap-3 border border-gray-400 p-5 rounded-xl">

            <div className="inline-flex gap-x-3 items-center">

                <ProfileImage onFileChange={handleFileChange} size='20' defaultImage='/img/team/1.jpg' />

                <div className="space-y-0.5">
                    <h2 className="text-gray-800 text-base font-bold">Tony Sam</h2>
                    <p className="text-sm text-gray-500">United States</p>
                </div>

            </div>

        </div>
    )
}

export default UploadProfileImage