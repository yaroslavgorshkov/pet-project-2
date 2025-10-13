/* eslint-disable no-console */
import { useRef } from 'react';

type SliderModes = 'vertical' | 'horizontal';

export const useSlider = <T extends HTMLElement>(mode: SliderModes) => {
    const scrollElementRef = useRef<T>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    if (mode === 'vertical') {
        const handleScroll = () => {
            const scrollElement = scrollElementRef.current;
            const trackElement = trackRef.current;
            const thumbElement = thumbRef.current;
            try {
                if (!scrollElement || !trackElement || !thumbElement)
                    throw new Error(
                        'Refs are empty! try to re-ref the elements!'
                    );

                const scrollPercent =
                    scrollElement.scrollTop /
                    (scrollElement.scrollHeight - scrollElement.clientHeight);

                const trackHeight = trackElement.getBoundingClientRect().height;
                const thumbHeight = thumbElement.getBoundingClientRect().height;
                const thumbTopValue =
                    scrollPercent * (trackHeight - thumbHeight);
                thumbElement.style.transform = `translateY(${thumbTopValue}px)`;
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const handleArrowUpButtonClick = () => {
            const sliderArrowButtonStepValue = scrollElementRef.current
                ? scrollElementRef.current.scrollHeight /
                  scrollElementRef.current.children.length
                : 0;
            try {
                if (!scrollElementRef.current)
                    throw new Error(
                        'Scroll element ref is empty! try to re-ref the element!'
                    );
                scrollElementRef.current.scrollBy({
                    top: -sliderArrowButtonStepValue,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const handleArrowDownButtonClick = () => {
            const sliderArrowButtonStepValue = scrollElementRef.current
                ? scrollElementRef.current.scrollHeight /
                  scrollElementRef.current.children.length
                : 0;
            try {
                if (!scrollElementRef.current)
                    throw new Error(
                        'Scroll element ref is empty! try to re-ref the element!'
                    );
                scrollElementRef.current.scrollBy({
                    top: sliderArrowButtonStepValue,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return {
            scrollElementRef,
            thumbRef,
            trackRef,
            handleScroll,
            handleArrowDownButtonClick,
            handleArrowUpButtonClick,
        };
    } else {
        const handleScroll = () => {
            const scrollElement = scrollElementRef.current;
            const trackElement = trackRef.current;
            const thumbElement = thumbRef.current;

            try {
                if (!scrollElement || !trackElement || !thumbElement)
                    throw new Error(
                        'Refs are empty! try to re-ref the elements!'
                    );

                const scrollPercent =
                    scrollElement.scrollLeft /
                    (scrollElement.scrollWidth - scrollElement.clientWidth);
                const trackWidth = trackElement.getBoundingClientRect().width;
                const thumbWidth = thumbElement.getBoundingClientRect().width;
                const thumbLeftValue =
                    scrollPercent * (trackWidth - thumbWidth);

                thumbElement.style.transform = `translateX(${thumbLeftValue}px)`;
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const handleArrowLeftButtonClick = () => {
            const sliderArrowButtonStepValue = scrollElementRef.current
                ? scrollElementRef.current.scrollWidth /
                  scrollElementRef.current.children.length
                : 0;
            try {
                if (!scrollElementRef.current)
                    throw new Error(
                        'Scroll element ref is empty! try to re-ref the element!'
                    );
                scrollElementRef.current.scrollBy({
                    left: -sliderArrowButtonStepValue,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const handleArrowRightButtonClick = () => {
            const sliderArrowButtonStepValue = scrollElementRef.current
                ? scrollElementRef.current.scrollWidth /
                  scrollElementRef.current.children.length
                : 0;
            try {
                if (!scrollElementRef.current)
                    throw new Error(
                        'Scroll element ref is empty! try to re-ref the element!'
                    );
                scrollElementRef.current.scrollBy({
                    left: sliderArrowButtonStepValue,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return {
            scrollElementRef,
            thumbRef,
            trackRef,
            handleScroll,
            handleArrowRightButtonClick,
            handleArrowLeftButtonClick,
        };
    }
};
