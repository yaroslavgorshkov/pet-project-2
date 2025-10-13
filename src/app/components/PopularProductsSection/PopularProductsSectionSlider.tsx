import { IconButton } from '@/core/Button/IconButton';

type PopularProductsSectionSliderProps = {
    trackRef: React.RefObject<HTMLDivElement | null>;
    thumbRef: React.RefObject<HTMLDivElement | null>;
    handleArrowRightButtonClick: (() => void) | undefined;
    handleArrowLeftButtonClick: (() => void) | undefined;
};

export const PopularProductsSectionSlider = ({
    thumbRef,
    trackRef,
    handleArrowLeftButtonClick,
    handleArrowRightButtonClick,
}: PopularProductsSectionSliderProps) => {
    return (
        <div className="flex flex-col gap-md w-full xl:w-responsive-sm">
            <div className="relative w-full flex justify-center">
                <div
                    ref={trackRef}
                    className="w-responsive-xl h-slider-sm bg-lapis md:w-responsive-lg lg:w-responsive-md xl:w-full"
                />
                <div
                    ref={thumbRef}
                    className="absolute top-slider left-el-md w-slider-xl h-slider-md bg-mint md:w-slider-2xl md:left-el-lg lg:left-el-xl xl:left-0"
                />
            </div>
            <div className="self-end hidden xl:flex gap-lg">
                <div className="rounded-xl bg-white-blue hover:bg-opacity-70 transition w-el-sm h-el-sm">
                    <IconButton
                        iconType={'arrow-left'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowLeftButtonClick}
                        className="flex justify-center items-center h-full w-full"
                    />
                </div>
                <div className="rounded-xl bg-rose hover:bg-opacity-70 transition w-el-sm h-el-sm">
                    <IconButton
                        iconType={'arrow-right'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowRightButtonClick}
                        className="flex justify-center items-center h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
};
