import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BreadcrumbItem = {
    label: string
    href?: string
}

type BreadcrumbVariant = 'default' | 'img' | 'left' | 'bg'

type BreadcrumbProps = {
    title: string
    items?: BreadcrumbItem[]
    variant?: BreadcrumbVariant
    imageSrc?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    title,
    items,
    variant = 'default',
    imageSrc,
}) => {
    const isImageVariant = variant === 'img'
    const isLeftAligned = variant === 'left'
    const isBgVariant = variant === 'bg'

    const renderTitleAndDescription = () => (
        <>
            <h1 className='font-bold text-xl lg:text-2xl'>{title}</h1>
        </>
    )

    const renderBreadcrumbItems = (textColor = 'text-gray-600') => (
        <div className={`flex items-center gap-1 text-sm mt-2 ${isLeftAligned ? '' : 'justify-center'} ${textColor}`}>
            {items?.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link href={item.href} className={`${textColor === 'text-white' ? 'text-white/80' : 'text-black/80'} font-semibold`}>
                            {item.label}
                        </Link>
                    ) : (
                        <span>{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <ChevronRightIcon className={`w-4 h-4 ${textColor === 'text-white' ? 'text-gray-200' : 'text-gray-400'}`} />
                    )}
                </React.Fragment>
            ))}
        </div>
    )

    if (isBgVariant && imageSrc) {
        return (
            <div className="relative bg-cover bg-center rounded overflow-hidden py-12 lg:py-16" style={{ backgroundImage: `url(${imageSrc})` }}>

                <div className="absolute inset-0 bg-black/40 z-0 rounded" />

                <div className="relative z-10 container mx-auto px-4 flex justify-center">
                    <div className="max-w-xl text-white text-center">
                        {renderTitleAndDescription()}
                        {items && renderBreadcrumbItems('text-white')}
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="relative bg-[#F5F3EE] py-12 lg:py-16 rounded overflow-hidden">

            {isImageVariant && imageSrc && (
                <>
                    <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-52">
                        <Image
                            src={imageSrc}
                            alt="Left"
                            className="w-full h-full object-cover rounded-l scale-x-[-1] opacity-80"
                            width={208}
                            height={1000} 
                            priority
                            unoptimized={false}
                        />
                    </div>
                    <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-52">
                        <Image
                            src={imageSrc}
                            alt="Right"
                            className="w-full h-full object-cover rounded-r opacity-80"
                            width={208}
                            height={1000}
                            priority
                            unoptimized={false}
                        />
                    </div>
                </>
            )}

            <div className={`relative z-10 container mx-auto px-4 ${isLeftAligned ? 'text-left' : 'text-center'} flex justify-${isLeftAligned ? 'start' : 'center'}`}>

                <div className="max-w-xl">

                    {renderTitleAndDescription()}
                    {items && renderBreadcrumbItems()}

                </div>

            </div>

        </div>
    )
}

export default Breadcrumb
