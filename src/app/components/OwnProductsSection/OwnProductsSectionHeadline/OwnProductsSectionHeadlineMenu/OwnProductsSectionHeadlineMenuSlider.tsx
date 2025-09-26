import { IconButton } from '@/core/Button/IconButton';

export const OwnProductsSectionHeadlineMenuSlider = () => {
    const handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick = () => {
        // TODO: add OwnProductsSectionHeadlineMenuSlider button click function
    };

    return (
        <div className="flex gap-4xl items-center">
            <div className="relative">
                <div className="absolute h-slider-md w-slider-lg bg-white top-0 left-0" />
                <div className="w-slider-xl h-slider-sm bg-lapis" />
            </div>
            <div className="flex gap-lg">
                <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-left'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={
                            handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick
                        }
                    />
                </div>
                <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton
                        iconType={'arrow-right'}
                        iconFillColor={'lapis'}
                        iconSize={'sm'}
                        onClick={
                            handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick
                        }
                    />
                </div>
            </div>
        </div>
    );
};
