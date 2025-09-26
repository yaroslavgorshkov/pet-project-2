import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { IconButton } from '@/core/Button/IconButton';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';

export const SpecialPackageSectionContentHighlightedItemButton = () => {
    const handleSpecialPackageSectionContentItemButtonClick = () => {
        // TODO: make handleSpecialPackageSectionContentItemButtonClick logic
    };

    const specialPackageSectionContentMainItemButtonIconSm: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '2xl',
    };

    const specialPackageSectionContentMainItemButtonSmProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'sm',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: specialPackageSectionContentMainItemButtonIconSm,
        onClick: handleSpecialPackageSectionContentItemButtonClick,
    };

    return (
        <>
            <div className="md:hidden">
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
            <div className="hidden md:flex w-el-sm h-el-sm rounded-md bg-lapis justify-center items-center">
                <IconButton
                    iconType={'zoom'}
                    iconFillColor={'white'}
                    iconSize={'xl'}
                    onClick={handleSpecialPackageSectionContentItemButtonClick}
                />
            </div>
        </>
    );
};
