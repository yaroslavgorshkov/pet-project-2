import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const SeeMoreIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.00125 7.94998C6.7676 7.95044 6.54116 7.86906 6.36125 7.71998L0.361252 2.71998C0.157036 2.55024 0.0286112 2.30633 0.0042315 2.04191C-0.0201482 1.77748 0.0615137 1.5142 0.231252 1.30998C0.400991 1.10577 0.644902 0.977342 0.909329 0.952962C1.17375 0.928582 1.43704 1.01024 1.64125 1.17998L7.00125 5.65998L12.3613 1.33998C12.4635 1.25692 12.5812 1.19489 12.7076 1.15745C12.8339 1.12002 12.9664 1.10793 13.0974 1.12187C13.2285 1.13581 13.3554 1.1755 13.4711 1.23868C13.5867 1.30185 13.6887 1.38726 13.7713 1.48998C13.8628 1.5928 13.9322 1.71343 13.975 1.8443C14.0178 1.97518 14.0331 2.11348 14.0199 2.25054C14.0068 2.38761 13.9655 2.52048 13.8986 2.64083C13.8317 2.76119 13.7407 2.86644 13.6313 2.94998L7.63125 7.77998C7.44617 7.9055 7.22435 7.96535 7.00125 7.94998Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
