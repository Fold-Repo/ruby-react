import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@/types';

type ProductState = {
    recentViews: ProductType[];
};

const initialState: ProductState = {
    recentViews: [],
};

const MAX_RECENT_ITEMS = 10;

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToRecentViews(state, action: PayloadAction<ProductType>) {
            
            if (!action.payload || !action.payload.id) {
                console.error('Invalid product added to recent views', action.payload);
                return state; 
            }

            let updatedRecentViews = [...state.recentViews];
        
            const existingIndex = updatedRecentViews.findIndex(
                item => item && item.id === action.payload.id
            );

            if (existingIndex !== -1) {
                updatedRecentViews.splice(existingIndex, 1);
            }

            updatedRecentViews.unshift(action.payload);

            if (updatedRecentViews.length > MAX_RECENT_ITEMS) {
                updatedRecentViews = updatedRecentViews.slice(0, MAX_RECENT_ITEMS);
            }

            return {
                ...state,
                recentViews: updatedRecentViews
            };
        },

        clearRecentViews(state) {
            state.recentViews = [];
        },
    },
});

export const { addToRecentViews, clearRecentViews } = productSlice.actions;
export const selectRecentViews = (state: { product: ProductState }) => state.product.recentViews;

export default productSlice.reducer;
