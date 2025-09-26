import { HeaderIconsBarAccountButton } from '@/Header/HeaderIconsBar/HeaderIconsBarAccountButton';
import { HeaderIconsBarSearchButton } from '@/Header/HeaderIconsBar/HeaderIconsBarSearchButton';
import { HeaderIconsBarShoppingCartButton } from '@/Header/HeaderIconsBar/HeaderIconsBarShoppingCartButton';

export const HeaderIconsBar = () => {
    return (
        <div className="gap-md flex order-2 items-center md:gap-9xl">
            <HeaderIconsBarSearchButton />
            <HeaderIconsBarShoppingCartButton />
            <HeaderIconsBarAccountButton />
        </div>
    );
};
