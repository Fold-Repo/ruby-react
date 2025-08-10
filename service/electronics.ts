import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

// ELECTRONICS
export const getElectronicCategories = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.ELECTRONICS.CATEGORY);
    return response?.data;
};

export const useGetElectronicCategory = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['electonics_category'],
        queryFn: () => getElectronicCategories(),
    });
    return { data, isLoading };
};

// TOP CATEGORY
export const getElectTopCategories = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.ELECTRONICS.TOP_CATEGORY);
    return response?.data;
};

export const useGetElectTopCategory = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['electonics_top_category'],
        queryFn: () => getElectTopCategories(),
    });
    return { data, isLoading };
};


// ELECT TOP PRODUCT
export const getElectTopProducts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.ELECTRONICS.TOP_PRODUCTS);
    return response?.data;
};

export const useGetElectTopProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['electonics_top_products'],
        queryFn: () => getElectTopProducts(),
    });
    return { data, isLoading };
};