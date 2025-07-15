import { AccountSidebar, Breadcrumb, Container } from '@/components'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>

            <Breadcrumb
                title="My Account"
                items={[
                    { label: 'Page', href: '#' },
                    { label: 'My Account' },
                ]}
            />

            <Container>

                <div className="section-lg">

                    <div className="flex flex-col lg:flex-row gap-10">

                        <div className="w-full lg:w-[25%]">

                            <AccountSidebar />

                        </div>

                        <div className="w-full lg:w-[75%] space-y-5">

                            {children}

                        </div>

                    </div>

                </div>

            </Container>

        </>
    )
}

export default layout