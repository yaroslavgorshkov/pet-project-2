import { PopularProductsSectionButton } from '@/PopularProductsSection/PopularProductsSectionButton';
import { PopularProductsSectionContent } from '@/PopularProductsSection/PopularProductsSectionContent/PopularProductsSectionContent';
import { PopularProductsSectionContentFallback } from '@/PopularProductsSection/PopularProductsSectionContentFallback';
import { PopularProductsSectionHeadline } from '@/PopularProductsSection/PopularProductsSectionHeadline';
import { popularProductsSectionMockData } from '@/PopularProductsSection/popularProductsSectionMockData';
import Image from 'next/image';
import { PopularProductsSectionSlider } from '@/PopularProductsSection/PopularProductsSectionSlider';

export const PopularProductsSection = () => {
    const content = popularProductsSectionMockData;
    const isPopularProductsSectionMockDataEmpty =
        !content || content.length === 0;
    if (isPopularProductsSectionMockDataEmpty) {
        return (
            <section className="py-section-3xl md:py-section-5xl">
                <div className="relative flex flex-col items-center gap-10xl md:gap-12xl xl:gap-8xl">
                    <PopularProductsSectionHeadline />
                    <PopularProductsSectionContentFallback />
                </div>
            </section>
        );
    }

    return (
        <section className="py-section-3xl md:py-section-5xl">
            <div className="relative flex flex-col items-center gap-10xl md:gap-12xl xl:gap-8xl">
                <PopularProductsSectionHeadline />
                <PopularProductsSectionContent />
                <PopularProductsSectionSlider />
                <PopularProductsSectionButton />
                <div className="absolute top-el-3xl left-0 -z-10 md:top-el-2xl xl:top-el-sm w-el-lg md:w-el-3xl xl:w-el-5xl aspect-9/21">
                    <Image
                        src={'/img/popular-products-bgi.png'}
                        alt={'Popular Products Section image'}
                        fill
                        sizes="(max-width: 1440px) 50vw, 30vw"
                    />
                </div>
            </div>
        </section>
    );
};
