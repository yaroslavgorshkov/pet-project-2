import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';
import { SpecialPackageSectionContentItemButton } from '../SpecialPackageSectionContentItem/SpecialPackageSectionContentItemButton';

export const SpecialPackageSectionContentMainItemButton = () => {
    const handleSpecialPackageSectionContentMainItemButtonClick = () => [
        // TODO: make handleSpecialPackageSectionContentMainItemButtonClick logic
    ];

    const specialPackageSectionContentMainItemButtonIconSm: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '2xl',
    };

    const specialPackageSectionContentMainItemButtonIconXl: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '5xl',
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
        onClick: handleSpecialPackageSectionContentMainItemButtonClick,
    };

    const specialPackageSectionContentMainItemButtonXlProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: specialPackageSectionContentMainItemButtonIconXl,
        onClick: handleSpecialPackageSectionContentMainItemButtonClick,
    };

    return (
        <>
            <div className="md:hidden">
                <SpecialPackageSectionContentItemButton />
            </div>
            <div className="hidden md:block 2xl:hidden">
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
            <div className="hidden 2xl:block">
                <Button {...specialPackageSectionContentMainItemButtonXlProps}>
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
        </>
    );
};
