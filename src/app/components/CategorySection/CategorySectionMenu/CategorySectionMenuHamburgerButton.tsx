import { IconButton } from '@/core/Button/IconButton';

type CategorySectionMenuHamburgerButtonProps = {
    setIsCategorySectionMenuHamburgerMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const CategorySectionMenuHamburgerButton = ({
    setIsCategorySectionMenuHamburgerMenuOpen,
}: CategorySectionMenuHamburgerButtonProps) => {
    const handleCategorySectionMenuHamburgerButtonClick = () => {
        setIsCategorySectionMenuHamburgerMenuOpen((prev) => !prev);
    };

    return (
        <IconButton
            iconType={'hamburger-menu'}
            iconFillColor={'lapis'}
            iconSize={'9xl'}
            onClick={handleCategorySectionMenuHamburgerButtonClick}
        />
    );
};
