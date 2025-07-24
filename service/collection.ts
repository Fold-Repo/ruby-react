import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const getCollections = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.COLLECTIONS);
    return response?.data;
};

export const useGetCollections = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['collections'],
        queryFn: () => getCollections(),
    });
    return { response, isLoading };
};