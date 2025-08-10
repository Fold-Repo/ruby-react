import { otherProducts } from "@/data";
import { ProductType } from "@/types";
import { paginate } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    // Get all filter parameters
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const sort = searchParams.get('sort')?.toLowerCase() || '';

    const filteredProducts = otherProducts;

    if (sort === 'asc') {
        filteredProducts.sort((a, b) => Number(a.id) - Number(b.id));
    } else if (sort === 'desc') {
        filteredProducts.sort((a, b) => Number(b.id) - Number(a.id));
    }

    const paginated = paginate<ProductType>(filteredProducts, { page, limit });

    return NextResponse.json(paginated);

}