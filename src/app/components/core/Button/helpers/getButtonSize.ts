import { ButtonSize } from '@/core/Button/buttonTypes';

const buttonSizeMap: Record<ButtonSize, string> = {
    sm: 'py-el-sm px-el-md min-w-sm',
    md: 'py-el-lg px-el-xl min-w-md',
    lg: 'py-el-xl px-el-4xl min-w-lg',
};

export const getButtonSize = (buttonSize: ButtonSize) =>
    buttonSizeMap[buttonSize];
