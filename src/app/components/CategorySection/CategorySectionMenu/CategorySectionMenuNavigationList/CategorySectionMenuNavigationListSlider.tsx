import { IconButton } from '@/core/Button/IconButton';

type CategorySectionMenuNavigationListSliderProps = {
    trackRef: React.RefObject<HTMLDivElement | null>;
    thumbRef: React.RefObject<HTMLDivElement | null>;
    handleArrowDownButtonClick: (() => void) | undefined;
    handleArrowUpButtonClick: (() => void) | undefined;
};

export const CategorySectionMenuNavigationListSlider = ({
    thumbRef,
    trackRef,
    handleArrowDownButtonClick,
    handleArrowUpButtonClick,
}: CategorySectionMenuNavigationListSliderProps) => {
    return (
        <div className="flex flex-col gap-sm items-center">
            <div className="relative">
                <div
                    className="absolute w-slider-md h-slider-lg top-0 left-slider bg-mint"
                    ref={thumbRef}
                />
                <div
                    className="w-slider-sm h-slider-2xl bg-lapis"
                    ref={trackRef}
                />
            </div>
            <div className="flex flex-col gap-lg">
                <div className="rounded-xl bg-white-blue hover:bg-opacity-70 transition w-el-sm h-el-sm">
                    <IconButton
                        iconType={'arrow-up'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowUpButtonClick}
                        className="flex justify-center items-center h-full w-full"
                    />
                </div>
                <div className="rounded-xl bg-rose w-el-sm hover:bg-opacity-70 transition h-el-sm">
                    <IconButton
                        iconType={'arrow-down'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={handleArrowDownButtonClick}
                        className="flex justify-center items-center h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
};
