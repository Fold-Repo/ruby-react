import { CommentType } from "./global";

export type PostVariantType = 'detailed' | 'compact';

export interface PostType {
    id: number | string;
    title: string;
    description: string;
    imageUrl: string;
    imageUrlRight?: string;
    author: string;
    date?: string;
    views?: string;
    commentsCount: string;

    content?: string; 
    tags?: string[]; 
    category: string;
    shareData?: {
        title: string;
        text: string;
    }; 
    galleryImages?: string[]; 
    comments?: CommentType[];
}

