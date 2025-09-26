import { Text } from '@/core/Text/Text';
import { RatingComponentList } from '@/SpecialPackageSection/RatingComponentList';
import { Rating } from '../specialPackageSectionMockData';

type SpecialPackageSectionContentItemDetailsProps = {
    name: string;
    price: number;
    rating: Rating;
};

export const SpecialPackageSectionContentItemDetails = ({
    name,
    price,
    rating,
}: SpecialPackageSectionContentItemDetailsProps) => {
    const priceContent = `$${price}`;

    return (
        <div className="flex flex-col gap-md">
            <Text
                fontSize={'3xl'}
                fontFamily={'opensans'}
                color={'lapis'}
                content={name}
            />
            <div className="flex gap-sm md:hidden">
                <RatingComponentList iconSize={'6xl'} rating={rating} />
            </div>
            <Text
                fontSize={'4xl'}
                fontFamily={'opensans'}
                color={'lapis'}
                content={priceContent}
                fontWeight={'bold'}
            />
        </div>
    );
};
