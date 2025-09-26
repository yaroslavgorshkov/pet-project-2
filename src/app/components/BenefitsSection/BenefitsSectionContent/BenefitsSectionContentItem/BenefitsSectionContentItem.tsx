import { BenefitsSectionContentItemDescription } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContentItem/BenefitsSectionContentItemDescription';
import { BenefitsSectionContentItemText } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContentItem/BenefitsSectionContentItemText';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '@/BenefitsSection/benefitsSectionMockData';
import { BenefitsSectionContentItemIcon } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContentItem/BenefitsSectionContentItemIcon';

export type BenefitsSectionContentItemProps = {
    text: string;
    descriptionTopText: string;
    descriptionBottomText: string;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
    iconName: BenefitsSectionContentItemIconName;
};

export const BenefitsSectionContentItem = ({
    text,
    descriptionTopText,
    descriptionBottomText,
    iconBackgroundColor,
    iconName,
}: BenefitsSectionContentItemProps) => {
    return (
        <div className="flex flex-col gap-2xl items-center w-full">
            <BenefitsSectionContentItemIcon
                iconName={iconName}
                iconBackgroundColor={iconBackgroundColor}
            />
            <BenefitsSectionContentItemText text={text} />
            <BenefitsSectionContentItemDescription
                descriptionTop={descriptionTopText}
                descriptionBottom={descriptionBottomText}
            />
        </div>
    );
};
