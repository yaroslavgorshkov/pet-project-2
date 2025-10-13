import { NavigationList } from '@/core/NavigationList/NavigationList';
import { CategorySectionMenuNavigationListItem } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListItem';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { categorySectionMenuNavigationListContent } from '@/CategorySection/categorySectionMockData';
import { cn } from '@/helpers/cn';

type CategorySectionMenuHamburgerMenuProps = {
    setIsCategorySectionMenuHamburgerMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    activeElementId: number;
    setActiveElementId: React.Dispatch<React.SetStateAction<number>>;
};

export const CategorySectionMenuHamburgerMenu = ({
    setIsCategorySectionMenuHamburgerMenuOpen,
    activeElementId,
    setActiveElementId,
}: CategorySectionMenuHamburgerMenuProps) => {
    const handleCategorySectionMenuHamburgerMenuBackgroundClick = () => {
        setIsCategorySectionMenuHamburgerMenuOpen((prev) => !prev);
    };

    const handleCategorySectionMenuHamburgerMenuKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>
    ): void => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleCategorySectionMenuHamburgerMenuBackgroundClick();
        }
    };

    const headerHamburgerMenuNavigationListNavClass = cn(
        'rounded-xl',
        'flex',
        'items-center',
        'justify-center',
        'bg-mint',
        'shadow-xl',
        'p-el-xl',
        'max-w-lg'
    );

    const headerHamburgerMenuNavigationListUlClass = cn(
        'flex',
        'flex-col',
        'gap-xl',
        'h-dvh',
        'max-h-xs',
        'flex-wrap',
        'justify-center',
        'items-center',
        'min-w-sm'
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return createPortal(
        <motion.div
            role="button"
            tabIndex={0}
            className="fixed inset-0 bg-black bg-opacity-20 z-50 border-0 md:hidden backdrop-blur-sm flex items-center justify-center cursor-default"
            onClick={handleCategorySectionMenuHamburgerMenuBackgroundClick}
            onKeyDown={handleCategorySectionMenuHamburgerMenuKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <NavigationList
                renderListItem={({ id, href, text, isHighlighted }) => (
                    <CategorySectionMenuNavigationListItem
                        text={text}
                        href={href}
                        isHighlighted={isHighlighted}
                        id={id}
                        setActiveElementId={setActiveElementId}
                        fontSize={'sm'}
                    />
                )}
                navigationListContent={categorySectionMenuNavigationListContent}
                highlightedElementId={activeElementId}
                ulClassName={headerHamburgerMenuNavigationListUlClass}
                navClassName={headerHamburgerMenuNavigationListNavClass}
            />
        </motion.div>,
        document.body
    );
};
