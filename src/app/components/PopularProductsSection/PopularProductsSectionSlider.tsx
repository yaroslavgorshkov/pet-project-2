import { IconButton } from '@/core/Button/IconButton';

export const PopularProductsSectionSlider = () => {
    const handlePopularProductsSectionSliderArrowButtonClick = () => {
        // TODO: add PopularProductsSectionSliderArrowButton click function
    };

    return (
        <>
            <div className="relative w-full flex justify-center xl:hidden">
                <div className="w-responsive-xl h-slider-sm bg-lapis md:w-responsive-lg lg:w-responsive-md" />
                <div className="absolute top-slider left-el-md w-slider-xl h-slider-md bg-mint md:w-slider-2xl md:left-el-lg lg:left-el-xl" />
            </div>
            <div className="hidden xl:flex w-responsive-sm flex-col gap-md">
                <div className="relative w-full flex justify-center">
                    <div className="w-full h-slider-sm bg-lapis" />
                    <div className="absolute top-slider left-0 w-slider-xl h-slider-md bg-mint" />
                </div>
                <div className="self-end flex gap-lg">
                    <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-left'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={
                                handlePopularProductsSectionSliderArrowButtonClick
                            }
                        />
                    </div>
                    <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-right'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={
                                handlePopularProductsSectionSliderArrowButtonClick
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
