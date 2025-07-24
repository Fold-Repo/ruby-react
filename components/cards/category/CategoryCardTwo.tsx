import React from "react";
import Image from "next/image";
import { CategoryType } from "@/types";

const CategoryCardTwo = ({ category } : { category: CategoryType }) => {

        const { img, name } = category || {}

    return (
        <div className="relative group duration-500 overflow-hidden cursor-pointer rounded-full">

            <Image src={img} alt={name}
                width={300} height={300}
                className="object-cover aspect-square rounded-full group-hover:scale-105 transition-transform duration-500"
            />


            <div className="absolute -bottom-20 group-hover:bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10">

                <div className={`py-2 px-8 inline-block font-medium text-xs  text-center bg-white text-black rounded-xl`}>
                    {name}
                </div>

            </div>

        </div>
    );
};

export default CategoryCardTwo;
