import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';

export const HeroSectionContentButton = () => {
    const handleHeroSectionButtonClick = () => {
        // TODO: add HeroSectionButton click function
    };

    const heroSectionButtonSmProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'sm',
        borderRadius: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        onClick: handleHeroSectionButtonClick,
    };

    const heroSectionButtonMdProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'md',
        borderRadius: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        onClick: handleHeroSectionButtonClick,
    };

    return (
        <>
            <div className="md:hidden">
                <Button {...heroSectionButtonSmProps}>
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Shop Now'}
                        fontWeight={'bold'}
                    />
                </Button>
            </div>
            <div className="hidden md:block">
                <Button {...heroSectionButtonMdProps}>
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Shop Now'}
                        fontWeight={'bold'}
                    />
                </Button>
            </div>
        </>
    );
};
