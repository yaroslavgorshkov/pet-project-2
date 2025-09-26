import { FontFamily } from '@/core/Text/textTypes';

const fontFamilyMap: Record<FontFamily, string> = {
    playfair: 'font-playfair',
    opensans: 'font-opensans',
    roboto: 'font-roboto',
};

export const getFontFamily = (fontFamily: FontFamily) =>
    fontFamilyMap[fontFamily];
