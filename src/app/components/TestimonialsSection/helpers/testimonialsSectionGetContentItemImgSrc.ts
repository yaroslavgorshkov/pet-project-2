import { TestimonialsSectionDataItemImgName } from '@/TestimonialsSection/testimonialsSectionData';
const testimonialsSectionGetImgSrcMap: Record<
    TestimonialsSectionDataItemImgName,
    string
> = {
    CEO: '/img/testimonials-ceo.jpg',
    CFO: '/img/testimonials-cfo.jpg',
    COO: '/img/testimonials-coo.jpg',
};
export const testimonialsSectionGetContentItemImgSrc = (
    imgName: TestimonialsSectionDataItemImgName
) => testimonialsSectionGetImgSrcMap[imgName];
