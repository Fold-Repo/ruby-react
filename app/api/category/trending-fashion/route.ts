import { NextResponse } from 'next/server'
import { trendingFashionData } from '@/data'

export async function GET() {
    return NextResponse.json(trendingFashionData)
}
