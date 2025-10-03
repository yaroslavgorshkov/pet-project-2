import { HeaderIconsBarAccountButton } from '@/Header/HeaderIconsBar/HeaderIconsBarAccount/HeaderIconsBarAccountButton';
import { HeaderIconsBarSearchButton } from '@/Header/HeaderIconsBar/HeaderIconsBarSearch/HeaderIconsBarSearchButton';
import { HeaderIconsBarShoppingCartButton } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCartButton';
import { useState } from 'react';
import { HeaderIconsBarAccount } from './HeaderIconsBarAccount/HeaderIconsBarAccount';
import { AnimatePresence } from 'framer-motion';
import { HeaderIconsBarSearchMenu } from './HeaderIconsBarSearch/HeaderIconsBarSearchMenu';

export const HeaderIconsBar = () => {
    const [isHeaderIconsBarAccountOpen, setIsHeaderIconsBarAccountOpen] =
        useState(false);

    const [isHeaderIconsBarSearchMenuOpen, setIsHeaderIconsBarSearchMenuOpen] =
        useState(false);

    return (
        <div className="gap-md flex order-2 items-center md:gap-9xl">
            <HeaderIconsBarSearchButton
                setIsHeaderIconsBarSearchMenuOpen={
                    setIsHeaderIconsBarSearchMenuOpen
                }
            />
            <AnimatePresence>
                {isHeaderIconsBarSearchMenuOpen && (
                    <HeaderIconsBarSearchMenu
                        setIsHeaderIconsBarSearchMenuOpen={
                            setIsHeaderIconsBarSearchMenuOpen
                        }
                    />
                )}
            </AnimatePresence>
            <HeaderIconsBarShoppingCartButton />
            <HeaderIconsBarAccountButton
                setIsHeaderIconsBarAccountOpen={setIsHeaderIconsBarAccountOpen}
            />
            <AnimatePresence>
                {isHeaderIconsBarAccountOpen && (
                    <HeaderIconsBarAccount
                        setIsHeaderIconsBarAccountOpen={
                            setIsHeaderIconsBarAccountOpen
                        }
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
