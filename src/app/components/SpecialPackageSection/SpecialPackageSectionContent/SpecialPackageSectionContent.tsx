import { SpecialPackageSectionContentMainItem } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItem';
import {
    specialPackageSectionMainItemMockData,
    specialPackageSectionMockData,
} from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentItem } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItem';
import { SpecialPackageSectionContentHighlightedItem } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedItem/SpecialPackageSectionContentHighlightedItem';
import { SpecialPackageSectionContentSlider } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentSlider';
import { SpecialPackageSectionContentMainItemImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemImage';
import { SpecialPackageSectionContentMainItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemDetails';
import { SpecialPackageSectionContentMainItemButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemButton';
import { SpecialPackageSectionContentMainItemDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemDescription';
import { useSlider } from '@/helpers/useSlider';

export const SpecialPackageSectionContent = () => {
    const {
        alt: mainItemAlt,
        description: mainItemDescription,
        imageSrc: mainItemImageSrc,
        name: mainItemName,
        price: mainItemPrice,
        rating: mainItemRating,
    } = specialPackageSectionMainItemMockData;

    const {
        handleScroll: handleScrollSm,
        scrollElementRef: scrollElementRefSm,
        thumbRef: thumbRefSm,
        trackRef: trackRefSm,
    } = useSlider<HTMLDivElement>('horizontal');

    const {
        handleScroll: handleScrollMd,
        scrollElementRef: scrollElementRefMd,
        thumbRef: thumbRefMd,
        trackRef: trackRefMd,
    } = useSlider<HTMLDivElement>('horizontal');

    const {
        handleScroll: handleScroll2Xl,
        scrollElementRef: scrollElementRef2Xl,
        thumbRef: thumbRef2Xl,
        trackRef: trackRef2Xl,
        handleArrowDownButtonClick: handleArrowDownButtonClick2Xl,
        handleArrowUpButtonClick: handleArrowUpButtonClick2Xl,
    } = useSlider<HTMLDivElement>('vertical');

    const dataList = specialPackageSectionMockData.map(
        ({ alt, description, id, imageSrc, name, price, rating }) => {
            return (
                <SpecialPackageSectionContentItem
                    key={id}
                    name={name}
                    price={price}
                    imageSrc={imageSrc}
                    alt={alt}
                    description={description}
                    rating={rating}
                />
            );
        }
    );

    return (
        <>
            <div className="flex flex-col gap-10xl md:hidden">
                <div
                    ref={scrollElementRefSm}
                    onScroll={handleScrollSm}
                    className="special-package-section__content flex overflow-auto gap-2xl -mx-overflow-container-sm px-el-sm"
                >
                    <SpecialPackageSectionContentMainItem />
                    <SpecialPackageSectionContentHighlightedItem />
                    {dataList}
                </div>
                <SpecialPackageSectionContentSlider
                    thumbRef={thumbRefSm}
                    trackRef={trackRefSm}
                />
            </div>
            <div className="hidden md:flex flex-col gap-10xl lg:gap-12xl 2xl:hidden">
                <SpecialPackageSectionContentMainItem />
                <div
                    ref={scrollElementRefMd}
                    onScroll={handleScrollMd}
                    className="special-package-section__content flex overflow-auto gap-3xl -mx-overflow-container-md lg:-mx-overflow-container-lg px-el-md lg:px-el-3xl xl:-mx-overflow-container-xl xl:px-el-10xl"
                >
                    <SpecialPackageSectionContentHighlightedItem />
                    {dataList}
                </div>
                <SpecialPackageSectionContentSlider
                    thumbRef={thumbRefMd}
                    trackRef={trackRefMd}
                />
            </div>
            <div className="hidden 2xl:flex gap-12xl">
                <div className="flex flex-col gap-2xl w-full">
                    <div className="flex flex-col gap-2xl">
                        <SpecialPackageSectionContentMainItemImage
                            alt={mainItemAlt}
                            imageSrc={mainItemImageSrc}
                        />
                    </div>
                    <div className="flex justify-between">
                        <SpecialPackageSectionContentMainItemDetails
                            name={mainItemName}
                            price={mainItemPrice}
                            rating={mainItemRating}
                        />
                        <SpecialPackageSectionContentMainItemButton />
                    </div>
                </div>
                <div className="flex flex-col justify-between w-el-6xl">
                    <SpecialPackageSectionContentMainItemDescription
                        description={mainItemDescription}
                    />
                    <SpecialPackageSectionContentHighlightedItem />
                    <div className="flex justify-between">
                        <div
                            onScroll={handleScroll2Xl}
                            ref={scrollElementRef2Xl}
                            className="flex flex-col gap-2xl special-package-section__content overflow-auto h-el-3xl"
                        >
                            {dataList}
                        </div>
                        <SpecialPackageSectionContentSlider
                            thumbRef={thumbRef2Xl}
                            trackRef={trackRef2Xl}
                            handleArrowDownButtonClick={
                                handleArrowDownButtonClick2Xl
                            }
                            handleArrowUpButtonClick={
                                handleArrowUpButtonClick2Xl
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
