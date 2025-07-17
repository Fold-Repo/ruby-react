"use client";

import React, { useEffect, useState } from "react";
import { useGetPostMetas } from "@/service";
import { useQueryParams } from "@/hooks";
import { BadgeSkeleton } from "@/components/skeleton";

const BlogCategories = () => {

    const { response, isLoading } = useGetPostMetas();
    const { categories = [], tags = [] } = response || {};

    const { searchParams, updateQueryParams } = useQueryParams();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        const catParam = searchParams.get("category");
        const tagParam = searchParams.get("tags");

        setSelectedCategory(catParam || null);
        setSelectedTags(tagParam ? tagParam.split(",") : []);
    }, [searchParams]);

    const toggleCategory = (category: string) => {
        const newCategory = selectedCategory === category ? null : category;
        setSelectedCategory(newCategory);
        updateQueryParams({ category: newCategory || null });
    };

    const toggleTag = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newTags);
        updateQueryParams({ tags: newTags.length ? newTags.join(",") : null });
    };

    return (
        <div className="border border-gray-300 p-3 rounded-lg space-y-3 divide-y divide-gray-300">

            {/* Categories */}
            <div className="pb-4 space-y-4">
                <h1 className="font-semibold text-sm lg:!text-base">Categories</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    { isLoading
                        ? Array.from({ length: 12 }).map((_, idx) => <BadgeSkeleton key={idx} />)
                        : categories.map((category: string) => (
                            <SelectableBadge
                                key={category}
                                label={category}
                                isActive={category.toLowerCase() === selectedCategory}
                                onClick={() => toggleCategory(category.toLowerCase())}
                            />
                        ))}
                </div>
            </div>

            {/* Tags */}
            <div className="pt-4 space-y-4">
                <h1 className="font-semibold text-sm lg:!text-base">Popular Tags</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    {isLoading
                        ? Array.from({ length: 12 }).map((_, idx) => <BadgeSkeleton key={idx} />)
                        : tags.map((tag: string) => (
                            <SelectableBadge
                                key={tag}
                                label={tag}
                                isActive={selectedTags.includes(tag.toLowerCase())}
                                onClick={() => toggleTag(tag.toLowerCase())}
                            />
                        ))}
                </div>
            </div>
        </div>
    );

};

export default BlogCategories;


const SelectableBadge = ({ label, isActive, onClick }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <span onClick={onClick} className={`cursor-pointer inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-semibold border ${isActive
        ? "border-black bg-black text-white"
        : "border-gray-300 bg-white text-gray-800"
        }`}>
        {label}
    </span>
);
