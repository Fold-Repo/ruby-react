import { NextRequest, NextResponse } from 'next/server';
import { posts } from '@/data';
import { paginate } from '@/utils/paginate';
import { PostType } from '@/types';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const latest = searchParams.get('latest') === 'true';
    const category = searchParams.get('category')?.toLowerCase();
    const tag = searchParams.get('tags')?.toLowerCase();

    let data: PostType[] = [...posts];

    // Filter by category
    if (category) {
        data = data.filter(
            (post) => post.category?.toLowerCase() === category
        );
    }

    // Filter by tag
    if (tag) {
        const tags = tag.toLowerCase().split(",");
        data = data.filter((post) =>
            post.tags?.some((t) => tags.includes(t.toLowerCase()))
        );
    }
    // Sort by latest date 
    if (latest) {
        data = [...data]
            .sort(
                (a, b) =>
                    new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
            )
            .slice(0, 3);

        return NextResponse.json({ data });
    }

    const paginated = paginate<PostType>(data, { page, limit });

    return NextResponse.json(paginated);
}
