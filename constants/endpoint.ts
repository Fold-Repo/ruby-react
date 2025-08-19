const BASE_URL = {
    development: "/api/",
    production: "/api/",
} as const;

type Env = keyof typeof BASE_URL;
const currentEnv: Env = (process.env.NODE_ENV as Env) || "development";

export const API_BASE_URL = BASE_URL[currentEnv];

export const ENDPOINT = {
    BLOG: {
        POSTS: 'post',
        POST_BY_ID: (id: string | number) => `post/${id}`,
        RELATED_POSTS: (id: string | number) => `post/${id}/related`,
        POST_METAS: 'post/meta',
    },
    PRODUCT: {
        PRODUCTS: 'product',
        SKIN_CARE_PRODUCTS: 'product/skin-care',
        SPORT_PRODUCTS: 'product/sport',
        OTHER_PRODUCTS: 'product/others',
        ELECTONICS_PRODUCTS: 'product/electronics',
        BOOKS_PRODUCTS: 'product/books',
        BOOK_PRODUCT_ID: (id: string | number) => `product/books/${id}`,
        PRODUCT_ID: (id: string | number) => `product/${id}`,
        RELATED: (id: string | number) => `product/${id}/related`,
        PRODUCT_METAS: 'product/meta',
        PRODUCT_BOOK_METAS: 'product/book-meta'
    },

    COLLECTION: {
        COLLECTIONS: 'collection',
        MEN_COLLECTIONS: 'collection/men',
    },

    CATEGORY: {
        TRENDING_FASHION_CATEGORY: 'category/trending-fashion',
        BRANDS: 'category/brands',
        TOP_COLLECTIONS: 'top-categories',
    },

    ELECTRONICS: {
        CATEGORY: "electronics/category",
        TOP_CATEGORY: "electronics/category/top",
        TOP_PRODUCTS: "electronics/top-products"
    },

    SPORT: {
        APPAREL: 'sport/apparel',
        INSTAGRAM: 'sport/instagram',
    }
};
