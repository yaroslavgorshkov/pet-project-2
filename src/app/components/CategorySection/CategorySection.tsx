import { CategorySectionContent } from '@/CategorySection/CategorySectionContent/CategorySectionContent';
import { CategorySectionHeadline } from '@/CategorySection/CategorySectionHeadline/CategorySectionHeadline';

export const CategorySection = () => {
    return (
        <section className="px-section-sm py-section-3xl md:px-section-md md:py-section-5xl lg:px-section-xl xl:px-section-7xl">
            <div className="flex flex-col gap-10xl items-center md:gap-12xl">
                <CategorySectionHeadline />
                <CategorySectionContent />
            </div>
        </section>
    );
};
