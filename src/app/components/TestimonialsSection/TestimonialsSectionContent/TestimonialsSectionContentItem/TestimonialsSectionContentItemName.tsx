import { Text } from '@/core/Text/Text';
import {
    TestimonialsSectionDataItemNameFirstLine,
    TestimonialsSectionDataItemNameSecondLine,
} from '@/TestimonialsSection/testimonialsSectionData';

type TestimonialsSectionContentItemNameProps = {
    nameFirstLine: TestimonialsSectionDataItemNameFirstLine;
    nameSecondLine: TestimonialsSectionDataItemNameSecondLine;
};

export const TestimonialsSectionContentItemName = ({
    nameFirstLine,
    nameSecondLine,
}: TestimonialsSectionContentItemNameProps) => {
    return (
        <div className="flex flex-col gap-sm">
            <Text
                fontSize={'3xl'}
                fontFamily={'roboto'}
                color={'lapis'}
                content={nameFirstLine}
                fontWeight={'bold'}
            />
            <Text
                fontSize={'3xl'}
                fontFamily={'roboto'}
                color={'lapis'}
                content={nameSecondLine}
            />
        </div>
    );
};
