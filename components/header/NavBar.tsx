import React from 'react'
import Container from '../container'

const NavBar = () => {
    return (
        <div className="bg-black py-2 border-b border-white/10">

            <Container>

                <div className="flex flex-row items-center justify-between gap-4 xl:gap-0">

                    <ul className="flex items-center gap-x-4 md:gap-x-3">
                        <li>
                            <a href="#" className="text-xs text-white hidden sm:block">hello@support.com</a>
                        </li>
                        <li>
                            <a href="tel:315-666-6688" className="text-xs text-white">+477 097-3948-098</a>
                        </li>
                    </ul>

                    <select className="bg-transparent text-white text-xs border-0 outline-0">
                        <option>English</option>
                        <option>Vietnam</option>
                    </select>

                </div>

            </Container>

        </div>
    )
}

export default NavBar