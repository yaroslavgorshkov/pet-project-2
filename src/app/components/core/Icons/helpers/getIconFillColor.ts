import { IconFillColor } from '@/types';

const iconFillColorMap: Record<IconFillColor, string> = {
    lapis: '#07484A',
    gray: '#6E757E',
    white: '#FDFBF8',
    'absolute-white': '#fff',
    orange: '#FFC107',
    black: '#000',
    transparent: '',
    'white-blue': '#E0EFF6',
};

export const getIconFillColor = (iconFill: IconFillColor) =>
    iconFillColorMap[iconFill];
