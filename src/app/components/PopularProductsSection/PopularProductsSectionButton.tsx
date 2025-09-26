import { EndIconType } from '@/types';
import { Text } from '@/core/Text/Text';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Button } from '@/core/Button/Button';

export const PopularProductsSectionButton = () => {
    const handlePopularProductsSectionButtonClick = () => {
        // TODO: add PopularProductsSectionButton click function
    };

    const popularProductsSectionButtonIcon: EndIconType = {
        iconType: 'arrow-right',
        iconFillColor: 'absolute-white',
        iconSize: '2xl',
    };

    const popularProductsSectionButtonProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'lg',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: popularProductsSectionButtonIcon,
        onClick: handlePopularProductsSectionButtonClick,
    };

    return (
        <a href="#popular-products-section-explore-more-items">
            <Button {...popularProductsSectionButtonProps}>
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'white'}
                    fontWeight={'bold'}
                    content={'Explore all items'}
                />
            </Button>
        </a>
    );
};
