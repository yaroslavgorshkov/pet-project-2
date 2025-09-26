import { FontSize } from '@/core/Text/textTypes';

const fontSizeMap: Record<FontSize, string> = {
    sm: 'text-[14px] leading-[16px]',
    md: 'text-[16px] leading-[18px]',
    lg: 'text-[18px] leading-[24px]',
    xl: 'text-[20px] leading-[24px]',
    '2xl': 'text-[22px] leading-[30px]',
    '3xl': 'text-[24px] leading-[32px]',
    '4xl': 'text-[28px] leading-[40px]',
    '5xl': 'text-[36px] leading-[52px]',
    '6xl': 'text-[48px] leading-[62px]',
    '7xl': 'text-[64px] leading-[86px]',
    '8xl': 'text-[72px] leading-[96px]',
};

export const getFontSize = (fontSize: FontSize) => fontSizeMap[fontSize];
