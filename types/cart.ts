import { ProductType } from "./product";

export type CartItemType = {
    product: ProductType;
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
};

export type CartType = {
    items: CartItemType[];
    totalAmount: number;
    totalQuantity: number;
};
