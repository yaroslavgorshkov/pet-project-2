export type ButtonVariantTypes = 'contained' | 'secondary';

const buttonVariantMap: Record<ButtonVariantTypes, string> = {
    secondary: 'bg-transparent',
    contained: '',
};

export const getButtonVariant = (buttonVariant: ButtonVariantTypes) =>
    buttonVariantMap[buttonVariant];
