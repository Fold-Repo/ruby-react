'use client';

import { useQueryParams } from "@/hooks";
import { useGetProducts } from "@/service";
import { removeEmptyFields } from "@/utils";
import { useGetBooksProduct, useGetProductById, useInfiniteProducts } from "./productFn";
import { useMemo } from "react";

type QueryObject = Record<string, any>;

// 🔁 Build a reusable function to merge URL and default query values
const useMergedQueryParams = (defaults: QueryObject = {}) => {
    const { searchParams } = useQueryParams();

    const query: QueryObject = { ...defaults };

    for (const [key, value] of searchParams.entries()) {
        query[key] = value;
    }

    return removeEmptyFields(query);
};

// 📦 Standard Product List Query
export function useProductQuery(defaults: QueryObject = { page: 1, limit: 12 }) {
    
    const query = useMergedQueryParams(defaults);

    const { page = 1, limit = 12, ...restQuery } = query;

    const { response, isLoading } = useGetProducts({ page, limit, ...restQuery });
    const { data: products, currentPage, totalItems } = response || {};

    return { products, currentPage, totalItems, limit, isLoading };
}

export function useBookProductQuery(defaults: QueryObject = { page: 1, limit: 12 }) {
    
    const query = useMergedQueryParams(defaults);

    const { page = 1, limit = 12, ...restQuery } = query;

    const { response, isLoading } = useGetBooksProduct({ page, limit, ...restQuery });
    const { data: products, currentPage, totalItems } = response || {};

    return { products, currentPage, totalItems, limit, isLoading };
}

// 🔄 Infinite Scrolling Product Query
export function useInfiniteProductsQuery(defaults: QueryObject = { limit: 8 }) {
    const query = useMergedQueryParams(defaults);

    const { limit = 8, ...params } = query;

    return useInfiniteProducts(params, limit);
}

// 🔍 Single Product + Related/Frequently Bought
export const useProductDetails = (productId: string | number) => {
    const { response, isLoading } = useGetProductById(productId || '');

    const productData = useMemo(() => {
        if (!response?.product) return {};

        return {
            product: response.product || [],
            related: response.related || [],
            frequentlyBoughtTogether: response.frequentlyBoughtTogether || [],
            group: response.group || [],
        };
    }, [response]);

    return {
        isLoading,
        ...productData,
    };
};
