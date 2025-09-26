import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const ZoomIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke={iconFillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.5 11.5L15 15"
                stroke={iconFillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 7H9M7 5V9V5Z"
                stroke={iconFillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
