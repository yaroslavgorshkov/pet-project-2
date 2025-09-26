import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const SearchSmallIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.389 19.278C15.2982 19.278 19.278 15.2982 19.278 10.389C19.278 5.47973 15.2982 1.5 10.389 1.5C5.47973 1.5 1.5 5.47973 1.5 10.389C1.5 15.2982 5.47973 19.278 10.389 19.278Z"
                stroke={iconFillColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.4999 21.4999L16.6665 16.6665"
                stroke={iconFillColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
