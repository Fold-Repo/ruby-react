import { useQueryParams } from "@/hooks";
import { useGetPosts } from "@/service";

export function usePostsQuery(defaults = { page: 1, limit: 3 }) {

    const { searchParams } = useQueryParams();

    const page = Number(searchParams.get('page')) || defaults.page;
    const limit = Number(searchParams.get('limit')) || defaults.limit;
    const tags = searchParams.get('tags') || undefined;
    const category = searchParams.get('category') || undefined;

    const query = { page, limit, tags, category };

    const { response, isLoading } = useGetPosts(query);
    const { data: posts, currentPage, totalItems } = response || {};

    return { posts, currentPage, totalItems, limit, isLoading, query };
}
