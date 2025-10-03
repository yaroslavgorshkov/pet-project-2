import { IconButton } from '@/core/Button/IconButton';

type HeaderIconsBarSearchButtonProps = {
    setIsHeaderIconsBarSearchMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const HeaderIconsBarSearchButton = ({
    setIsHeaderIconsBarSearchMenuOpen,
}: HeaderIconsBarSearchButtonProps) => {
    function handleHeaderIconsBarSearchButtonClick() {
        setIsHeaderIconsBarSearchMenuOpen((prev) => !prev);
    }

    return (
        <>
            <div className="md:hidden">
                <IconButton
                    iconType={'search'}
                    iconFillColor={'lapis'}
                    iconSize={'3xl'}
                    onClick={handleHeaderIconsBarSearchButtonClick}
                />
            </div>
            <div className="hidden md:block">
                <IconButton
                    iconType={'search'}
                    iconFillColor={'lapis'}
                    iconSize={'5xl'}
                    onClick={handleHeaderIconsBarSearchButtonClick}
                />
            </div>
        </>
    );
};
