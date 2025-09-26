import { ownProductsSectionContentMockData } from '@/OwnProductsSection/ownProductsSectionMockData';
import { OwnProductsSectionContentItem } from '@/OwnProductsSection/OwnProductsSectionContent/OwnProductsSectionContentItem';
import { OwnProductsSectionContentItemHighlighted } from '@/OwnProductsSection/OwnProductsSectionContent/OwnProductsSectionContentItemHighlighted';

export const OwnProductsSectionContent = () => {
    const ownProductsSectionContentList = ownProductsSectionContentMockData.map(
        ({ id, href, imgSrc, alt }) => {
            return (
                <OwnProductsSectionContentItem
                    key={id}
                    href={href}
                    imgSrc={imgSrc}
                    alt={alt}
                />
            );
        }
    );

    return (
        <div className="flex gap-xl items-center">
            <OwnProductsSectionContentItemHighlighted
                href={'#own-living-room'}
                imgSrc={'/img/own-prod-4.jpg'}
                alt={'Own Living room'}
            />
            {ownProductsSectionContentList}
        </div>
    );
};
