/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconButton } from '@/core/Button/IconButton';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type SpecialPackageSectionContentItemZoonOutImageProps = {
    setIsImageZoomOut: React.Dispatch<React.SetStateAction<boolean>>;
    imageSrc: string;
    alt: string;
};

export const SpecialPackageSectionContentItemZoonOutImage = ({
    setIsImageZoomOut,
    alt,
    imageSrc,
}: SpecialPackageSectionContentItemZoonOutImageProps) => {
    const handleSpecialPackageSectionContentMainItemZoonOutImageCloseClick =
        () => {
            setIsImageZoomOut((prev) => !prev);
        };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return createPortal(
        <motion.div
            role="button"
            className="fixed inset-0 bg-black bg-opacity-35 z-50 border-0 backdrop-blur-lg flex items-center justify-center px-el-3xl lg:px-el-8xl cursor-default"
            onClick={
                handleSpecialPackageSectionContentMainItemZoonOutImageCloseClick
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="max-h-sm max-w-3xl 2xl:max-h-md 2xl:max-w-4xl w-full aspect-4/3 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="90vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                    priority
                />
                <div className="absolute top-el-md right-el-md rounded-half w-el-sm h-el-sm bg-lapis">
                    <IconButton
                        iconType={'close-icon'}
                        iconFillColor={'white'}
                        iconSize={'xl'}
                        onClick={
                            handleSpecialPackageSectionContentMainItemZoonOutImageCloseClick
                        }
                        className="w-full h-full flex items-center justify-center"
                    />
                </div>
            </div>
        </motion.div>,
        document.body
    );
};
