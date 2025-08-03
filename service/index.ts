import { useGetPosts, useGetPostById, useGetPostMetas } from "./post";
import { useGetProducts, useGetProductsMetas, useInfiniteProductsQuery, useProductQuery, useProductDetails, useGetRelatedProduct } from "./product";
import { useGetCollections } from "./collection";
import { useGetTopCategories } from "./top_category";

export {
    useGetPosts,
    useGetPostById,
    useGetPostMetas,

    useGetProducts,
    useGetProductsMetas,

    useProductQuery,
    useInfiniteProductsQuery,
    useProductDetails,

    useGetCollections,

    useGetTopCategories,
    useGetRelatedProduct,
}