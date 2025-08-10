"use client"

import { Container } from '@/components'
import { useGetApparel } from '@/service'
import { ApparelType } from '@/types'
import React from 'react'
import { ApparelCard, ApparelCardSkeleton } from '../components'

const ApparelSection = () => {

    const { apparel = [], isLoading } = useGetApparel()

    return (
        <Container>

            <div className="grid md:grid-cols-2 gap-5">

                { isLoading ? (
                    [1, 2].map((i) => <ApparelCardSkeleton key={i} />)
                ) : (
                    apparel.map((item: ApparelType, index: number) => (
                        <ApparelCard key={index} apparel={item} />
                    ))
                )}

            </div>

        </Container>
    )
}

export default ApparelSection