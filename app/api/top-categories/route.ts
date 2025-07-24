import { NextResponse } from 'next/server'
import { categoryData, categoryDataTwo } from '@/data'

export async function GET() {
    return NextResponse.json({
        category_1: categoryData,
        category_2: categoryDataTwo,
    })
}
