import { IconButton } from '@/core/Button/IconButton';
import { useCartStore } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/shoppingCartStore';
import { Text } from '@/core/Text/Text';

type HeaderIconsBarShoppingCartButtonProps = {
    setIsHeaderIconsBarShoppingCartOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const HeaderIconsBarShoppingCartButton = ({
    setIsHeaderIconsBarShoppingCartOpen,
}: HeaderIconsBarShoppingCartButtonProps) => {
    const handleHeaderIconsBarShoppingCartButtonClick = () => {
        setIsHeaderIconsBarShoppingCartOpen((prev) => !prev);
    };

    const { getAllProductsQuantity, hasHydrated } = useCartStore();
    const allProductsQuantity = hasHydrated
        ? getAllProductsQuantity().toString()
        : '0';

    return (
        <div className="relative">
            <div className="md:hidden">
                <IconButton
                    iconType={'shopping-cart'}
                    iconFillColor={'lapis'}
                    iconSize={'3xl'}
                    onClick={handleHeaderIconsBarShoppingCartButtonClick}
                />
            </div>
            <div className="hidden md:block">
                <IconButton
                    iconType={'shopping-cart'}
                    iconFillColor={'lapis'}
                    iconSize={'5xl'}
                    onClick={handleHeaderIconsBarShoppingCartButtonClick}
                />
            </div>
            <div className="absolute rounded-half bg-mint w-el-2xs h-el-xs flex justify-center items-center left-full top-full -translate-x-1/2 -translate-y-1/2">
                <Text
                    fontSize={'xs'}
                    fontFamily={'opensans'}
                    color={'white'}
                    content={allProductsQuantity}
                />
            </div>
        </div>
    );
};
