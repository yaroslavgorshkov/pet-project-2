import { IconSize } from '@/types';

const iconSizeMap: Record<IconSize, string> = {
    sm: '10',
    md: '11',
    lg: '14',
    xl: '18',
    '2xl': '20',
    '3xl': '22',
    '4xl': '24',
    '5xl': '27',
    '6xl': '30',
    '7xl': '32',
    '8xl': '34',
    '9xl': '36',
    '10xl': '40',
    '11xl': '110',
    '12xl': '160',
};

export const getIconSize = (iconSize: IconSize) => iconSizeMap[iconSize];
