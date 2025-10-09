import { IconButton } from '@/core/Button/IconButton';

type SpecialPackageSectionContentSliderProps = {
    trackRef: React.RefObject<HTMLDivElement | null>;
    thumbRef: React.RefObject<HTMLDivElement | null>;
    handleArrowDownButtonClick?: (() => void) | undefined;
    handleArrowUpButtonClick?: (() => void) | undefined;
};

export const SpecialPackageSectionContentSlider = ({
    handleArrowDownButtonClick,
    handleArrowUpButtonClick,
    thumbRef,
    trackRef,
}: SpecialPackageSectionContentSliderProps) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="w-full 2xl:w-fit relative">
                <div
                    ref={trackRef}
                    className="w-full h-slider-sm bg-lapis 2xl:w-slider-sm 2xl:h-slider-xl"
                />
                <div
                    ref={thumbRef}
                    className="absolute top-slider left-0 w-slider-xl h-slider-md bg-mint md:w-slider-2xl 2xl:top-0 2xl:left-slider 2xl:w-slider-md 2xl:h-slider-lg"
                />
            </div>
            <div className="hidden 2xl:flex flex-col gap-lg">
                <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-up'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowUpButtonClick}
                    />
                </div>
                <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-down'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowDownButtonClick}
                    />
                </div>
            </div>
        </div>
    );
};
