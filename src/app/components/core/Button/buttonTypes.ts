import { ReactNode } from 'react';
import { EndIconType } from '@/types';

export type BorderRadius = 'md' | 'sm';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonBackgroundColor = 'mint' | 'white' | 'white-blue';

export type ButtonProps = {
    buttonSize?: ButtonSize;
    borderRadius?: BorderRadius;
    children: ReactNode;
    endIcon?: EndIconType;
    className?: string;
    onClick?: () => void;
    variant: 'contained' | 'secondary';
    backgroundColor?: ButtonBackgroundColor;
};
