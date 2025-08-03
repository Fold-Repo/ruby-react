import { MaterialType, ProductType } from "./product";

export type CartItemType = {
    product: ProductType;
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
    customerNote?: {
        note?: string;
        file?: File | null;
    };
    subscription?: SubType;
    selectedMaterial?: MaterialType;
    price?: number;
    discountPercent?: number;
};

export type CartType = {
    items: CartItemType[];
    totalAmount: number;
    totalQuantity: number;
};


export type SubType = {
    type: 'one-time' | 'subscribe';
    quantity?: number;
    discountPercent?: number;
    occurrence?: number;
}