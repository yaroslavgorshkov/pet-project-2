import { SpecialPackageSectionContentItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDetails';
import { SpecialPackageSectionContentItemButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemButton';
import { SpecialPackageSectionContentItemImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemImage';
import { SpecialPackageSectionContentItemDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDescription';
import { SpecialPackageSectionMockDataType } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { Text } from '@/core/Text/Text';
import { RatingComponentList } from '@/SpecialPackageSection/RatingComponentList';

type SpecialPackageSectionContentItemProps = Omit<
    SpecialPackageSectionMockDataType,
    'id'
>;
export const SpecialPackageSectionContentItem = ({
    name,
    alt,
    description,
    imageSrc,
    price,
    rating,
}: SpecialPackageSectionContentItemProps) => {
    const priceText = `$${price}`;

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentItemDetails
                    name={name}
                    price={price}
                    rating={rating}
                />
                <SpecialPackageSectionContentItemButton />
                <SpecialPackageSectionContentItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentItemDescription
                    description={description}
                />
            </article>
            <article className="hidden md:flex gap-sm">
                <SpecialPackageSectionContentItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-sm justify-center w-el-5xl 2xl:w-el-3xl px-el-md">
                    <div className="flex justify-between">
                        <div className="2xl:hidden">
                            <Text
                                fontSize={'2xl'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={name}
                            />
                        </div>
                        <div className="hidden 2xl:block">
                            <Text
                                fontSize={'md'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={name}
                            />
                        </div>
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
                    <SpecialPackageSectionContentItemDescription
                        description={description}
                    />
                    <SpecialPackageSectionContentItemButton />
                </div>
            </article>
        </>
    );
};
