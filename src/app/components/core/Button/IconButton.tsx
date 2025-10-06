import { DynamicIconType, IconFillColor, IconSize } from '@/types';
import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { ButtonBase } from '@/core/Button/ButtonBase';

type IconButtonProps = {
    iconType: DynamicIconType;
    iconFillColor: IconFillColor;
    iconSize: IconSize;
    className?: string;
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    disabled?: boolean;
};

export const IconButton = ({
    iconType,
    iconFillColor,
    iconSize,
    className = '',
    onClick,
    disabled,
}: IconButtonProps) => {
    const iconComponent = getDynamicIconComponent(
        iconType,
        iconFillColor,
        iconSize
    );

    return (
        <ButtonBase disabled={disabled} className={className} onClick={onClick}>
            {iconComponent}
        </ButtonBase>
    );
};
