import { TestimonialsSectionDataItem } from '@/TestimonialsSection/testimonialsSectionData';
import { TestimonialsSectionContentItemImage } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContentItem/TestimonialsSectionContentItemImage';
import { TestimonialsSectionContentItemDescription } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContentItem/TestimonialsSectionContentItemDescription';
import { TestimonialsSectionContentItemName } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContentItem/TestimonialsSectionContentItemName';

type TestimonialsSectionContentItemProps = TestimonialsSectionDataItem;

export const TestimonialsSectionContentItem = ({
    alt,
    descriptionFor,
    imgName,
    nameFirstLine,
    nameSecondLine,
}: TestimonialsSectionContentItemProps) => {
    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <TestimonialsSectionContentItemImage
                    alt={alt}
                    imgName={imgName}
                />
                <TestimonialsSectionContentItemDescription
                    descriptionFor={descriptionFor}
                />
                <TestimonialsSectionContentItemName
                    nameFirstLine={nameFirstLine}
                    nameSecondLine={nameSecondLine}
                />
            </article>
            <article className="hidden shrink-none md:flex gap-2xl 2xl:gap-12xl w-responsive-viewport-md lg:w-responsive-viewport-lg 2xl:w-fit max-w-3xl 2xl:max-w-none">
                <TestimonialsSectionContentItemImage
                    alt={alt}
                    imgName={imgName}
                />
                <div className="flex flex-col max-w-lg 2xl:max-w-3xl gap-2xl lg:gap-10xl 2xl:justify-center">
                    <TestimonialsSectionContentItemDescription
                        descriptionFor={descriptionFor}
                    />
                    <TestimonialsSectionContentItemName
                        nameFirstLine={nameFirstLine}
                        nameSecondLine={nameSecondLine}
                    />
                </div>
            </article>
        </>
    );
};
