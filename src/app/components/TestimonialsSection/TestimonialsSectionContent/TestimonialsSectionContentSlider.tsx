import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';

type TestimonialsSectionSliderProps = {
    trackRef: React.RefObject<HTMLDivElement | null>;
    thumbRef: React.RefObject<HTMLDivElement | null>;
};

export const TestimonialsSectionSlider = ({
    thumbRef,
    trackRef,
}: TestimonialsSectionSliderProps) => {
    const testimonialsSectionSliderButtonEndIcon: EndIconType = {
        iconType: 'arrow-right',
        iconSize: '2xl',
        iconFillColor: 'lapis',
    };

    return (
        <div className="flex items-center gap-11xl whitespace-nowrap w-full">
            <div className="relative w-full">
                <div ref={trackRef} className="w-full h-slider-sm bg-lapis" />
                <div
                    ref={thumbRef}
                    className="absolute top-slider left-0 w-slider-xl md:w-slider-2xl h-slider-md bg-mint"
                />
            </div>
            <a className="hidden md:block" href="/example/url">
                <Button
                    variant={'secondary'}
                    endIcon={testimonialsSectionSliderButtonEndIcon}
                >
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={'See all review'}
                    />
                </Button>
            </a>
        </div>
    );
};
