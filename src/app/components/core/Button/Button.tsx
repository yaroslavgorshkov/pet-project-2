import { ButtonBase } from '@/core/Button/ButtonBase';
import { getButtonSize } from '@/core/Button/helpers/getButtonSize';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { getButtonVariant } from '@/core/Button/helpers/getButtonVariant';
import { getBorderRadius } from '@/core/Button/helpers/getBorderRadius';
import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { getBackgroundColor } from '@/core/Button/helpers/getBackgroundColor';
import { cn } from '@/helpers/cn';

export const Button = ({
    buttonSize,
    borderRadius,
    variant,
    backgroundColor,
    children,
    endIcon,
    className = '',
    onClick,
}: ButtonProps) => {
    const variantClass = getButtonVariant(variant);
    const buttonSizeClass = buttonSize ? getButtonSize(buttonSize) : null;
    const borderRadiusClass = borderRadius
        ? getBorderRadius(borderRadius)
        : null;

    const endIconComponent = endIcon
        ? getDynamicIconComponent(
              endIcon.iconType,
              endIcon.iconFillColor,
              endIcon.iconSize
          )
        : null;
    const backgroundColorClass = backgroundColor
        ? getBackgroundColor(backgroundColor)
        : '';

    const combinedButtonClassName = cn(
        variantClass,
        buttonSizeClass,
        backgroundColorClass,
        borderRadiusClass,
        className
    );

    if (endIcon) {
        return (
            <ButtonBase className={combinedButtonClassName} onClick={onClick}>
                <div className="flex justify-center items-center gap-md">
                    {children}
                    <div className="flex justify-center items-center">
                        {endIconComponent}
                    </div>
                </div>
            </ButtonBase>
        );
    }

    return (
        <ButtonBase className={combinedButtonClassName} onClick={onClick}>
            {children}
        </ButtonBase>
    );
};
