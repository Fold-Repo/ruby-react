import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const getCollections = async (params?: {}) => {
    const response = await axiosNoAuth.get(ENDPOINT.COLLECTION.COLLECTIONS, {
        params
    });
    return response?.data;
};

export const useGetCollections = (params?: {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['collections', params],
        queryFn: () => getCollections(params),
    });
    return { response, isLoading };
};

export const getMenCollections = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.COLLECTION.MEN_COLLECTIONS);
    return response?.data;
};

export const useGetMenCollections = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['men_collections'],
        queryFn: () => getMenCollections(),
    });
    return { response, isLoading };
};