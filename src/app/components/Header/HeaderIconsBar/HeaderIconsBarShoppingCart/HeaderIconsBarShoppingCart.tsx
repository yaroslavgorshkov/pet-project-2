/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconButton } from '@/core/Button/IconButton';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useCartStore } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/shoppingCartStore';
import { HeaderIconsBarShoppingCartItem } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/HeaderIconsBarShoppingCartItem';
import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { createPortal } from 'react-dom';

type HeaderIconsBarShoppingCartProps = {
    setIsHeaderIconsBarShoppingCartOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const HeaderIconsBarShoppingCart = ({
    setIsHeaderIconsBarShoppingCartOpen,
}: HeaderIconsBarShoppingCartProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsHeaderIconsBarShoppingCartOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [setIsHeaderIconsBarShoppingCartOpen]);

    const handleHeaderIconsBarShoppingCartBackgroundClick = () => {
        setIsHeaderIconsBarShoppingCartOpen((prev) => !prev);
    };

    const handleHeaderIconsBarShoppingCartCloseButtonClick = () => {
        handleHeaderIconsBarShoppingCartBackgroundClick();
    };

    const { clearCart, getTotalSum, items, hasHydrated } = useCartStore();

    const totalSumText = `${getTotalSum()}$`;

    const isProceedAndClearCartButtonDisabled =
        items.length === 0 ? true : false;

    const headerIconsBarShoppingCartProceedButtonProps: Omit<
        ButtonProps,
        'children'
    > = {
        variant: 'contained',
        endIcon: {
            iconFillColor: 'absolute-white',
            iconSize: 'md',
            iconType: 'arrow-right',
        },
        backgroundColor: 'mint',
        borderRadius: 'md',
        buttonSize: 'sm',
        disabled: isProceedAndClearCartButtonDisabled,
        className: 'disabled:opacity-20',
        onClick: () => alert('Proceed to checkout'),
    };

    const headerIconsBarShoppingCartClearCartButtonProps: Omit<
        ButtonProps,
        'children'
    > = {
        variant: 'secondary',
        onClick: () => clearCart(),
        borderRadius: 'md',
        endIcon: {
            iconType: 'delete-icon',
            iconFillColor: 'lapis',
            iconSize: '4xl',
        },
        className: 'disabled:opacity-20',
        disabled: isProceedAndClearCartButtonDisabled,
    };

    if (!hasHydrated) {
        return null;
    }

    return createPortal(
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-50 border-0 backdrop-blur-sm flex items-center justify-center p-el-3xl lg:p-el-8xl cursor-default"
            role="button"
            tabIndex={0}
            onClick={handleHeaderIconsBarShoppingCartBackgroundClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="flex flex-col bg-white rounded-xl shadow-xl py-el-sm md:py-el-lg w-full max-w-section-sm md:max-w-section-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between px-el-2xl items-center border-b pb-el-sm">
                    <div className="md:hidden">
                        <Text
                            fontSize={'xl'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Shopping Cart'}
                        />
                    </div>
                    <div className="hidden md:block">
                        <Text
                            fontSize={'3xl'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Shopping Cart'}
                        />
                    </div>
                    <div className="md:hidden">
                        <IconButton
                            iconType={'close-icon'}
                            iconFillColor={'lapis'}
                            iconSize={'4xl'}
                            onClick={
                                handleHeaderIconsBarShoppingCartCloseButtonClick
                            }
                        />
                    </div>
                    <div className="hidden md:block">
                        <IconButton
                            iconType={'close-icon'}
                            iconFillColor={'lapis'}
                            iconSize={'8xl'}
                            onClick={
                                handleHeaderIconsBarShoppingCartCloseButtonClick
                            }
                        />
                    </div>
                </div>
                <ul className="list-none m-0 p-el-sm md:p-el-lg flex flex-col md:items-center gap-lg overflow-auto h-dvh max-h-el-sm">
                    <AnimatePresence mode="popLayout">
                        {items.map(({ id, imgSrc, name, price, quantity }) => (
                            <HeaderIconsBarShoppingCartItem
                                key={id}
                                id={id}
                                name={name}
                                imgSrc={imgSrc}
                                price={price}
                                quantity={quantity}
                            />
                        ))}
                    </AnimatePresence>
                </ul>
                <div className="flex flex-col gap-sm md:gap-md items-center p-el-sm pb-0 border-t">
                    <Button {...headerIconsBarShoppingCartClearCartButtonProps}>
                        <div className="md:hidden">
                            <Text
                                fontSize={'sm'}
                                fontFamily={'playfair'}
                                color={'lapis'}
                                content={'Clear Cart'}
                            />
                        </div>
                        <div className="hidden md:block">
                            <Text
                                fontSize={'xl'}
                                fontFamily={'playfair'}
                                color={'lapis'}
                                content={'Clear Cart'}
                            />
                        </div>
                    </Button>
                    <div className="flex gap-sm md:hidden">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Total sum:'}
                        />
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            fontWeight={'bold'}
                            content={totalSumText}
                        />
                    </div>
                    <div className="hidden md:flex gap-sm">
                        <Text
                            fontSize={'xl'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Total sum:'}
                        />
                        <Text
                            fontSize={'xl'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={totalSumText}
                            fontWeight={'bold'}
                        />
                    </div>
                    <a href="#purchase">
                        <Button
                            {...headerIconsBarShoppingCartProceedButtonProps}
                        >
                            <div className="md:hidden">
                                <Text
                                    fontSize={'sm'}
                                    fontFamily={'playfair'}
                                    color={'white'}
                                    content={'Proceed to checkout'}
                                />
                            </div>
                            <div className="hidden md:block">
                                <Text
                                    fontSize={'xl'}
                                    fontFamily={'playfair'}
                                    color={'white'}
                                    content={'Proceed to checkout'}
                                />
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>,
        document.body
    );
};
