import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';

type SpecialPackageSectionContentItemButtonProps = {
    href: string;
};

export const SpecialPackageSectionContentItemButton = ({
    href,
}: SpecialPackageSectionContentItemButtonProps) => {
    const specialPackageSectionContentMainItemButtonIcon: EndIconType = {
        iconType: 'arrow-right',
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
        endIcon: specialPackageSectionContentMainItemButtonIcon,
    };

    const specialPackageSectionContentMainItemButtonMdProps: Omit<
        ButtonProps,
        'children'
    > = {
        variant: 'secondary',
        endIcon: specialPackageSectionContentMainItemButtonIcon,
    };

    return (
        <a href={href}>
            <div className="md:hidden">
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'See details'}
                    />
                </Button>
            </div>
            <div className="hidden md:block">
                <Button {...specialPackageSectionContentMainItemButtonMdProps}>
                    <Text
                        fontSize={'sm'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'See More'}
                        fontWeight={'bold'}
                    />
                </Button>
            </div>
        </a>
    );
};
