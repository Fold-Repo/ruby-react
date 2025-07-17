import { NextResponse } from 'next/server';
import { posts } from '@/data';

export async function GET() {
    const allCategories = new Set<string>();
    const allTags = new Set<string>();

    for (const post of posts) {
        if (post.category) {
            allCategories.add(post.category);
        }
        if (Array.isArray(post.tags)) {
            post.tags.forEach((tag) => allTags.add(tag));
        }
    }

    return NextResponse.json({
        categories: Array.from(allCategories),
        tags: Array.from(allTags),
    });
}
