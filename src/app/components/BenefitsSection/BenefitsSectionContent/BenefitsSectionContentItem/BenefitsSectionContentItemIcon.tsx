import { getStaticIconComponent } from '@/core/Icons/helpers/getIconComponent';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '@/BenefitsSection/benefitsSectionMockData';
import { getBenefitsSectionContentItemIconBackgroundColor } from '@/BenefitsSection/helpers/getBenefitsSectionContentItemIconBackgroundColor';
import { cn } from '@/helpers/cn';

type BenefitsSectionContentItemIconProps = {
    iconName: BenefitsSectionContentItemIconName;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
};

export const BenefitsSectionContentItemIcon = ({
    iconName,
    iconBackgroundColor,
}: BenefitsSectionContentItemIconProps) => {
    const iconComponent = getStaticIconComponent(iconName);
    const iconBackgroundColorClass =
        getBenefitsSectionContentItemIconBackgroundColor(iconBackgroundColor);

    const benefitsSectionContentItemIconClass = cn(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'rounded-2xl',
        'p-el-md',
        iconBackgroundColorClass
    );

    return (
        <div className={benefitsSectionContentItemIconClass}>
            {iconComponent}
        </div>
    );
};
