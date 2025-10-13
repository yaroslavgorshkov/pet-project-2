import { HeaderIconsBarAccountButton } from '@/Header/HeaderIconsBar/HeaderIconsBarAccount/HeaderIconsBarAccountButton';
import { HeaderIconsBarSearchButton } from '@/Header/HeaderIconsBar/HeaderIconsBarSearch/HeaderIconsBarSearchButton';
import { HeaderIconsBarShoppingCartButton } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/HeaderIconsBarShoppingCartButton';
import { useState } from 'react';
import { HeaderIconsBarAccount } from '@/Header/HeaderIconsBar/HeaderIconsBarAccount/HeaderIconsBarAccount';
import { AnimatePresence } from 'framer-motion';
import { HeaderIconsBarSearchMenu } from '@/Header/HeaderIconsBar/HeaderIconsBarSearch/HeaderIconsBarSearchMenu';
import { HeaderIconsBarShoppingCart } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/HeaderIconsBarShoppingCart';

export const HeaderIconsBar = () => {
    const [isHeaderIconsBarAccountOpen, setIsHeaderIconsBarAccountOpen] =
        useState(false);

    const [isHeaderIconsBarSearchMenuOpen, setIsHeaderIconsBarSearchMenuOpen] =
        useState(false);

    const [
        isHeaderIconsBarShoppingCartOpen,
        setIsHeaderIconsBarShoppingCartOpen,
    ] = useState(false);

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
            <HeaderIconsBarShoppingCartButton
                setIsHeaderIconsBarShoppingCartOpen={
                    setIsHeaderIconsBarShoppingCartOpen
                }
            />
            <AnimatePresence>
                {isHeaderIconsBarShoppingCartOpen && (
                    <HeaderIconsBarShoppingCart
                        setIsHeaderIconsBarShoppingCartOpen={
                            setIsHeaderIconsBarShoppingCartOpen
                        }
                    />
                )}
            </AnimatePresence>
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
