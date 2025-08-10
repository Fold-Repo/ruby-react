import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getElectronicsProducts, getOtherProducts, getProductId, getProductMetas, getProducts, getRelatedProduct, getSkinCareProducts, getSportProducts } from "./product";

export const useGetProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['product_', params],
        queryFn: () => getProducts(params),
    });
    return { response, isLoading };
};

export const useGetSkinCareProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['skin_product_', params],
        queryFn: () => getSkinCareProducts(params),
    });
    return { response, isLoading };
};

export const useGetSportProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['sport_products', params],
        queryFn: () => getSportProducts(params),
    });
    return { response, isLoading };
};

export const useGetOtherProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['home_products', params],
        queryFn: () => getOtherProducts(params),
    });
    return { response, isLoading };
};

export const useGetElectronicsProducts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['electronics_products', params],
        queryFn: () => getElectronicsProducts(params),
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

export const useGetProductById = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['product_', id],
        queryFn: () => getProductId(id),
        enabled: !!id
    });

    return { response, isLoading };
};

export const useGetRelatedProduct = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['product_', id, '_related'],
        queryFn: () => getRelatedProduct(id),
        enabled: !!id
    });

    return { response, isLoading };
};
