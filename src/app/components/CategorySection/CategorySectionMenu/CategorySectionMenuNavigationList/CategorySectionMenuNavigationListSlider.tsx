import { IconButton } from '@/core/Button/IconButton';

export const CategorySectionMenuNavigationListSlider = () => {
    const handleCategorySectionMenuNavigationListSliderArrowsButtonClick =
        () => {
            // TODO: add CategorySectionMenuNavigationListSliderArrows click function
        };

    return (
        <div className="flex flex-col gap-sm items-center">
            <div className="relative">
                <div className="absolute w-slider-md h-slider-lg top-0 left-slider bg-mint" />
                <div className="w-slider-sm h-slider-2xl bg-lapis" />
            </div>
            <div className="flex flex-col gap-lg">
                <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-up'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={
                            handleCategorySectionMenuNavigationListSliderArrowsButtonClick
                        }
                    />
                </div>
                <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-down'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={
                            handleCategorySectionMenuNavigationListSliderArrowsButtonClick
                        }
                    />
                </div>
            </div>
        </div>
    );
};
