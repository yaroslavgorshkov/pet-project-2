import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '../headerMockData';
import { HeaderNavigationListItem } from '../HeaderNavigationList/HeaderNavigationListItem';
import { cn } from '@/helpers/cn';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

type HeaderHamburgerMenuProps = {
    setIsHeaderHamburgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeElementId: number;
    setActiveElementId: React.Dispatch<React.SetStateAction<number>>;
};

export const HeaderHamburgerMenu = ({
    setIsHeaderHamburgerMenuOpen,
    activeElementId,
    setActiveElementId,
}: HeaderHamburgerMenuProps) => {
    const handleHeaderHamburgerMenuBackgroundClick = () => {
        setIsHeaderHamburgerMenuOpen((prev) => !prev);
    };

    const handleHeaderHamburgerMenuKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>
    ): void => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleHeaderHamburgerMenuBackgroundClick();
        }
    };

    const headerHamburgerMenuNavigationListNavClass = cn(
        'rounded-xl',
        'lg:rounded-3xl',
        'flex',
        'items-center',
        'justify-center',
        'bg-mint',
        'shadow-xl',
        'py-el-xl',
        'px-el-5xl',
        'md:w-full',
        'max-w-lg'
    );

    const headerHamburgerMenuNavigationListUlClass = cn(
        'flex',
        'flex-col',
        'items-center',
        'gap-5xl'
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
            className="fixed inset-0 bg-black bg-opacity-20 z-50 border-0 xl:hidden backdrop-blur-sm flex items-center justify-center p-el-3xl lg:p-el-8xl cursor-default"
            onClick={handleHeaderHamburgerMenuBackgroundClick}
            onKeyDown={handleHeaderHamburgerMenuKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <NavigationList
                renderListItem={({ id, href, text, isHighlighted }) => (
                    <HeaderNavigationListItem
                        text={text}
                        href={href}
                        isHighlighted={isHighlighted}
                        id={id}
                        setActiveElementId={setActiveElementId}
                        fontSize={'3xl'}
                    />
                )}
                navigationListContent={navigationListContent}
                highlightedElementId={activeElementId}
                ulClassName={headerHamburgerMenuNavigationListUlClass}
                navClassName={headerHamburgerMenuNavigationListNavClass}
            />
        </motion.div>,
        document.body
    );
};
