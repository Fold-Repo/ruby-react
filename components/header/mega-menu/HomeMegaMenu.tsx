import { homeCategories } from '@/constants'
import React from 'react'
import HomeCategoryCard from '../HomeCategoryCard'

const HomeMegaMenu = () => {
    return (
        <div className="grid grid-cols-5 2xl:grid-cols-6 gap-4">

            {homeCategories.map((category, index) => (
                <HomeCategoryCard key={index} {...category} />
            ))}

        </div>
    )
}

export default HomeMegaMenu