import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const getTopCategories = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.TOP_COLLECTIONS);
    return response?.data;
};

export const useGetTopCategories = () => {
    const { data: categories, isLoading: loadingCat } = useQuery({
        queryKey: ['top_categories'],
        queryFn: () => getTopCategories(),
    });
    return { categories, loadingCat };
};