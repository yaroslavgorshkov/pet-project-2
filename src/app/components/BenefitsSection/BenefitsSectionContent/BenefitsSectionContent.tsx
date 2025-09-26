import { benefitsSectionContent } from '@/BenefitsSection/benefitsSectionMockData';
import { BenefitsSectionContentItem } from '@/BenefitsSection/BenefitsSectionContent/BenefitsSectionContentItem/BenefitsSectionContentItem';

export const BenefitsSectionContent = () => {
    const benefitsSectionContentList = benefitsSectionContent.map(
        ({
            id,
            text,
            descriptionTopText,
            descriptionBottomText,
            iconBackgroundColor,
            iconName,
        }) => {
            return (
                <BenefitsSectionContentItem
                    key={id}
                    text={text}
                    descriptionTopText={descriptionTopText}
                    descriptionBottomText={descriptionBottomText}
                    iconBackgroundColor={iconBackgroundColor}
                    iconName={iconName}
                />
            );
        }
    );

    return (
        <div className="flex flex-col md:flex-row gap-10xl md:gap-0">
            {benefitsSectionContentList}
        </div>
    );
};
