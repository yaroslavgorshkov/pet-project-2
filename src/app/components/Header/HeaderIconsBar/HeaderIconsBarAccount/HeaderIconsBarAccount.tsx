/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconButton } from '@/core/Button/IconButton';
import { Text } from '@/core/Text/Text';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HeaderIconsBarAccountForm } from './HeaderIconsBarAccountForm';
import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import Image from 'next/image';

type HeaderIconsBarAccountProps = {
    setIsHeaderIconsBarAccountOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const HeaderIconsBarAccount = ({
    setIsHeaderIconsBarAccountOpen,
}: HeaderIconsBarAccountProps) => {
    const handleHeaderIconsBarAccountBackgroundClick = () => {
        setIsHeaderIconsBarAccountOpen((prev) => !prev);
    };

    const handleHeaderIconsBarAccountCloseButtonClick = () => {
        handleHeaderIconsBarAccountBackgroundClick();
    };

    const handleGoogleLogin = () => {
        alert('User has sent to auth page, token has gotten!');
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsHeaderIconsBarAccountOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [setIsHeaderIconsBarAccountOpen]);

    const googleButtonProps: Omit<ButtonProps, 'children'> = {
        variant: 'contained',
        buttonSize: 'sm',
        backgroundColor: 'white',
        borderRadius: 'md',
        endIcon: {
            iconFillColor: 'black',
            iconSize: '4xl',
            iconType: 'google-icon',
        },
        className: 'border',
        onClick: handleGoogleLogin,
    };

    return createPortal(
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-50 border-0 backdrop-blur-sm flex items-center justify-center p-el-3xl lg:p-el-8xl cursor-default"
            role="button"
            onClick={handleHeaderIconsBarAccountBackgroundClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="flex flex-col gap-md bg-white rounded-xl shadow-xl p-el-xl w-full max-w-md md:max-w-lg lg:hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between pb-el-sm border-b">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'absolute-black'}
                        content={'Sign in'}
                        fontWeight="bold"
                    />
                    <IconButton
                        iconType={'close-icon'}
                        iconFillColor={'lapis'}
                        iconSize={'2xl'}
                        onClick={handleHeaderIconsBarAccountCloseButtonClick}
                    />
                </div>
                <HeaderIconsBarAccountForm />
                <Text
                    fontSize={'md'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'Log in with Google:'}
                    className="mt-el-md"
                />
                <Button {...googleButtonProps}>
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'absolute-black'}
                        content={'Google'}
                    />
                </Button>
            </div>
            <div
                className="hidden lg:flex bg-white rounded-xl shadow-xl w-full max-w-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grow-4 basis-0 relative">
                    <Image
                        src={'/img/account-menu-image.jpg'}
                        alt={'Account Menu Image'}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="30vw"
                        className="rounded-l-xl"
                    />
                </div>
                <div className="grow-6 basis-0 flex flex-col gap-md p-el-xl">
                    <div className="flex justify-between pb-el-sm border-b">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'opensans'}
                            color={'absolute-black'}
                            content={'Sign in'}
                            fontWeight="bold"
                        />
                        <IconButton
                            iconType={'close-icon'}
                            iconFillColor={'lapis'}
                            iconSize={'2xl'}
                            onClick={
                                handleHeaderIconsBarAccountCloseButtonClick
                            }
                        />
                    </div>
                    <HeaderIconsBarAccountForm />
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'absolute-black'}
                        content={'Log in with Google:'}
                        className="mt-el-md"
                    />
                    <Button {...googleButtonProps}>
                        <Text
                            fontSize={'lg'}
                            fontFamily={'roboto'}
                            color={'absolute-black'}
                            content={'Google'}
                        />
                    </Button>
                </div>
            </div>
        </motion.div>,
        document.body
    );
};
