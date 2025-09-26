import { CategorySectionMenuButton } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuButton';
import { CategorySectionMenuHamburgerButton } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuHamburgerButton';
import { CategorySectionMenuNavigationList } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationList';
import { CategorySectionMenuSearch } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuSearch';

export const CategorySectionMenu = () => {
    return (
        <>
            <div className="flex gap-3xl w-full md:hidden">
                <CategorySectionMenuSearch />
                <CategorySectionMenuHamburgerButton />
            </div>
            <div className="hidden flex-col gap-3xl items-center md:flex xl:items-start xl:gap-11xl">
                <CategorySectionMenuSearch />
                <CategorySectionMenuNavigationList />
                <CategorySectionMenuButton />
            </div>
        </>
    );
};
