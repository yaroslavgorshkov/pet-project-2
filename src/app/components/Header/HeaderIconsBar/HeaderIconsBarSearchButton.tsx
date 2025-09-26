import { IconButton } from '@/core/Button/IconButton';

export const HeaderIconsBarSearchButton = () => {
    function handleHeaderIconsBarSearchButtonClick() {
        // TODO: add HeaderIconsBarSearchButton click function
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
