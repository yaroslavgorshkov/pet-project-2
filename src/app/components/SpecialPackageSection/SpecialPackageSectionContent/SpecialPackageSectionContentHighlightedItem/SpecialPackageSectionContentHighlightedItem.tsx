import { specialPackageSectionHighlightedItemMockData } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentHighlightedItemImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedItem/SpecialPackageSectionContentHighlightedItemImage';
import { SpecialPackageSectionContentHighlightedItemButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedItem/SpecialPackageSectionContentHighlightedItemButton';
import { SpecialPackageSectionContentHighlightedItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedItem/SpecialPackageSectionContentHighlightedItemDetails';
import { Text } from '@/core/Text/Text';
import { RatingComponentList } from '@/SpecialPackageSection/RatingComponentList';

export const SpecialPackageSectionContentHighlightedItem = () => {
    const { alt, href, imageSrc, name, price, rating } =
        specialPackageSectionHighlightedItemMockData;

    const priceText = `$${price}`;

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentHighlightedItemDetails
                    name={name}
                    price={price}
                    rating={rating}
                />
                <SpecialPackageSectionContentHighlightedItemButton />
                <SpecialPackageSectionContentHighlightedItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-2xl">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Description'}
                        fontWeight={'bold'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                </div>
            </article>
            <article className="hidden md:flex gap-sm">
                <SpecialPackageSectionContentHighlightedItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-lg bg-lite-green rounded-md justify-center w-el-5xl 2xl:w-el-4xl relative px-el-md">
                    <div className="flex justify-between">
                        <Text
                            fontSize={'2xl'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={name}
                        />
                        <Text
                            fontSize={'2xl'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={priceText}
                            fontWeight={'bold'}
                        />
                    </div>
                    <div className="flex gap-sm">
                        <RatingComponentList iconSize={'xl'} rating={rating} />
                    </div>
                    <a href={href} className="underline">
                        <Text
                            fontSize={'md'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={'See details'}
                        />
                    </a>
                    <div className="absolute bottom-0 right-0">
                        <SpecialPackageSectionContentHighlightedItemButton />
                    </div>
                </div>
            </article>
        </>
    );
};
