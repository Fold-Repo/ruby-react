import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const getWishlists = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.WISH_LIST);
    return response?.data;
};

export const useGetWishlists = () => {
    const { data: wishlists, isLoading } = useQuery({
        queryKey: ['wishlists'],
        queryFn: () => getWishlists(),
    });
    return { wishlists, isLoading };
};