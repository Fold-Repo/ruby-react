import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getProductMetas, getProducts } from "./product";

export const useGetProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['product', params],
        queryFn: () => getProducts(params),
    });
    return { response, isLoading };
};

export const useInfiniteProducts = (params = {}, limit = 8) => {
    return useInfiniteQuery({
        queryKey: ['infinite-products', params],
        queryFn: ({ pageParam = 1 }) =>
            getProducts({ ...params, page: pageParam, limit }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.currentPage >= lastPage.totalPages) return undefined;
            return lastPage.currentPage + 1;
        },
        initialPageParam: 1,
    });
};

export const useGetProductsMetas = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['product_metas',],
        queryFn: () => getProductMetas(),
    });

    return { response, isLoading };
};
