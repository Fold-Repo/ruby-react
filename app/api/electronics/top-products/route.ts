import { NextResponse } from 'next/server'
import { electTopProducts } from '@/data'

export async function GET() {
    return NextResponse.json(electTopProducts)
}
