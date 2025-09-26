import { IconButton } from '@/core/Button/IconButton';

export const HeaderHamburgerMenuButton = () => {
    const handleHeaderHamburgerMenuButtonClick = () => {
        // TODO: add HeaderHamburgerMenuButton button click function
    };

    return (
        <>
            <div className="md:hidden">
                <IconButton
                    iconType={'hamburger-menu'}
                    iconFillColor={'lapis'}
                    iconSize={'4xl'}
                    onClick={handleHeaderHamburgerMenuButtonClick}
                />
            </div>
            <div className="hidden md:block order-1 xl:hidden">
                <IconButton
                    iconType={'hamburger-menu'}
                    iconFillColor={'lapis'}
                    iconSize={'7xl'}
                    onClick={handleHeaderHamburgerMenuButtonClick}
                />
            </div>
        </>
    );
};
