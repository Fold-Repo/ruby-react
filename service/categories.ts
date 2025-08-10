import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";


// TRENDING CATEGORY
export const getTrendFashionCategory = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.CATEGORY.TRENDING_FASHION_CATEGORY);
    return response?.data;
};

export const useGetTrendFashionCategory = () => {
    const { data: categories, isLoading: loadingCat } = useQuery({
        queryKey: ['fashion_categories'],
        queryFn: () => getTrendFashionCategory(),
    });
    return { categories, loadingCat };
};

// BRANDS
export const getBrands = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.CATEGORY.BRANDS);
    return response?.data;
};

export const useGetBrands = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: () => getBrands(),
    });
    return { data, isLoading };
};
