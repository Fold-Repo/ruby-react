import { RefObject, useEffect } from 'react';

/**
 * Custom hook for implementing infinite scroll using IntersectionObserver.
 *
 * @param loaderRef - A ref to the element that triggers loading more content when visible.
 * @param onIntersect - Callback to run when the loader becomes visible.
 * @param hasNextPage - Indicates if more data is available to load.
 * @param isFetching - Indicates if a fetch operation is currently in progress.
 *
 * @example
 * const loaderRef = useRef(null);
 * useInfiniteScroll(loaderRef, loadMore, hasNextPage, isLoading);
 */
export const useInfiniteScroll = (
    loaderRef: RefObject<HTMLElement | null>,
    onIntersect: () => void,
    hasNextPage: boolean,
    isFetching: boolean
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasNextPage && !isFetching) {
                    onIntersect();
                }
            },
            { threshold: 0.1 }
        );

        const current = loaderRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [loaderRef, hasNextPage, isFetching, onIntersect]);
};
