'use client'

import { Breadcrumb, Container } from '@/components'
import { CollectionCard } from '@/components/cards'
import { CollectionSkeleton } from '@/components/skeleton'
import { useGetCollections } from '@/service'
import { CollectionType } from '@/types'
import React from 'react'

const ShopCollectionView = () => {

  const { response: collections = [], isLoading } = useGetCollections()

  return (
    <>

      <Breadcrumb
        title="Woman Fashion"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Woman Fashion' },
        ]}
      />

      <Container>

        <div className="section-lg">

          {isLoading ? (
            <CollectionSkeleton count={12} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
              {collections?.map((collection: CollectionType, index: number) => (
                <CollectionCard key={index} collection={collection} />
              ))}
            </div>
          )}

        </div>

      </Container>

    </>
  )
}

export default ShopCollectionView