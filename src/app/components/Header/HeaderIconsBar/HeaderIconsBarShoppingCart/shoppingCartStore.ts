'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
    id: string;
    name: string;
    price: number;
    imgSrc: string;
    quantity: number;
};

type CartStore = {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    increaseCartItemQuantity: (id: string) => void;
    decreaseCartItemQuantity: (id: string) => void;
    setItemQuantity: (id: string, newQuantity: number) => void;
    clearCart: () => void;
    getTotalSum: () => number;
    getItemTotalPrice: (id: string) => number;
    deleteFromCart: (id: string) => void;
    getAllProductsQuantity: () => number;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addToCart: (newItem) => {
                set((state) => {
                    const isItemAlreadyExist = state.items.find(
                        (item) => item.id === newItem.id
                    );
                    if (isItemAlreadyExist) {
                        return {
                            items: state.items.map((item) =>
                                item.id === newItem.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return {
                        items: [...state.items, { ...newItem, quantity: 1 }],
                    };
                });
            },
            clearCart: () => set({ items: [] }),
            increaseCartItemQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),
            getTotalSum: () =>
                get().items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                ),
            decreaseCartItemQuantity: (id) =>
                set((state) => {
                    const foundItem = state.items.find(
                        (item) => item.id === id
                    );
                    if (!foundItem) {
                        return { items: state.items };
                    }
                    if (foundItem.quantity <= 1) {
                        return { items: get().items };
                    }
                    return {
                        items: state.items.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    };
                }),
            getItemTotalPrice: (id) => {
                const item = get().items.find((item) => item.id === id);
                return item ? item.price * item.quantity : 0;
            },
            setItemQuantity: (id, newQuantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: newQuantity }
                            : item
                    ),
                })),
            deleteFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            getAllProductsQuantity: () =>
                get().items.reduce((acc, item) => acc + item.quantity, 0),
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ items: state.items }),
        }
    )
);
