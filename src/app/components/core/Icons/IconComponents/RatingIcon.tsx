import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const RatingIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);
    const resultIconSize = parseInt(iconSize) - 2;

    return (
        <svg
            width={resultIconSize}
            height={resultIconSize}
            viewBox="0 0 29 29"
            fill="none"
            stroke="#FFC107"
            strokeWidth={1}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.0657 10.1816L19.3977 8.86241L15.5229 0.636389C15.4171 0.411166 15.243 0.228842 15.0279 0.118018C14.4885 -0.16083 13.8331 0.0715433 13.5634 0.636389L9.68855 8.86241L1.02062 10.1816C0.781641 10.2173 0.56315 10.3353 0.395868 10.514C0.193633 10.7317 0.0821927 11.0246 0.0860336 11.3282C0.0898744 11.6319 0.208682 11.9215 0.416351 12.1335L6.68772 18.5363L5.20608 27.5774C5.17133 27.7877 5.19356 28.004 5.27023 28.2018C5.34691 28.3995 5.47496 28.5708 5.63988 28.6963C5.8048 28.8217 5.99998 28.8962 6.20328 28.9114C6.40659 28.9266 6.60989 28.8818 6.79014 28.7822L14.5431 24.5136L22.2962 28.7822C22.5078 28.9001 22.7536 28.9395 22.9892 28.8966C23.5832 28.7893 23.9826 28.1994 23.8802 27.5774L22.3986 18.5363L28.6699 12.1335C28.8406 11.9583 28.9533 11.7295 28.9874 11.4793C29.0796 10.8537 28.6631 10.2745 28.0657 10.1816Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
