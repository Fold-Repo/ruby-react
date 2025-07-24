import { NextResponse } from 'next/server'
import { collections } from '@/data'

export async function GET() {
    return NextResponse.json(collections)
}
