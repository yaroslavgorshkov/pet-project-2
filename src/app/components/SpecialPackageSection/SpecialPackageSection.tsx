import { SpecialPackageSectionContent } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContent';
import { SpecialPackageSectionHeadline } from '@/SpecialPackageSection/SpecialPackageSectionHeadline';

export const SpecialPackageSection = () => {
    return (
        <section className="px-section-sm py-section-3xl md:px-section-md md:py-section-5xl lg:px-section-xl xl:px-section-7xl">
            <div className="flex flex-col gap-10xl lg:gap-13xl">
                <SpecialPackageSectionHeadline />
                <SpecialPackageSectionContent />
            </div>
        </section>
    );
};
