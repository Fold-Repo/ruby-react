import { NextResponse } from 'next/server'
import { collections } from '@/data'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const limitParam = searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam, 10) : undefined

    const limitedData = typeof limit === 'number' && !isNaN(limit)
        ? collections.slice(0, limit)
        : collections

    return NextResponse.json(limitedData)
}
