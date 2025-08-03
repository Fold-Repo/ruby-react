export type ColorType = {
    name: string;
    hex: string;
    image: string;
};

export type RatingBreakdownType = {
    [stars: number]: number;
};

export type ProductReviewType = {
    id: string;
    user: {
        name: string;
        avatar?: string;
    };
    rating: number;
    comment: string;
    createdAt: string;
};

export type MaterialType = {
    name: string;
    price: number;
    image: string;
};

export type DiscountType = {
    id: string | number;
    title?: string;          
    percentage: number;           
    description?: string; 
    active?: boolean;   
};


export type ProductType = {
    id: number | string;
    title: string;
    category: string;
    brand: string;
    description: string;
    price: number;
    oldPrice?: number;
    inStock: boolean;
    sizes?: string[];
    images: string[];
    colors?: ColorType[];
    ratingAverage: number;
    ratingTotal: number;
    stock?: number;

    sku?: string;
    tags?: string[];
    deliveryEstimate?: string;
    vendor?: {
        id: string;
        name: string;
    };
    shipping?: {
        freeShipping: boolean;
        weight?: string;
        dimensions?: string;
    };

    ratingsBreakdown?: RatingBreakdownType;
    reviews?: ProductReviewType[];
    frequentlyBoughtTogether?: ProductType[]
    group?: ProductType[]
    materials?: MaterialType[];
    discounts?:  DiscountType[]
};

export type ProductStyleType =
    | "style1"
    | "style2"
    | "style3"
    | "style4"
    | "style5"
    | "style6"
    | "style7";
