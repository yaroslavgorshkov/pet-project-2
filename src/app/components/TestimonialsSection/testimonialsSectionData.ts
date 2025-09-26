export type TestimonialsSectionDataItemImgName = 'CEO' | 'CFO' | 'COO';
export type TestimonialsSectionDataItemImgAlt =
    | 'CEO Image'
    | 'CFO Image'
    | 'COO Image';
export type TestimonialsSectionDataItemDescriptionFor = 'CEO' | 'CFO' | 'COO';
export type TestimonialsSectionDataItemNameFirstLine =
    | 'Leona Paul'
    | 'John Doe'
    | 'Gabe Newell';
export type TestimonialsSectionDataItemNameSecondLine =
    | 'CEO of Floatcom'
    | 'CFO of Floatcom'
    | 'COO of Floatcom';

export type TestimonialsSectionDataItem = {
    imgName: TestimonialsSectionDataItemImgName;
    alt: TestimonialsSectionDataItemImgAlt;
    descriptionFor: TestimonialsSectionDataItemDescriptionFor;
    nameFirstLine: TestimonialsSectionDataItemNameFirstLine;
    nameSecondLine: TestimonialsSectionDataItemNameSecondLine;
};

export const testimonialsSectionData: TestimonialsSectionDataItem[] = [
    {
        imgName: 'CEO',
        alt: 'CEO Image',
        descriptionFor: 'CEO',
        nameFirstLine: 'Leona Paul',
        nameSecondLine: 'CEO of Floatcom',
    },
    {
        imgName: 'CFO',
        alt: 'CFO Image',
        descriptionFor: 'CFO',
        nameFirstLine: 'John Doe',
        nameSecondLine: 'CFO of Floatcom',
    },
    {
        imgName: 'COO',
        alt: 'COO Image',
        descriptionFor: 'COO',
        nameFirstLine: 'Gabe Newell',
        nameSecondLine: 'COO of Floatcom',
    },
];
