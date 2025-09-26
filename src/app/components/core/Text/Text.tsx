import { twMerge } from 'tailwind-merge';
import { getColor } from '@/core/Text/helpers/getColor';
import { getFontFamily } from '@/core/Text/helpers/getFontFamily';
import { getFontSize } from '@/core/Text/helpers/getFontSize';
import { getFontWeight } from '@/core/Text/helpers/getFontWeight';
import { Color, FontFamily, FontSize, FontWeight } from '@/core/Text/textTypes';

type TextProps = {
    fontSize: FontSize;
    fontFamily: FontFamily;
    color: Color;
    fontWeight?: FontWeight;
    content: string;
    className?: string;
};

export const Text = ({
    fontSize,
    fontFamily,
    color,
    fontWeight = 'normal',
    content,
    className = '',
}: TextProps) => {
    const fontSizeClass = getFontSize(fontSize);
    const fontFamilyClass = getFontFamily(fontFamily);
    const colorClass = getColor(color);
    const fontWeightClass = getFontWeight(fontWeight);

    const combinedClassName = twMerge(
        fontSizeClass,
        fontFamilyClass,
        colorClass,
        fontWeightClass,
        className
    );

    return <span className={combinedClassName}>{content}</span>;
};
