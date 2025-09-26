import { IconButton } from '@/core/Button/IconButton';

export const HeaderIconsBarShoppingCartButton = () => {
    const handleHeaderIconsBarShoppingCartButtonClick = () => {
        // TODO: add HeaderIconsBarShoppingCartButton click function
    };

    return (
        <>
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
        </>
    );
};
