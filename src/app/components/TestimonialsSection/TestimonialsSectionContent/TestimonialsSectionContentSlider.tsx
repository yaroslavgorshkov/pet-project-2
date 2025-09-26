import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';

export const TestimonialsSectionSlider = () => {
    const handleTestimonialsSectionSliderButtonClick = () => {
        //TODO: add handleTestimonialsSectionSliderButtonClick logic
    };

    const testimonialsSectionSliderButtonEndIcon: EndIconType = {
        iconType: 'arrow-right',
        iconSize: '2xl',
        iconFillColor: 'lapis',
    };

    return (
        <>
            <div className="relative w-full md:hidden">
                <div className="w-full h-slider-sm bg-lapis" />
                <div className="absolute top-slider left-0 w-slider-xl h-slider-md bg-mint" />
            </div>
            <div className="hidden w-full md:flex items-center gap-11xl whitespace-nowrap">
                <div className="w-full relative">
                    <div className="w-full h-slider-sm bg-lapis" />
                    <div className="absolute top-slider left-0 w-slider-2xl h-slider-md bg-mint" />
                </div>
                <Button
                    variant={'secondary'}
                    endIcon={testimonialsSectionSliderButtonEndIcon}
                    onClick={handleTestimonialsSectionSliderButtonClick}
                >
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={'See all review'}
                    />
                </Button>
            </div>
        </>
    );
};
