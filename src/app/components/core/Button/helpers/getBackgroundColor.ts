import { ButtonBackgroundColor } from '@/core/Button/buttonTypes';

const backgroundColorMap: Record<ButtonBackgroundColor, string> = {
    mint: 'bg-mint hover:bg-opacity-80 transition',
    white: 'bg-white hover:bg-opacity-80 transition',
    'white-blue': 'bg-white-blue hover:bg-opacity-80 transition',
};

export const getBackgroundColor = (backgroundColor: ButtonBackgroundColor) =>
    backgroundColorMap[backgroundColor];
