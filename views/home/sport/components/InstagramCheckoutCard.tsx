import { Button } from '@/components'
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'
import { InstagramProductType } from '@/types';
import Link from 'next/link';

const InstagramCheckoutCard = ({ item }: { item: InstagramProductType }) => {

    const { image, title, link } = item

    return (
        <div title={title} className="relative h-full bg-gray-100 rounded-xl aspect-[7/7]">

            <Image src={image} alt="Product" fill
                className="object-cover object-top rounded-lg"
            />

            <Link href={link} target='_blank' className="absolute bottom-1 w-full p-2">
                <Button variant='outline' rounded='lg' size='sm' className="h-8 hover:bg-primary hover:text-white w-full"
                    leftIcon={<FaInstagram className="size-4" />}>
                    Checkout
                </Button>
            </Link>

        </div>
    )
}

export default InstagramCheckoutCard