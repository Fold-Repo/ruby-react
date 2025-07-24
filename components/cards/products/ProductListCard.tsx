"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib";
import { Button, StarRating } from "@/components";
import { ColorSwatchGroup, ProductActionIcons, SizeBadgeGroup } from "@/components/product";
import { getDiscountPercentage } from "@/utils";
import { ProductStyleType, ProductType } from "@/types";

export default function ProductListCard({ product, styeType }: { product: ProductType; styeType: ProductStyleType }) {

    const { id, title, description, price, oldPrice, inStock, sizes = [], colors = [], images = [], ratingAverage, ratingTotal } = product

    const defaultImage = images[0] || "";
    const hoverImage = images[1] || "";
    const [activeImage, setActiveImage] = useState<string>(defaultImage);

    const discount =
        typeof oldPrice !== 'undefined'
        && getDiscountPercentage(oldPrice, price)

    return (
        <div className="relative duration-500 w-full mx-auto">

            <div className="flex items-start">

                <div className="relative overflow-hidden shrink-0 shadow-sm group rounded-md 
                duration-500 w-36 md:w-60 aspect-7/9 sm:aspect-7/8 bg-gray-200">

                    <Image
                        src={activeImage}
                        alt="Product"
                        width={300}
                        height={500}
                        className="h-full object-cover w-full rounded-md group-hover:scale-110 duration-500"
                    />

                    {/* Hover Overlay Image */}
                    {hoverImage && hoverImage !== defaultImage && (
                        <Image
                            src={hoverImage}
                            alt="Hover"
                            width={240}
                            height={300}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 scale-105"
                        />
                    )}

                    {/* Percentage off */}
                    {discount && (
                        <div className="absolute start-3 top-3">
                            <span className="bg-primary text-white text-[10px] font-medium px-3 py-1 rounded-xl">
                                -{discount}%
                            </span>
                        </div>
                    )}

                    {/* Icons */}
                    <ProductActionIcons product={product} styleType={styeType} />

                </div>

                {/* Info Section */}
                <div className="ms-6 space-y-1.5 md:space-y-2 max-w-3xl w-full">

                    <Link href={`/product/${id}`} className="hover:text-primary text-sm sm:text-base md:text-lg font-medium block !line-clamp-1">
                        {title}
                    </Link>

                    <p className="text-slate-500 md:block hidden text-[15px] line-clamp-2">{description}</p>

                    <div className="flex gap-x-3 font-medium items-center">
                        <p className="font-semibold text-primary text-base"> {formatCurrency(price)} </p>
                        {oldPrice && <p className="text-gray-400 line-through text-sm"> {formatCurrency(oldPrice)} </p>}
                    </div>

                    {(colors.length > 0 || sizes.length > 0) && (
                        <div className="!space-y-4">

                            {sizes.length > 0 && (
                                <SizeBadgeGroup sizes={sizes} />
                            )}

                            {colors.length > 0 && (
                                <ColorSwatchGroup
                                    colors={colors}
                                    value={activeImage}
                                    onHover={(color) => setActiveImage(color.image)}
                                />
                            )}

                        </div>
                    )}

                    <p className={`text-sm font-medium ${!inStock && 'text-danger'} `}>{inStock ? "In stock" : "Out of stock"}</p>

                    {/* Rating */}
                    <div className="hidden md:flex items-center gap-x-3">

                        <StarRating value={ratingAverage} />

                        <span className="text-sm text-gray-600"> {ratingTotal} verified ratings</span>

                    </div>

                    {/* CTA */}
                    <div className="mt-2 md:mt-3">
                        <Button variant="outline" size="sm" rounded="xl"
                            className="border border-gray-300 hover:bg-black hover:text-white px-12 !py-4.5">Add To Cart</Button>
                    </div>

                </div>

            </div>

        </div>
    );
}
