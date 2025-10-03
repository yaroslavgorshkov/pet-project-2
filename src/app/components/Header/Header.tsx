import { HeaderNavigationList } from '@/Header/HeaderNavigationList/HeaderNavigationList';
import { HeaderIconsBar } from '@/Header/HeaderIconsBar/HeaderIconsBar';
import { HeaderLogo } from '@/Header/HeaderLogo';
import { HeaderHamburgerMenuButton } from '@/Header/HeaderHamburgerMenu/HeaderHamburgerMenuButton';
import { useState } from 'react';
import { HeaderHamburgerMenu } from './HeaderHamburgerMenu/HeaderHamburgerMenu';
import { AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [activeElementId, setActiveElementId] = useState(0);

    const [isHeaderHamburgerMenuOpen, setIsHeaderHamburgerMenuOpen] =
        useState(false);

    return (
        <header className="fixed w-full z-50">
            <div className="flex px-section-sm py-section-lg backdrop-blur-md bg-header shadow-lg justify-between md:px-section-md lg:px-section-xl xl:hidden">
                <HeaderHamburgerMenuButton
                    setIsHeaderHamburgerMenuOpen={setIsHeaderHamburgerMenuOpen}
                />
                <AnimatePresence>
                    {isHeaderHamburgerMenuOpen && (
                        <HeaderHamburgerMenu
                            setIsHeaderHamburgerMenuOpen={
                                setIsHeaderHamburgerMenuOpen
                            }
                            activeElementId={activeElementId}
                            setActiveElementId={setActiveElementId}
                        />
                    )}
                </AnimatePresence>
                <HeaderLogo setActiveElementId={setActiveElementId} />
                <HeaderIconsBar />
            </div>
            <div className="hidden px-section-7xl py-section-lg backdrop-blur-md bg-header shadow-lg justify-between xl:flex">
                <HeaderLogo setActiveElementId={setActiveElementId} />
                <HeaderNavigationList
                    activeElementId={activeElementId}
                    setActiveElementId={setActiveElementId}
                />
                <HeaderIconsBar />
            </div>
        </header>
    );
};
