import { IconButton } from '@/core/Button/IconButton';

export const HeaderIconsBarAccountButton = () => {
    function handleHeaderIconsBarAccountButtonClick() {
        // TODO: add HeaderIconsBarAccountButton click function
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
