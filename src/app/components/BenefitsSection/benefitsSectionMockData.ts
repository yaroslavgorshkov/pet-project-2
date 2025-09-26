import { BenefitsSectionContentItemProps } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContentItem/BenefitsSectionContentItem';

export type BenefitsSectionContentItemIconName =
    | 'payment-method'
    | 'return-policy'
    | 'customer-support';
export type BenefitsSectionContentItemIconBackgroundColor =
    | 'purple'
    | 'skin'
    | 'lazuli-green';

type BenefitsSectionContentItem = BenefitsSectionContentItemProps & {
    id: number;
};

export const benefitsSectionContent: BenefitsSectionContentItem[] = [
    {
        id: 0,
        text: 'Payment Method',
        descriptionTopText: 'We offer flexible payment',
        descriptionBottomText: 'options, to make easier.',
        iconBackgroundColor: 'purple',
        iconName: 'payment-method',
    },
    {
        id: 1,
        text: 'Return policy',
        descriptionTopText: 'You can return a product',
        descriptionBottomText: 'within 30 days.',
        iconBackgroundColor: 'skin',
        iconName: 'return-policy',
    },
    {
        id: 2,
        text: 'Customer Support',
        descriptionTopText: 'Our customer support',
        descriptionBottomText: 'is 24/7.',
        iconBackgroundColor: 'lazuli-green',
        iconName: 'customer-support',
    },
];
