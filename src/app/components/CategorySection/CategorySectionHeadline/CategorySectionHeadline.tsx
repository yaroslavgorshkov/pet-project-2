import { CategorySectionContentFallback } from '@/CategorySection/CategorySectionContent/CategorySectionContentFallback';
import { CategorySectionMenu } from '@/CategorySection/CategorySectionMenu/CategorySectionMenu';
import { categorySectionContent } from '@/CategorySection/categorySectionMockData';
import { CategorySectionHeadlineTitle } from '@/CategorySection/CategorySectionHeadline/CategorySectionHeadlineTitle';

export const CategorySectionHeadline = () => {
    const content = categorySectionContent;
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
        return (
            <div className="hidden xl:flex flex-col gap-3xl items-center w-full">
                <CategorySectionHeadlineTitle />
                <CategorySectionContentFallback />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3xl items-center w-full md:max-w-xl">
            <CategorySectionHeadlineTitle />
            <div className="xl:hidden w-full">
                <CategorySectionMenu />
            </div>
        </div>
    );
};
