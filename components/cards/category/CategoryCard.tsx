import React from "react";
import Image from "next/image";
import { CategoryType } from "@/types";

const CategoryCard = ({ category }: { category: CategoryType }) => {

    const { img, name } = category || {}

    return (
        <div className="relative group duration-500 overflow-hidden cursor-pointer rounded-xl">

            <Image src={img} alt={name} width={500} height={600}
                className="rounded-xl object-cover aspect-[4/5] group-hover:scale-105 
                transition-transform duration-500 w-full h-auto"
            />

            <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500 !z-10">

                <div className="py-2 px-5 inline-block font-medium align-middle duration-500 text-xs lg:text-sm 
                text-center bg-[#DB4444CC] text-white w-full rounded-xl">
                    {name}
                </div>

            </div>

        </div>
    );
};

export default CategoryCard;
