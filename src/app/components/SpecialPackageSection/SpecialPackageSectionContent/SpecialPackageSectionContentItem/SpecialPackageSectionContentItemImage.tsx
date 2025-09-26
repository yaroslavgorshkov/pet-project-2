import Image from 'next/image';

type SpecialPackageSectionContentItemImageProps = {
    alt: string;
    imageSrc: string;
};

export const SpecialPackageSectionContentItemImage = ({
    alt,
    imageSrc,
}: SpecialPackageSectionContentItemImageProps) => {
    return (
        <>
            <div className="relative rounded-2xl h-el-xl w-responsive-viewport-sm md:hidden">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="90vw"
                    className="rounded-2xl"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="hidden md:block relative rounded-md h-slider-xl w-el-xl 2xl:h-el-lg">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    sizes="30vw"
                    className="rounded-md"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </>
    );
};
