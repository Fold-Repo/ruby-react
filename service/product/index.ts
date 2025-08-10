import { useGetProducts, useGetProductsMetas, useGetRelatedProduct, useGetSkinCareProducts, useGetSportProducts,
useGetOtherProducts, useGetElectronicsProducts
 } from "./productFn";
import { useProductQuery, useInfiniteProductsQuery, useProductDetails } from "./productHook";

export {
    useGetProducts,
    useGetSkinCareProducts,
    useGetSportProducts,
    useGetOtherProducts,
    useGetElectronicsProducts,
    useGetProductsMetas,
    useGetRelatedProduct,

    useProductDetails,
    useProductQuery,
    useInfiniteProductsQuery
}