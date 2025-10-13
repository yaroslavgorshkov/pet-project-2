import { IconButton } from '@/core/Button/IconButton';

type HeaderIconsBarAccountButtonProps = {
    setIsHeaderIconsBarAccountOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

export const HeaderIconsBarAccountButton = ({
    setIsHeaderIconsBarAccountOpen,
}: HeaderIconsBarAccountButtonProps) => {
    function handleHeaderIconsBarAccountButtonClick() {
        setIsHeaderIconsBarAccountOpen((prev) => !prev);
    }

    return (
        <>
            <div className="md:hidden">
                <IconButton
                    iconType={'account'}
                    iconFillColor={'lapis'}
                    iconSize={'3xl'}
                    onClick={handleHeaderIconsBarAccountButtonClick}
                />
            </div>
            <div className="hidden md:block">
                <IconButton
                    iconType={'account'}
                    iconFillColor={'lapis'}
                    iconSize={'5xl'}
                    onClick={handleHeaderIconsBarAccountButtonClick}
                />
            </div>
        </>
    );
};
