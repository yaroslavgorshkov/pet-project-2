import { Color } from '@/core/Text/textTypes';

const colorMap: Record<Color, string> = {
    lapis: 'text-lapis',
    white: 'text-white',
    mint: 'text-mint',
    'absolute-black': 'text-absolute-black',
    red: 'text-red',
};

export const getColor = (color: Color) => colorMap[color];
