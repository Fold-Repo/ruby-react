import { PersonalInfo, SecurityInfo, UploadProfileImage } from '@/components/account'
import React from 'react'

const AccountView = () => {

    return (
        <>

            <UploadProfileImage />

            <PersonalInfo />

            <SecurityInfo />

        </>
    )
}

export default AccountView