import { Text } from '@/core/Text/Text';
import Image from 'next/image';
import { cn } from '@/helpers/cn';

type PopularProductsSectionContentItemProps = {
    href: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;
    backgroundColor: string;
    alt: string;
};

export const PopularProductsSectionContentItem = ({
    href,
    imgSrc,
    name,
    description,
    price,
    backgroundColor,
    alt,
}: PopularProductsSectionContentItemProps) => {
    const popularProductsSectionContentItemClass = cn(
        'flex',
        'flex-col',
        'gap-3xl',
        'px-el-md',
        'pt-el-5xl',
        'pb-el-md',
        'rounded-lg',
        'md:pt-el-8xl',
        'md:px-el-3xl',
        'md:pb-el-6xl',
        backgroundColor
    );
    const popularProductsSectionContentItemPrice = `$${price}`;

    const handlePopularProductsSectionContentItemClick = () => {
        //TODO: add handlePopularProductsSectionContentItemClick logic
    };

    return (
        <a
            href={href}
            className={popularProductsSectionContentItemClass}
            onClick={handlePopularProductsSectionContentItemClick}
        >
            <div className="px-el-5xl md:px-el-6xl xl:px-el-7xl">
                <div className="relative w-el-md h-el-md md:w-el-lg md:h-el-xl">
                    <Image
                        src={imgSrc}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 90px, 204px,
                    40vw"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="md:hidden">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={name}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="hidden md:block">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={name}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="mt-4 md:mt-6">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={description}
                    />
                </div>
                <div className="mt-5 md:mt-6">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={popularProductsSectionContentItemPrice}
                        fontWeight={'bold'}
                    />
                </div>
            </div>
        </a>
    );
};
