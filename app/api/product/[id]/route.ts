import { NextRequest, NextResponse } from 'next/server';
import { discount, products, skinCareProducts, sportProducts } from '@/data';
import { ProductType } from '@/types';

type RelatedProduct = Pick<
    ProductType,
    'id' | 'title' | 'description' | 'price' | 'oldPrice' | 'images' | 'sizes' | 'colors'
>;

type ResponseData = {
    product: ProductType;
    related: RelatedProduct;
    frequentlyBoughtTogether?: RelatedProduct[];
    group?: RelatedProduct[];
};

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const allProducts: ProductType[] = [
        ...products,
        ...skinCareProducts,
        ...sportProducts,
    ];

    const product = allProducts.find((p) => String(p.id) === id);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Add discount if product ID is 3
    if (String(product.id) === '3') {
        product.discounts = discount;
    }

    const otherProducts = products.filter((p) => String(p.id) !== id);
    const randomRelated = otherProducts[Math.floor(Math.random() * otherProducts.length)];

    const related: RelatedProduct = {
        id: randomRelated.id,
        title: randomRelated.title,
        description: randomRelated.description,
        price: randomRelated.price,
        oldPrice: randomRelated.oldPrice,
        images: randomRelated.images,
        sizes: randomRelated.sizes,
        colors: randomRelated.colors,
    };

    const responseData: ResponseData = {
        product,
        related,
    };

    if (String(product.id) === '5') {
        const shuffled = otherProducts.sort(() => 0.5 - Math.random());
        responseData.frequentlyBoughtTogether = shuffled.slice(0, 3).map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            oldPrice: p.oldPrice,
            images: p.images,
            sizes: p.sizes,
            colors: p.colors,
        }));
    }

    const group = [...otherProducts]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            oldPrice: p.oldPrice,
            images: p.images,
            sizes: p.sizes,
            colors: p.colors,
        }));

    responseData.group = group;

    return NextResponse.json(responseData);
}
