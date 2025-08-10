import { NextResponse } from 'next/server'
import { instagramProducts } from '@/data'

export async function GET() {
    return NextResponse.json(instagramProducts)
}
