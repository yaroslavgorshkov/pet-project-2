import { BenefitsSectionContent } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContent';
import { BenefitsSectionHeadline } from '@/BenefitsSection/BenefitsSectionHeadline';

export const BenefitsSection = () => {
    return (
        <section className="py-section-3xl px-section-sm md:py-section-5xl md:px-section-md lg:px-section-xl xl:px-section-6xl 2xl:px-section-8xl bg-white-blue">
            <div className="flex flex-col gap-13xl">
                <BenefitsSectionHeadline />
                <BenefitsSectionContent />
            </div>
        </section>
    );
};
