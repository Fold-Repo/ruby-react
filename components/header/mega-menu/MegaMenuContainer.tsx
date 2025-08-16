import { MegaMenuType } from '@/types'
import React from 'react'
import ProductMegaMenu from './ProductMegaMenu'
import HomeMegaMenu from './HomeMegaMenu'
import ShopMegaMenu from './ShopMegaMenu'
import {Container} from '@/components'

const MegaMenuContainer = ({ type, onLinkClick }: { type?: MegaMenuType, onLinkClick?: () => void }) => {

    const open = Boolean(type)

    return (
        <div className={`h-fulll overflow-y-scroll max-h-[77vh] px-4 py-8 mt-0 absolute duration-300 ease-in-out transition-all
        ${open ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'}
        xl:block top-full right-0 overflow-hidden bg-white rounded-2xl mx-auto left-0 z-20 p-2`}>

            <Container>

                {type === 'home' && <HomeMegaMenu onLinkClick={onLinkClick} />}
                {type === 'product' && <ProductMegaMenu onLinkClick={onLinkClick} />}
                {type === 'shop' && <ShopMegaMenu onLinkClick={onLinkClick} />}

            </Container>

        </div>
    )
}

export default MegaMenuContainer
