import { useQuery } from "@tanstack/react-query";
import { getPostById, getPostMetas, getPosts, getRelatedPost } from "./post";

export const useGetPosts = (params = {}) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['posts', params],
        queryFn: () => getPosts(params),
    });
    return { response, isLoading };
};

export const useGetPostMetas = () => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['post_metas',],
        queryFn: () => getPostMetas(),
    });

    return { response, isLoading };
};

export const useGetPostById = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['post_', id],
        queryFn: () => getPostById(id),
        enabled: !!id
    });

    return { response, isLoading };
};

export const useGetRelatedPosts = (id: string | number) => {
    const { data: response, isLoading } = useQuery({
        queryKey: ['post_', id, '_related'],
        queryFn: () => getRelatedPost(id),
        enabled: !!id
    });

    return { response, isLoading };
};