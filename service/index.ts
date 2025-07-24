import { useGetPosts, useGetPostById, useGetPostMetas } from "./post";
import { useGetProducts, useGetProductsMetas, useInfiniteProductsQuery, useProductQuery } from "./product";
import { useGetCollections } from "./collection";
import { useGetTopCategories } from "./top_category";
import { useGetWishlists } from "./wishlist";

export {
    useGetPosts,
    useGetPostById,
    useGetPostMetas,

    useGetProducts,
    useGetProductsMetas,

    useProductQuery,
    useInfiniteProductsQuery,

    useGetCollections,

    useGetTopCategories,

    useGetWishlists
}