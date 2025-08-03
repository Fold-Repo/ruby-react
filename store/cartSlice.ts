import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, CartType, MaterialType, ProductType, SubType } from '@/types';

const initialState: CartType = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const calculateTotals = (items: CartItemType[]) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => {
        const basePrice = item.price ?? item.product.price;
        const discount = item.discountPercent ?? 0;
        const discountedPrice = basePrice * (1 - discount / 100);
        return sum + discountedPrice * item.quantity;
    }, 0);
    return { totalQuantity, totalAmount };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(
            state,
            action: PayloadAction<{
                product: ProductType;
                selectedColor?: string;
                selectedSize?: string;
                selectedMaterial?: MaterialType;
                quantity?: number;
                price?: number;
                discountPercent?: number;
                subscription?: SubType;
                customerNote?: {
                    note?: string;
                    file?: File | null;
                };
            }>
        ) {
            const {
                product,
                selectedColor,
                selectedSize,
                selectedMaterial,
                price,
                quantity = 1,
                discountPercent,
                subscription,
                customerNote,
            } = action.payload;

            const cleanColor = selectedColor?.trim() || undefined;
            const cleanSize = selectedSize?.trim() || undefined;
            const cleanNote = customerNote?.note?.trim() || undefined;
            const cleanFile = customerNote?.file || null;
            const materialName = selectedMaterial?.name || undefined;

            const existing = state.items.find(
                (i) =>
                    i.product.id === product.id &&
                    i.selectedColor === cleanColor &&
                    i.selectedSize === cleanSize &&
                    i.selectedMaterial?.name === materialName &&
                    i.customerNote?.note === cleanNote &&
                    (i.customerNote?.file?.name || '') === (cleanFile?.name || '') &&
                    i.discountPercent === discountPercent
            );

            if (existing) {
                existing.quantity += quantity;
            } else {
                state.items.push({
                    product,
                    quantity,
                    ...(cleanColor && { selectedColor: cleanColor }),
                    ...(cleanSize && { selectedSize: cleanSize }),
                    ...(selectedMaterial && { selectedMaterial }),
                    ...(typeof price === 'number' && { price }),
                    ...(subscription && { subscription }),
                    ...(typeof discountPercent === 'number' && { discountPercent }),
                    ...(customerNote && {
                        customerNote: {
                            ...(cleanNote && { note: cleanNote }),
                            ...(cleanFile && { file: cleanFile }),
                        },
                    }),
                });
            }

            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;
        },

        removeFromCart(state, action: PayloadAction<number | string>) {
            state.items = state.items.filter(i => i.product.id !== action.payload);

            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;
        },

        updateCart(
            state,
            action: PayloadAction<{
                productId: number | string;
                selectedSize?: string;
                selectedColor?: string;
                quantity?: number;
            }>
        ) {

            const item = state.items.find(i => i.product.id === action.payload.productId);

            if (item) {
                if (typeof action.payload.quantity === 'number') {
                    item.quantity = action.payload.quantity;
                }
                item.selectedColor = action.payload.selectedColor;
                item.selectedSize = action.payload.selectedSize;
            }

            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateCart, clearCart } = cartSlice.actions;

export const selectCart = (state: { cart: CartType }) => state.cart;
export const selectCartItems = (state: { cart: CartType }) => state.cart.items;
export const selectCartQuantity = (state: { cart: CartType }) => state.cart.totalQuantity;
export const selectCartAmount = (state: { cart: CartType }) => state.cart.totalAmount;


export default cartSlice.reducer;
