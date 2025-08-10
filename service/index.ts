import { useGetPosts, useGetPostById, useGetPostMetas } from "./post";
import { useGetProducts, useGetProductsMetas, useInfiniteProductsQuery, useProductQuery, useProductDetails, useGetRelatedProduct, useGetSkinCareProducts, useGetSportProducts, useGetOtherProducts, useGetElectronicsProducts } from "./product";
import { useGetCollections, useGetMenCollections } from "./collection";
import { useGetTopCategories } from "./top_category";
import { useGetTrendFashionCategory, useGetBrands } from "./categories";
import { useGetApparel, useGetInstagramProducts } from "./sport";
import { useGetElectronicCategory, useGetElectTopCategory, useGetElectTopProducts } from "./electronics"

export {
    useGetPosts,
    useGetPostById,
    useGetPostMetas,

    useGetProducts,
    useGetSkinCareProducts,
    useGetSportProducts,
    useGetOtherProducts,
    useGetElectronicsProducts,
    useGetProductsMetas,

    useProductQuery,
    useInfiniteProductsQuery,
    useProductDetails,

    useGetCollections,
    useGetMenCollections,

    useGetTopCategories,
    useGetRelatedProduct,

    useGetTrendFashionCategory,
    useGetBrands,

    useGetElectronicCategory,
    useGetElectTopCategory,
    useGetElectTopProducts,

    useGetApparel,
    useGetInstagramProducts
    
}