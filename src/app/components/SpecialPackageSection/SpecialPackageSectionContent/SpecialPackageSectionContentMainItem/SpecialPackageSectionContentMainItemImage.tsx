import { IconButton } from '@/core/Button/IconButton';
import Image from 'next/image';
import { useState } from 'react';
import { SpecialPackageSectionContentItemZoonOutImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItemZoonOutImage';
import { AnimatePresence } from 'framer-motion';

type SpecialPackageSectionContentMainItemImageProps = {
    alt: string;
    imageSrc: string;
};

export const SpecialPackageSectionContentMainItemImage = ({
    alt,
    imageSrc,
}: SpecialPackageSectionContentMainItemImageProps) => {
    const [isImageZoomOut, setIsImageZoomOut] = useState(false);

    const handleSpecialSectionMainItemZoomOutButtonClick = () => {
        setIsImageZoomOut((prev) => !prev);
    };

    return (
        <>
            <div className="relative rounded-2xl h-el-xl md:hidden w-responsive-viewport-sm">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="90vw"
                    className="rounded-2xl"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="hidden w-full xl:max-w-2xl 2xl:max-w-none relative h-el-4xl md:block 2xl:h-el-5xl">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="80vw"
                    className="rounded-xl 2xl:rounded-md"
                    style={{ objectFit: 'cover' }}
                />
                <div className="hidden lg:flex items-center justify-center w-el-sm h-el-sm rounded-xl 2xl:rounded-md bg-lapis absolute bottom-0 right-0">
                    <IconButton
                        iconType={'zoom-out'}
                        iconFillColor={'white'}
                        iconSize={'xl'}
                        onClick={handleSpecialSectionMainItemZoomOutButtonClick}
                    />
                </div>
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
