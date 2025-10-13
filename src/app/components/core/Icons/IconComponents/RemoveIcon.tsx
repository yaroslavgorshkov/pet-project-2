import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const RemoveIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={iconSize}
            viewBox="0 -960 960 960"
            width={iconSize}
            fill={iconFillColor}
        >
            <path d="M200-440v-80h560v80H200Z" />
        </svg>
    );
};
