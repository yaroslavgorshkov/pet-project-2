import { IconButton } from '@/core/Button/IconButton';

type HeaderHamburgerMenuButtonProps = {
    setIsHeaderHamburgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderHamburgerMenuButton = ({
    setIsHeaderHamburgerMenuOpen,
}: HeaderHamburgerMenuButtonProps) => {
    const handleHeaderHamburgerMenuButtonClick = () => {
        setIsHeaderHamburgerMenuOpen((prev) => !prev);
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
