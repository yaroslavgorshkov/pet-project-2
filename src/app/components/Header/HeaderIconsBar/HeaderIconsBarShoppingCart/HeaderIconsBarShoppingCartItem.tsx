import Image from 'next/image';
import { Text } from '@/core/Text/Text';
import { IconButton } from '@/core/Button/IconButton';
import { useCartStore } from './shoppingCartStore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/helpers/cn';

type HeaderIconsBarShoppingCartItemProps = {
    id: string;
    name: string;
    imgSrc: string;
    price: number;
    quantity: number;
};

export const HeaderIconsBarShoppingCartItem = ({
    id,
    imgSrc,
    name,
    price,
    quantity,
}: HeaderIconsBarShoppingCartItemProps) => {
    const {
        deleteFromCart,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
        getItemTotalPrice,
        setItemQuantity,
    } = useCartStore();

    const stringQuantity = quantity.toString();
    const [quantityInputValue, setQuantityInputValue] =
        useState(stringQuantity);

    useEffect(() => {
        setQuantityInputValue(stringQuantity);
    }, [stringQuantity]);

    const codeText = `code: ${id}`;
    const priceForOneText = `${price}$`;
    const totalPrice = `${getItemTotalPrice(id)}$`;

    const handleHeaderIconsBarShoppingCartItemDecreaseQuantityButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        decreaseCartItemQuantity(id);
    };

    const handleHeaderIconsBarShoppingCartItemIncreaseQuantityButtonClick = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        increaseCartItemQuantity(id);
    };

    const handleHeaderIconsBarShoppingCartItemInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value.trim();
        if (value === '') {
            setQuantityInputValue('');
            return;
        }
        if (value.length > 2) {
            return;
        }
        const parsed = Number(value);
        if (!Number.isNaN(parsed) && parsed > 0) {
            setQuantityInputValue(value);
        }
    };

    const handleHeaderIconsBarShoppingCartItemInputBlur = (
        e: React.FocusEvent<HTMLInputElement>
    ) => {
        const value = e.target.value.trim();
        const parsed = Number(value);

        if (!parsed || parsed < 1) {
            setItemQuantity(id, 1);
            setQuantityInputValue('1');
        } else {
            setItemQuantity(id, parsed);
            setQuantityInputValue(String(parsed));
        }
    };

    const isDecreaseButtonDisabled = quantity === 1;
    const isIncreaseButtonDisabled = quantity === 99;
    const increaseButtonClass = cn(
        isIncreaseButtonDisabled ? 'bg-light-mint' : 'bg-mint',
        'rounded-r-md',
        'md:rounded-r-lg',
        'border',
        'flex',
        'justify-center',
        'items-center',
        'w-el-2xs',
        'h-el-xs',
        'transition',
        'md:w-el-sm',
        'md:h-el-sm'
    );

    const decreaseButtonClass = cn(
        isDecreaseButtonDisabled ? 'bg-light-mint' : 'bg-mint',
        'rounded-l-md',
        'md:rounded-l-lg',
        'border',
        'flex',
        'justify-center',
        'items-center',
        'w-el-2xs',
        'h-el-xs',
        'transition',
        'md:w-el-sm',
        'md:h-el-sm'
    );

    const handleHeaderIconsBarShoppingCartItemDeleteItemButtonClick = () => {
        deleteFromCart(id);
    };

    return (
        <motion.li
            className="flex justify-between pb-section-sm border-b last:border-b-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-col flex-1 md:flex-none items-center justify-center gap-md pr-el-sm md:pr-el-3xl min-h-xs">
                <div className="relative w-image-sm h-image-sm md:w-image-md md:h-image-md">
                    <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        sizes="20vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="md:hidden">
                    <Text
                        fontSize={'xs'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={codeText}
                    />
                </div>
                <div className="hidden md:block">
                    <Text
                        fontSize={'sm'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={codeText}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between w-full max-w-xs md:max-w-none">
                <div className="md:hidden flex gap-md items-center justify-between">
                    <Text
                        fontSize={'sm'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={name}
                        fontWeight={'bold'}
                        className="max-w-2xs truncate"
                    />
                    <IconButton
                        iconType={'delete-icon'}
                        iconFillColor={'lapis'}
                        iconSize={'lg'}
                        onClick={
                            handleHeaderIconsBarShoppingCartItemDeleteItemButtonClick
                        }
                    />
                </div>
                <div className="hidden md:flex gap-md items-center justify-between">
                    <Text
                        fontSize={'xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={name}
                        fontWeight={'bold'}
                        className="max-w-sm truncate"
                    />
                    <IconButton
                        iconType={'delete-icon'}
                        iconFillColor={'lapis'}
                        iconSize={'3xl'}
                        onClick={
                            handleHeaderIconsBarShoppingCartItemDeleteItemButtonClick
                        }
                    />
                </div>
                <div className="flex gap-sm ">
                    <div className="md:hidden self-center">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Quantity:'}
                        />
                    </div>
                    <div className="hidden md:block self-center">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Quantity:'}
                        />
                    </div>
                    <form className="flex items-center">
                        <div className="md:hidden">
                            <div className={decreaseButtonClass}>
                                <IconButton
                                    iconType={'remove-icon'}
                                    iconFillColor={'white'}
                                    iconSize={'sm'}
                                    onClick={
                                        handleHeaderIconsBarShoppingCartItemDecreaseQuantityButtonClick
                                    }
                                    className="w-full h-full flex items-center justify-center"
                                    disabled={isDecreaseButtonDisabled}
                                />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className={decreaseButtonClass}>
                                <IconButton
                                    iconType={'remove-icon'}
                                    iconFillColor={'white'}
                                    iconSize={'xl'}
                                    onClick={
                                        handleHeaderIconsBarShoppingCartItemDecreaseQuantityButtonClick
                                    }
                                    className="w-full h-full flex items-center justify-center"
                                    disabled={isDecreaseButtonDisabled}
                                />
                            </div>
                        </div>
                        <input
                            name="quantity"
                            className="pb-el-2xs w-el-xs md:w-el-sm h-el-xs box-border md:h-full text-center bg-transparent border-y outline-none text-sm md:text-lg"
                            type="text"
                            value={quantityInputValue}
                            onChange={
                                handleHeaderIconsBarShoppingCartItemInputChange
                            }
                            onBlur={
                                handleHeaderIconsBarShoppingCartItemInputBlur
                            }
                        />
                        <div className="md:hidden">
                            <div className={increaseButtonClass}>
                                <IconButton
                                    iconType={'add-icon'}
                                    iconFillColor={'white'}
                                    iconSize={'sm'}
                                    onClick={
                                        handleHeaderIconsBarShoppingCartItemIncreaseQuantityButtonClick
                                    }
                                    className="w-full h-full flex items-center justify-center"
                                    disabled={isIncreaseButtonDisabled}
                                />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className={increaseButtonClass}>
                                <IconButton
                                    iconType={'add-icon'}
                                    iconFillColor={'white'}
                                    iconSize={'xl'}
                                    onClick={
                                        handleHeaderIconsBarShoppingCartItemIncreaseQuantityButtonClick
                                    }
                                    className="w-full h-full flex items-center justify-center"
                                    disabled={isIncreaseButtonDisabled}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex gap-sm items-center md:self-end">
                    <div className="md:hidden">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Price for:'}
                        />
                    </div>
                    <div className="hidden md:block">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Price for:'}
                        />
                    </div>
                    <div className="md:hidden">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={priceForOneText}
                            fontWeight={'bold'}
                        />
                    </div>
                    <div className="hidden md:block">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            fontWeight={'bold'}
                            content={priceForOneText}
                        />
                    </div>
                </div>
                <div className="flex gap-sm items-center md:self-end">
                    <div className="md:hidden">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Total price:'}
                        />
                    </div>
                    <div className="hidden md:block">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={'Total price:'}
                        />
                    </div>
                    <div className="md:hidden">
                        <Text
                            fontSize={'sm'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            content={totalPrice}
                            fontWeight={'bold'}
                        />
                    </div>
                    <div className="hidden md:block">
                        <Text
                            fontSize={'lg'}
                            fontFamily={'playfair'}
                            color={'lapis'}
                            fontWeight={'bold'}
                            content={totalPrice}
                        />
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
