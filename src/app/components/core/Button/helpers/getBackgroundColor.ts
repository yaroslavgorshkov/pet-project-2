import { ButtonBackgroundColor } from '@/core/Button/buttonTypes';

const backgroundColorMap: Record<ButtonBackgroundColor, string> = {
    mint: 'bg-mint',
    white: 'bg-white',
    'white-blue': 'bg-white-blue',
};

export const getBackgroundColor = (backgroundColor: ButtonBackgroundColor) =>
    backgroundColorMap[backgroundColor];
