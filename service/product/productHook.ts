'use client'

import { useQueryParams } from "@/hooks";
import { useGetProducts } from "@/service";
import { removeEmptyFields } from "@/utils";
import { useInfiniteProducts } from "./productFn";

export function useProductQuery(defaults = { page: 1, limit: 8 }) {

    const { searchParams } = useQueryParams();

    const page = Number(searchParams.get('page')) || defaults.page;
    const limit = Number(searchParams.get('limit')) || defaults.limit;

    const sort = searchParams.get('sort') || ''
    const category = searchParams.get('category') || ''
    const stock = searchParams.get('stock') || ''
    const minPrice = searchParams.get('minPrice') || ''
    const maxPrice = searchParams.get('maxPrice') || ''
    const size = searchParams.get('size') || ''
    const color = searchParams.get('color') || ''
    const brand = searchParams.get('brand') || ''

    const payload = { page, limit, category, sort, stock, minPrice, maxPrice, size, color, brand };

    const query = removeEmptyFields(payload)

    const { response, isLoading } = useGetProducts(query);
    const { data: products, currentPage, totalItems } = response || {};

    return { products, currentPage, totalItems, limit, isLoading };
}

interface UseInfiniteProductsProps {
    limit?: number;
    search?: string;
}
export function useInfiniteProductsQuery(
    defaults: UseInfiniteProductsProps = { limit: 8 }
) {
    const { searchParams } = useQueryParams();

    const limit = Number(searchParams.get('limit')) || defaults.limit || 8;

    const sort = searchParams.get('sort') || '';
    const category = searchParams.get('category') || '';
    const stock = searchParams.get('stock') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const size = searchParams.get('size') || '';
    const color = searchParams.get('color') || '';
    const brand = searchParams.get('brand') || '';
    const search = searchParams.get('q') || defaults.search || '';

    const params = removeEmptyFields({
        category,
        sort,
        stock,
        minPrice,
        maxPrice,
        size,
        color,
        brand,
        search
    });

    return useInfiniteProducts(params, limit);
}