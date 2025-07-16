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