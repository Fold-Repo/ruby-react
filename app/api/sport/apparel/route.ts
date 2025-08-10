import { NextResponse } from 'next/server'
import { apparelData } from '@/data'

export async function GET() {
    return NextResponse.json(apparelData)
}
