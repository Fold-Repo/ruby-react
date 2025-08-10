import { NextResponse } from 'next/server'
import { electTopCategories } from '@/data'

export async function GET() {
    return NextResponse.json(electTopCategories)
}
