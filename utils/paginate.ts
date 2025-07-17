export interface PaginatedResult<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

interface PaginateOptions {
    page?: number;
    limit?: number;
}

export function paginate<T>(
    items: T[],
    { page = 1, limit = 10 }: PaginateOptions
): PaginatedResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
        data: items.slice(start, end),
        currentPage: page,
        totalPages,
        totalItems,
    };
}
