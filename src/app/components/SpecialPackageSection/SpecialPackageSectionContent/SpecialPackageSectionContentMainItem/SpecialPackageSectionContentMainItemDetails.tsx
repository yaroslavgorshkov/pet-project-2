import { Text } from '@/core/Text/Text';
import { RatingComponentList } from '@/SpecialPackageSection/RatingComponentList';
import { SpecialPackageSectionContentItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDetails';
import { Rating } from '../specialPackageSectionMockData';

type SpecialPackageSectionContentMainItemDetailsProps = {
    name: string;
    price: number;
    rating: Rating;
};

export const SpecialPackageSectionContentMainItemDetails = ({
    name,
    price,
    rating,
}: SpecialPackageSectionContentMainItemDetailsProps) => {
    const priceContent = `$${price}`;

    return (
        <div className="flex flex-col gap-md">
            <div className="md:hidden">
                <SpecialPackageSectionContentItemDetails
                    name={name}
                    price={price}
                    rating={rating}
                />
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={'Larkin Wood Full Set'}
                />
            </div>
            <div className="hidden gap-sm md:flex 2xl:hidden">
                <RatingComponentList iconSize={'6xl'} rating={rating} />
            </div>
            <div className="gap-md hidden 2xl:flex">
                <RatingComponentList iconSize={'10xl'} rating={rating} />
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={priceContent}
                    fontWeight={'bold'}
                />
            </div>
        </div>
    );
};
