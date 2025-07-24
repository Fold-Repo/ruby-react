'use client'

import {
    HeartIcon,
    ShoppingCartIcon,
    ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { GoGitCompare } from "react-icons/go";
import clsx from "clsx";
import React, { useState } from "react";
import { Button } from "../ui";
import { ProductStyleType, ProductType } from "@/types";
import { addToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import toast from "react-hot-toast";
import { addToWishlist, isInWishlist, removeFromWishlist } from "@/store/wishlistSlice";
import { ProductQuickView } from "../modal";

type ActionIconsProps = {
    styleType: ProductStyleType;
    product: ProductType
};

const iconClass = "w-4 h-4 text-gray-700";

const IconWrapper = ({
    children,
    onClick,
    className,
    title
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    title: string
}) => (
    <button
        onClick={onClick}
        title={title}
        className={clsx(
            "cursor-pointer bg-white rounded-full flex items-center justify-center w-8 aspect-square text-base",
            className
        )}>
        {children}
    </button>
);

export default function ActionIcons({ styleType, product }: ActionIconsProps) {

    const dispatch = useAppDispatch()
    const isWished = useAppSelector(isInWishlist(product.id));

    // QUICK VIEW
    const [ open, setOpen ] = useState(false)

    const handleClick = (type: string) => {
        switch (type) {
            case "heart":
                if (isWished) {
                    dispatch(removeFromWishlist(product.id));
                    toast.success("Removed from wishlist");
                } else {
                    dispatch(addToWishlist(product));
                    toast.success("Added to wishlist");
                }
                break;
            case "cart":
                dispatch(addToCart({product}))
                toast.success('Product added to cart')
                break;
            case "view":
                setOpen(true)
                break;
            case "compare":
                console.log("Added to compare list");
                break;
            default:
                console.log("Unknown action:", type);
        }
    };

    const commonIcons = {
        heart: (
            <IconWrapper title='Add to wishlist' onClick={() => handleClick("heart")}>
                {isWished ? (
                    <SolidHeartIcon className="w-4 h-4 text-red-500" />
                ) : (
                    <HeartIcon className={iconClass} />
                )}
            </IconWrapper>
        ),
        cart: (
            <IconWrapper title='Add to cart' onClick={() => handleClick("cart")}>
                <ShoppingCartIcon className={iconClass} />
            </IconWrapper>
        ),
        view: (
            <IconWrapper title='Quick view' onClick={() => handleClick("view")}>
                <ViewfinderCircleIcon className={iconClass} />
            </IconWrapper>
        ),
        compare: (
            <IconWrapper title='Compare product' onClick={() => handleClick("compare")}>
                <GoGitCompare className={iconClass} />
            </IconWrapper>
        ),
    };

    return (
        <>

        <div className="absolute inset-0 z-10">

            {(styleType === "style1" ||
                styleType === "style2" ||
                styleType === "style3" ||
                styleType === "style5") && (
                    <div className="absolute right-3 top-3 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {styleType !== "style5" && commonIcons.heart}
                        {(styleType === "style1" || styleType === "style2") && commonIcons.cart}
                        {(styleType === "style2" || styleType === "style3" || styleType === "style5") &&
                            commonIcons.view}
                        {(styleType === "style2" || styleType === "style3" || styleType === "style5") &&
                            commonIcons.compare}
                    </div>
                )}

            {(styleType === "style1" || styleType === "style2") && (
                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <Button
                        size="sm"
                        onClick={() => handleClick("cart")}
                        className="py-2 px-5 font-medium text-xs bg-black text-white w-full rounded-md">
                        Add to cart
                    </Button>
                </div>
            )}

            {styleType === "style3" && (
                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <div className="flex items-center gap-3">

                        {  commonIcons.cart }

                        <button
                            onClick={() => handleClick("cart")}
                            className="cursor-pointer py-2 px-5 font-medium text-xs !bg-white text-black w-full rounded-md">
                            Add to Cart
                        </button>
                        
                    </div>
                </div>
            )}

            {styleType === "style4" && (
                <div className="absolute -bottom-20 group-hover:bottom-5 start-3 end-3 duration-500 flex items-center justify-center gap-4">
                    {commonIcons.cart}
                    {commonIcons.heart}
                    {commonIcons.view}
                    {commonIcons.compare}
                </div>
            )}

            {styleType === "style5" && (
                <div className="flex items-center justify-center absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                    <div className="flex items-center flex-wrap justify-center gap-2">
                        <div className="flex items-center gap-x-2">

                            {commonIcons.heart}

                            <button
                                onClick={() => handleClick("view")}
                                className="cursor-pointer py-2 px-5 font-medium text-xs bg-white text-black rounded-md">
                                Quick View
                            </button>
                        </div>
                        <div className="flex items-center gap-x-2">

                            {commonIcons.cart}

                            <button
                                onClick={() => handleClick("cart")}
                                className="cursor-pointer py-2 px-5 font-medium text-xs bg-white text-black rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {styleType === "style6" && (
                <div className="absolute -bottom-20 group-hover:bottom-5 start-3 end-3 duration-500 flex items-center justify-center gap-4">
                    {commonIcons.cart}
                    {commonIcons.heart}
                    {commonIcons.view}
                </div>
            )}

            {styleType === "style7" && (
                <div className="absolute -bottom-20 group-hover:bottom-5 start-3 end-3 duration-500 flex items-center justify-center gap-4">
                    <div className="bg-white rounded-lg max-w-max flex items-center justify-center m-auto px-2 py-2.5 border border-gray-200 shadow">
                        {[
                            { type: "cart", icon: <ShoppingCartIcon className={iconClass} /> },
                            {
                                type: "heart",
                                icon: isWished ? (
                                    <SolidHeartIcon className="w-4 h-4 text-red-500" />
                                ) : (
                                    <HeartIcon className={iconClass} />
                                ),
                            },
                            { type: "view", icon: <ViewfinderCircleIcon className={iconClass} /> },
                        ].map((item, idx) => (
                            <button
                                key={item.type}
                                onClick={() => handleClick(item.type)}
                                className={clsx(
                                    "cursor-pointer px-3 flex items-center justify-center",
                                    idx < 2 && "border-e border-gray-300"
                                )}>
                                {item.icon}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>

        <ProductQuickView open={open} setOpen={setOpen} product={product} />

        </>
    );
}
