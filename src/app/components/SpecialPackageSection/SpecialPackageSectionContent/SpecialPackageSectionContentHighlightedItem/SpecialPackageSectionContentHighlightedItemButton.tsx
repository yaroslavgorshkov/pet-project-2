import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { IconButton } from '@/core/Button/IconButton';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SpecialPackageSectionContentItemZoonOutImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItemZoonOutImage';

type SpecialPackageSectionContentHighlightedItemButton = {
    href: string;
    imageSrc: string;
    alt: string;
};

export const SpecialPackageSectionContentHighlightedItemButton = ({
    href,
    alt,
    imageSrc,
}: SpecialPackageSectionContentHighlightedItemButton) => {
    const [isImageZoomOut, setIsImageZoomOut] = useState(false);

    const handleSpecialPackageSectionContentItemButtonClick = () => {
        setIsImageZoomOut((prev) => !prev);
    };

    const specialPackageSectionContentMainItemButtonIconSm: EndIconType = {
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
        endIcon: specialPackageSectionContentMainItemButtonIconSm,
    };

    return (
        <>
            <a href={href} className="md:hidden">
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'See details'}
                    />
                </Button>
            </a>
            <div className="hidden lg:flex w-el-sm h-el-sm rounded-md bg-lapis justify-center items-center">
                <IconButton
                    iconType={'zoom'}
                    iconFillColor={'white'}
                    iconSize={'xl'}
                    onClick={handleSpecialPackageSectionContentItemButtonClick}
                />
                <AnimatePresence>
                    {isImageZoomOut && (
                        <SpecialPackageSectionContentItemZoonOutImage
                            setIsImageZoomOut={setIsImageZoomOut}
                            imageSrc={imageSrc}
                            alt={alt}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
