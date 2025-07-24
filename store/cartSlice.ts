import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, CartType, ProductType } from '@/types';

const initialState: CartType = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const calculateTotals = (items: CartItemType[]) => {

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalAmount = items.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0
    );

    return { totalQuantity, totalAmount };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(state, action: PayloadAction<ProductType>) {

            const existing = state.items.find(i => i.product.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ product: action.payload, quantity: 1 });
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
