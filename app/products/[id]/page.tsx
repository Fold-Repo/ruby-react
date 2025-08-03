import { ProductDetailsView } from '@/views/products';

// const getProductId = async (id: string | number) => {
//     const res = await fetch(`${API_BASE_URL}${ENDPOINT.PRODUCT.PRODUCT_ID(id)}`, {
//         cache: 'no-store',
//     });

//     if (!res.ok) {
//         throw new Error('Failed to fetch product');
//     }

//     return res.json();
// };

// export async function generateMetadata({ params, }: { params: Promise<{ id: string }> }) {
//     const productData = await getProductId((await params).id);
//     const title = productData?.product?.title || 'Product Details';
//     return {
//         title,
//     };
// }

export default async function page({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    return <ProductDetailsView productId={id} />
}