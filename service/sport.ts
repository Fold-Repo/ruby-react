import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

// Apparel
export const getApparel = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.SPORT.APPAREL);
    return response?.data;
};

export const useGetApparel = () => {
    const { data: apparel, isLoading } = useQuery({
        queryKey: ['apparel'],
        queryFn: () => getApparel(),
    });
    return { apparel, isLoading };
};

// INSTAGRAM
export const getInstagramProducts = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.SPORT.INSTAGRAM);
    return response?.data;
};

export const useGetInstagramProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['instagram_products'],
        queryFn: () => getInstagramProducts(),
    });
    return { data, isLoading };
};