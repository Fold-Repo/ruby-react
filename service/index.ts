import { useGetPosts, useGetPostById, useGetPostMetas } from "./post";
import { useGetProducts, useGetProductsMetas, useGetProductBooksMetas, useInfiniteProductsQuery, useProductQuery, useProductDetails, useGetRelatedProduct, useGetSkinCareProducts, useGetSportProducts, useGetOtherProducts, useGetElectronicsProducts, useBookProductQuery, useGetBookDetails } from "./product";
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
    useBookProductQuery,

    useGetProductsMetas,
    useGetProductBooksMetas,

    useProductQuery,
    useInfiniteProductsQuery,
    useProductDetails,
    useGetBookDetails,

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