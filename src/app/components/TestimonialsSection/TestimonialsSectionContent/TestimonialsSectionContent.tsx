import { IconButton } from '@/core/Button/IconButton';
import { testimonialsSectionData } from '@/TestimonialsSection/testimonialsSectionData';
import { TestimonialsSectionSlider } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContentSlider';
import { TestimonialsSectionContentItem } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContentItem/TestimonialsSectionContentItem';

export const TestimonialsSectionContent = () => {
    const handleTestimonialsSectionContentArrowLick = () => {
        //TODO: add handleTestimonialsSectionContentArrowLick logic
    };

    const dataList = testimonialsSectionData.map(
        (
            { alt, descriptionFor, imgName, nameFirstLine, nameSecondLine },
            id
        ) => {
            return (
                <TestimonialsSectionContentItem
                    key={id}
                    imgName={imgName}
                    alt={alt}
                    descriptionFor={descriptionFor}
                    nameFirstLine={nameFirstLine}
                    nameSecondLine={nameSecondLine}
                />
            );
        }
    );

    return (
        <div className="flex flex-col gap-11xl">
            <div className="flex gap-12xl">
                <div className="testimonials-section__content pt-el-8xl flex overflow-auto gap-11xl -mx-overflow-container-sm md:-mx-overflow-container-md lg:-mx-overflow-container-lg xl:-mx-overflow-container-xl 2xl:mr-none px-el-sm md:px-el-md lg:px-el-3xl xl:px-el-10xl 2xl:pr-0">
                    {dataList}
                </div>
                <div className="hidden 2xl:flex flex-col gap-lg self-center">
                    <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-left'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={handleTestimonialsSectionContentArrowLick}
                        />
                    </div>
                    <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-right'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={handleTestimonialsSectionContentArrowLick}
                        />
                    </div>
                </div>
            </div>
            <TestimonialsSectionSlider />
        </div>
    );
};
