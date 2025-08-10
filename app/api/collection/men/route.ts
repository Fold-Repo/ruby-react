import { NextResponse } from 'next/server'
import { menCollectionData } from '@/data'

export async function GET() {
    return NextResponse.json(menCollectionData)
}
