import { IconButton } from '@/core/Button/IconButton';

export const SpecialPackageSectionContentSlider = () => {
    const handleSpecialPackageSectionContentSliderArrowButtonClick = () => {
        // TODO: add handleSpecialPackageSectionContentSliderArrowButtonClick click function
    };

    return (
        <>
            <div className="relative w-full 2xl:hidden">
                <div className="w-full h-slider-sm bg-lapis" />
                <div className="absolute top-slider left-0 w-slider-xl h-slider-md bg-mint md:w-slider-2xl" />
            </div>
            <div className="hidden 2xl:flex flex-col items-center justify-between">
                <div className="relative">
                    <div className="w-slider-sm h-slider-xl bg-lapis" />
                    <div className="absolute top-0 left-slider w-slider-md h-slider-lg bg-mint" />
                </div>
                <div className="flex flex-col gap-lg">
                    <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-up'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={
                                handleSpecialPackageSectionContentSliderArrowButtonClick
                            }
                        />
                    </div>
                    <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                        <IconButton
                            iconType={'arrow-down'}
                            iconFillColor={'lapis'}
                            iconSize={'sm'}
                            onClick={
                                handleSpecialPackageSectionContentSliderArrowButtonClick
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
