import { BenefitsSectionContentItemIconBackgroundColor } from '@/BenefitsSection/benefitsSectionMockData';

const denefitsSectionContentItemIconBackgroundColorMap: Record<
    BenefitsSectionContentItemIconBackgroundColor,
    string
> = {
    purple: 'bg-purple',
    skin: 'bg-skin',
    'lazuli-green': 'bg-lazuli-green',
};

export const getBenefitsSectionContentItemIconBackgroundColor = (
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor
) => {
    return denefitsSectionContentItemIconBackgroundColorMap[
        iconBackgroundColor
    ];
};
