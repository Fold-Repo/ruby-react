import Image from 'next/image'
import React from 'react'

const WhatMakeUsDifferent = () => {
    return (
        <div className="relative grid md:grid-cols-2 gap-x-5 gap-y-12 overflow-hidden">

            <div className="container px-6 max-w-xl m-auto flex flex-col justify-between gap-5 h-full">

                <div className="space-y-5 max-w-lg">
                    <h2 className="text-lg lg:!text-xl font-bold">What make us different</h2>
                    <p className="text-sm/7">
                        We believe that quality furniture should be stylish durable,
                        and affordable, with a focus on craftsmanship, modern design
                        customer satisfaction, we bring you the best selection to
                        transform your space effortlessly.
                    </p>
                </div>

                <div className="flex items-center gap-4">

                    <div className="h-full max-w-40 space-y-20 flex flex-col justify-between bg-black p-5 rounded-xl text-white">

                        <h5 className="text-sm">Happy Customer</h5>

                        <h2 className="font-bold text-xl">$100k</h2>

                    </div>

                    <div className="h-full max-w-40 space-y-20 flex flex-col justify-between bg-gray-200 p-5 rounded-xl text-gray-800">

                        <h5 className="text-sm">Our Quality Product</h5>

                        <h2 className="font-bold text-xl">$50k</h2>

                    </div>

                </div>

            </div>

            <div className="relative">

                <div className="container">

                    <Image width={800} height={500} src="/img/home/furniture/17.jpg"
                        className="m-auto relative z-50 w-[80%] md:w-[70%] rounded-xl object-cover max-h-[400px] md:max-h-[500px] 2xl:max-h-[600px] my-8" alt="Furniture" />

                </div>

                <div className="absolute z-5 top-0 right-0 bg-black w-[70%] rounded-l-xl h-full"></div>

            </div>

        </div>
    )
}

export default WhatMakeUsDifferent