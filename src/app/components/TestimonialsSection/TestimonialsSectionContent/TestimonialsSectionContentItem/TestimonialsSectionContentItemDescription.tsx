import { Text } from '@/core/Text/Text';
import { testimonialsSectionGetContentItemDescription } from '@/TestimonialsSection/helpers/testimonialsSectionGetContentItemDescription';
import { TestimonialsSectionDataItemDescriptionFor } from '@/TestimonialsSection/testimonialsSectionData';

type TestimonialsSectionContentItemDescriptionProps = {
    descriptionFor: TestimonialsSectionDataItemDescriptionFor;
};

export const TestimonialsSectionContentItemDescription = ({
    descriptionFor,
}: TestimonialsSectionContentItemDescriptionProps) => {
    const description =
        testimonialsSectionGetContentItemDescription(descriptionFor);

    return (
        <>
            <div className="2xl:hidden">
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
            <div className="hidden 2xl:block">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
        </>
    );
};
