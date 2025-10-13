import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { useCartStore } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCart/shoppingCartStore';
import { EndIconType } from '@/types';
import { specialPackageSectionMainItemMockData } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';

export const SpecialPackageSectionContentMainItemButton = () => {
    const addToCart = useCartStore((s) => s.addToCart);

    const { imageSrc, name, price } = specialPackageSectionMainItemMockData;

    const handleSpecialPackageSectionContentMainItemButtonClick = () => {
        const fullId = 'sps-mi';
        addToCart({
            id: fullId,
            imgSrc: imageSrc,
            name: name,
            price: price,
        });
    };

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
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
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
