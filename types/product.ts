export type ColorType = {
    name: string;
    hex: string;
    image: string;
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
    colors?: {
        name: string;
        hex: string;
        image: string;
    }[];
    ratingAverage: number;
    ratingTotal: number;
    stock?: number;
};

export type ProductStyleType =
    | "style1"
    | "style2"
    | "style3"
    | "style4"
    | "style5"
    | "style6"
    | "style7";
    