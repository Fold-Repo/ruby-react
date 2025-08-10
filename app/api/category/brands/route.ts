import { NextResponse } from 'next/server'
import { brands } from '@/data'

export async function GET() {
    return NextResponse.json(brands)
}
