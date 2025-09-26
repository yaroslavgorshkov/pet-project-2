import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { IconSize } from '@/types';
import { Fragment } from 'react';
import { Rating } from './SpecialPackageSectionContent/specialPackageSectionMockData';

type RatingComponentListProps = {
    iconSize: IconSize;
    rating: Rating;
};

export const RatingComponentList = ({
    iconSize,
    rating,
}: RatingComponentListProps) => {
    const ratingList = Array.from({ length: rating }).map((_, i) => {
        const ratingIcon = getDynamicIconComponent(
            'rating',
            'orange',
            iconSize
        );
        return <Fragment key={i}>{ratingIcon}</Fragment>;
    });

    const inactiveRatingList = Array.from({ length: 5 - rating }).map(
        (_, i) => {
            const inactiveRatingIcon = getDynamicIconComponent(
                'rating',
                'transparent',
                iconSize
            );
            return <Fragment key={i}>{inactiveRatingIcon}</Fragment>;
        }
    );

    return (
        <>
            {ratingList}
            {inactiveRatingList}
        </>
    );
};
