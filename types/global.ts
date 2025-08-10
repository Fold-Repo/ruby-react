import { IconType } from "react-icons";

export type TimelineStatusType = "pending" | "in-progress" | "current" | "completed";

export interface TimelineStepType {
    title: string;
    description?: string;
    timestamp: string;
    status: TimelineStatusType;
    icon?: IconType;
}

export type CommentType = {
    id: number | string;
    avatar: string;
    name: string;
    date: string;
    message: string;
    replies?: CommentType[];
};

export interface FilterDataType {
    categories: {
        name: string;
        slug: string;
        count: number;
    }[];
    stockOptions: {
        id: string;
        label: string;
        count: number;
        checked?: boolean;
    }[];
    priceRange: {
        min: number;
        max: number;
    };
    sizes: string[];
    colors: {
        name: string;
        color: string;
    }[];
    brands: {
        id: string;
        label: string;
        count: number;
        checked?: boolean;
    }[];
}

export type CollectionType = {
    id: number | string
    img: string
    title: string
    subtitle: string
    alt?: string
}

export interface CategoryType {
    id: number | string;
    name: string;
    img: string;
}

export interface TestimonialType {
    name: string
    role?: string
    rating?: number
    message: string
    image?: string
    date?: string
}

export type TrendingFashionType = {
    id: number | string,
    image: string,
    title: string,
    desc: string
}