import React from 'react';
import CartList from './CartList';
import { CartItemType } from '@/types';

const CartItem = ({ carts }: { carts: CartItemType[] }) => {
    return (
        <div className="w-full">

            <div className="hidden lg:grid grid-cols-2 py-3 font-semibold text-base text-black dark:text-gray-100">
                <div>Product</div>
                <div className="flex items-center justify-between">
                    <span className="w-full max-w-[200px] text-center">Price</span>
                    <span className="w-full max-w-[260px] text-center">Quantity</span>
                    <span className="w-full max-w-[200px] text-center">Subtotal</span>
                </div>
            </div>

            {/* Cart items */}
            {carts?.map((cart, index) => (
                <CartList cart={cart} key={index} />
            ))}

        </div>
    );
};

export default CartItem;
