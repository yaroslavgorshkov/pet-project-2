import { CategorySectionMenuButton } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuButton';
import { CategorySectionMenuHamburgerButton } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuHamburgerButton';
import { CategorySectionMenuNavigationList } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationList';
import { CategorySectionMenuSearch } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuSearch';
import { CategorySectionMenuHamburgerMenu } from './CategorySectionMenuHamburgerMenu';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const CategorySectionMenu = () => {
    const [activeElementId, setActiveElementId] = useState(0);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    return (
        <>
            <div className="flex gap-3xl w-full md:hidden">
                <CategorySectionMenuSearch />
                <CategorySectionMenuHamburgerButton
                    setIsCategorySectionMenuHamburgerMenuOpen={
                        setIsHamburgerMenuOpen
                    }
                />
                <AnimatePresence>
                    {isHamburgerMenuOpen && (
                        <CategorySectionMenuHamburgerMenu
                            activeElementId={activeElementId}
                            setActiveElementId={setActiveElementId}
                            setIsCategorySectionMenuHamburgerMenuOpen={
                                setIsHamburgerMenuOpen
                            }
                        />
                    )}
                </AnimatePresence>
            </div>
            <div className="hidden flex-col gap-3xl items-center md:flex xl:items-start xl:gap-11xl">
                <CategorySectionMenuSearch />
                <CategorySectionMenuNavigationList />
                <CategorySectionMenuButton />
            </div>
        </>
    );
};
