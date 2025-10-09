import { create } from 'zustand';
import {
    categorySectionContent,
    CategorySectionItem,
} from './categorySectionMockData';

type CartStore = {
    items: CategorySectionItem[];
    setStore: (newItems: CategorySectionItem[]) => void;
};

export const useCategorySectionContentStore = create<CartStore>((set) => ({
    items: [...categorySectionContent],
    setStore: (newItems) => set({ items: newItems }),
}));
