import { ReactNode } from 'react';

type ButtonBaseProps = {
    children: ReactNode;
    className: string;
    onClick?: () => void;
};

export const ButtonBase = ({
    children,
    className,
    onClick,
}: ButtonBaseProps) => {
    return (
        <button
            className={`cursor-pointer border-0 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
