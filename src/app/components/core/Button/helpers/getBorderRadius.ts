import { BorderRadius } from '@/core/Button/buttonTypes';

const borderRadiusMap: Record<BorderRadius, string> = {
    md: 'rounded-md',
    sm: 'rounded-sm',
};

export const getBorderRadius = (borderRadius: BorderRadius) =>
    borderRadiusMap[borderRadius];
