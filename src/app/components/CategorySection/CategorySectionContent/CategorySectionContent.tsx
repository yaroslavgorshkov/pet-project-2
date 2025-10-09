import { CategorySectionContentItem } from '@/CategorySection/CategorySectionContent/CategorySectionContentItem/CategorySectionContentItem';
import { CategorySectionMenu } from '@/CategorySection/CategorySectionMenu/CategorySectionMenu';
import { useCategorySectionContentStore } from '../categorySectionContentStore';
import { CategorySectionContentFallback } from './CategorySectionContentFallback';

export const CategorySectionContent = () => {
    const content = useCategorySectionContentStore((s) => s.items);
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
        return <CategorySectionContentFallback />;
    }

    const categorySectionContentList = content.map(
        ({ id, text, href, imgSrc, alt }) => {
            const isFirstItem = id === 0;
            return (
                <CategorySectionContentItem
                    key={id}
                    text={text}
                    href={href}
                    isHighlighted={isFirstItem}
                    imgSrc={imgSrc}
                    alt={alt}
                />
            );
        }
    );

    return (
        <>
            <div className="flex flex-col gap-xl w-full md:hidden">
                {categorySectionContentList}
            </div>
            <div className="hidden grid-cols-2 gap-xl w-full md:grid xl:hidden">
                {categorySectionContentList}
            </div>
            <div className="hidden gap-10xl w-full xl:flex">
                <CategorySectionMenu />
                <div className="grid grid-cols-2 gap-xl w-full">
                    {categorySectionContentList}
                </div>
            </div>
        </>
    );
};
