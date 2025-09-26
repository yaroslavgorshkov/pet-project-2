import { TestimonialsSectionDataItemDescriptionFor } from '@/TestimonialsSection/testimonialsSectionData';
const CEO_DESCRIPTION =
    '“My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter.Thank you.”';
const CFO_DESCRIPTION =
    '“My experience with Elena is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Very good.”';
const COO_DESCRIPTION =
    '“My experience with John is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Brilliant.”';
const testimonialsSectionGetContentItemDescriptionMap: Record<
    TestimonialsSectionDataItemDescriptionFor,
    string
> = {
    CEO: CEO_DESCRIPTION,
    CFO: CFO_DESCRIPTION,
    COO: COO_DESCRIPTION,
};

export const testimonialsSectionGetContentItemDescription = (
    descriptionFor: TestimonialsSectionDataItemDescriptionFor
) => testimonialsSectionGetContentItemDescriptionMap[descriptionFor];
