import { RefObject, useEffect } from 'react'

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
