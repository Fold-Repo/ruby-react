import { useGetProducts, useGetProductsMetas, useGetRelatedProduct, useGetSkinCareProducts, useGetSportProducts,
useGetOtherProducts, useGetElectronicsProducts, useGetBooksProduct, useGetProductBooksMetas, useGetBookDetails
 } from "./productFn";
import { useProductQuery, useBookProductQuery, useInfiniteProductsQuery, useProductDetails } from "./productHook";

export {
    useGetProducts,
    useGetSkinCareProducts,
    useGetSportProducts,
    useGetOtherProducts,
    useGetElectronicsProducts,
    useGetBooksProduct,
    useGetProductBooksMetas,
    useGetProductsMetas,
    useGetRelatedProduct,

    useProductDetails,
    useGetBookDetails,
    useProductQuery,
    useBookProductQuery,
    useInfiniteProductsQuery
}