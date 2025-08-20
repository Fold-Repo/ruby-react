'use client'

import { ProfileImage } from '@/components'
import React from 'react'

const UploadProfileImage = () => {

    const handleFileChange = (file?: File) => {
        if (file) {
            console.log('Selected file:', file)
            // You can implement uploading logic here
        }
    }

    return (
        <div className="flex gap-3 border border-gray-400 dark:border-gray-600 p-5 rounded-xl bg-white dark:bg-gray-800">

            <div className="inline-flex gap-x-3 items-center">

                <ProfileImage
                    onFileChange={handleFileChange}
                    size='20'
                    defaultImage='/img/team/1.jpg'
                />

                <div className="space-y-0.5">
                    <h2 className="text-gray-800 dark:text-gray-100 text-base font-bold">Tony Sam</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">United States</p>
                </div>

            </div>

        </div>
    )
}

export default UploadProfileImage
