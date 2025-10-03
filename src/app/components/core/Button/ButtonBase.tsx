import { cn } from '@/helpers/cn';
import { ReactNode } from 'react';

type ButtonBaseProps = {
    children: ReactNode;
    className: string;
    onClick?: () => void;
    disabled?: boolean;
};

export const ButtonBase = ({
    children,
    className,
    onClick,
    disabled,
}: ButtonBaseProps) => {
    const buttonBaseClassName = cn(
        'border-0',
        className,
        disabled ? 'cursor-default' : 'cursor-pointer'
    );

    return (
        <button
            className={buttonBaseClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
