import { EndIconType } from '@/types';
import { Text } from '@/core/Text/Text';
import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';

export const CategorySectionMenuButton = () => {
    const categorySectionMenuButtonEndIcon: EndIconType = {
        iconType: 'arrow-right',
        iconFillColor: 'absolute-white',
        iconSize: '2xl',
    };

    const categorySectionMenuButtonLgProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'lg',
        borderRadius: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        endIcon: categorySectionMenuButtonEndIcon,
    };

    return (
        <a href="/all-categories">
            <Button {...categorySectionMenuButtonLgProps}>
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'white'}
                    content={'All Categories'}
                    fontWeight={'bold'}
                />
            </Button>
        </a>
    );
};
