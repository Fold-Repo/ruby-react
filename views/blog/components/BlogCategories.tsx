import React from 'react'

const categories = ['Accessories', 'Beauty', 'Fashion', 'Trending', 'Outfit'];

const tags = [
    'Beauty Tips',
    'Eco Friendly',
    'Fashion Trend',
    'Sustainable Fashion',
    'Outfit',
    'Street Style',
    'Tips',
    'Vintage Fashion',
];

const BlogCategories = () => {
    return (
        <div className="border border-gray-300 p-3 rounded-lg space-y-3 divide-y divide-gray-300 ">

            {/* Categories */}
            <div className="pb-4 space-y-4">

                <h1 className="font-semibold text-sm lg:!text-base">Categories</h1>

                <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((category) => (
                        <span key={category} className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-semibold border border-gray-300 bg-white text-gray-800">
                            {category}
                        </span>
                    ))}
                </div>

            </div>

            {/* Popular Tags */}
            <div className="pt-4 space-y-4">

                <h1 className="font-semibold text-sm lg:!text-base">Popular Tag</h1>

                <div className="flex items-center gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag}
                        className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-semibold border border-gray-300 bg-white text-gray-800">
                            {tag}
                        </span>
                    ))}
                </div>
                
            </div>

        </div>
    )
}

export default BlogCategories