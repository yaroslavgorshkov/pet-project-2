import { TestimonialsSectionContent } from '@/TestimonialsSection/TestimonialsSectionContent/TestimonialsSectionContent';
import { TestimonialsSectionHeadline } from '@/TestimonialsSection/TestimonialsSectionHeadline';

export const TestimonialsSection = () => {
    return (
        <section className="px-section-sm py-section-3xl md:px-section-md lg:px-section-xl lg:py-section-5xl xl:px-section-7xl">
            <div className="flex flex-col">
                <TestimonialsSectionHeadline />
                <TestimonialsSectionContent />
            </div>
        </section>
    );
};
