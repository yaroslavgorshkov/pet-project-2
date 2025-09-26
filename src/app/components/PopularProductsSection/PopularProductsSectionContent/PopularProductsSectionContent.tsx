import { popularProductsSectionMockData } from '@/PopularProductsSection/popularProductsSectionMockData';
import { PopularProductsSectionContentItem } from '@/PopularProductsSection/PopularProductsSectionContent/PopularProductsSectionContentItem';

export const PopularProductsSectionContent = () => {
    const popularProductsList = popularProductsSectionMockData.map(
        ({
            href,
            imgSrc,
            name,
            description,
            price,
            backgroundColor,
            alt,
            id,
        }) => {
            return (
                <PopularProductsSectionContentItem
                    href={href}
                    imgSrc={imgSrc}
                    name={name}
                    description={description}
                    price={price}
                    backgroundColor={backgroundColor}
                    alt={alt}
                    key={id}
                />
            );
        }
    );

    return (
        <div
            className="popular-products-section-content flex gap-2xl overflow-x-scroll 
        w-full px-el-2xl md:px-el-3xl lg:px-el-6xl xl:px-el-11xl"
        >
            {popularProductsList}
        </div>
    );
};
