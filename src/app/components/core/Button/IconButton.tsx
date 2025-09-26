import { DynamicIconType, IconFillColor, IconSize } from '@/types';
import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { ButtonBase } from '@/core/Button/ButtonBase';

type IconButtonProps = {
    iconType: DynamicIconType;
    iconFillColor: IconFillColor;
    iconSize: IconSize;
    className?: string;
    onClick?: () => void;
};

export const IconButton = ({
    iconType,
    iconFillColor,
    iconSize,
    className = '',
    onClick,
}: IconButtonProps) => {
    const iconComponent = getDynamicIconComponent(
        iconType,
        iconFillColor,
        iconSize
    );

    return (
        <ButtonBase className={className} onClick={onClick}>
            {iconComponent}
        </ButtonBase>
    );
};
