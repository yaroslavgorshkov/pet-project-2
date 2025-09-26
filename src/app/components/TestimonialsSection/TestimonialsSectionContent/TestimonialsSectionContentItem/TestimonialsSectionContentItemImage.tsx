import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { testimonialsSectionGetContentItemImgSrc } from '@/TestimonialsSection/helpers/testimonialsSectionGetContentItemImgSrc';
import {
    TestimonialsSectionDataItemImgAlt,
    TestimonialsSectionDataItemImgName,
} from '@/TestimonialsSection/testimonialsSectionData';
import Image from 'next/image';

type TestimonialsSectionContentItemImageProps = {
    alt: TestimonialsSectionDataItemImgAlt;
    imgName: TestimonialsSectionDataItemImgName;
};

export const TestimonialsSectionContentItemImage = ({
    alt,
    imgName,
}: TestimonialsSectionContentItemImageProps) => {
    const imgSrc = testimonialsSectionGetContentItemImgSrc(imgName);
    const testimonialsImgIconSm = getDynamicIconComponent(
        'testimonials-img',
        'white-blue',
        '11xl'
    );

    const testimonialsImgIconMd = getDynamicIconComponent(
        'testimonials-img',
        'white-blue',
        '12xl'
    );

    return (
        <div className="relative shrink-none rounded-xl h-el-xl w-responsive-viewport-sm max-w-md md:max-w-none md:h-el-4xl md:w-el-4xl">
            <Image
                src={imgSrc}
                alt={alt}
                fill
                className="rounded-xl"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute -top-el-xl -left-el-md md:hidden">
                {testimonialsImgIconSm}
            </div>
            <div className="absolute -top-el-3xl -left-el-xl hidden md:block">
                {testimonialsImgIconMd}
            </div>
        </div>
    );
};
