import { HeaderNavigationList } from '@/Header/HeaderNavigationList/HeaderNavigationList';
import { HeaderIconsBar } from '@/Header/HeaderIconsBar/HeaderIconsBar';
import { HeaderLogo } from '@/Header/HeaderLogo';
import { HeaderHamburgerMenuButton } from '@/Header/HeaderHamburgerMenuButton';

export const Header = () => {
    return (
        <header className="fixed w-full z-50">
            <div className="flex px-section-sm py-section-lg backdrop-blur-md bg-header shadow-lg justify-between md:px-section-md lg:px-section-xl xl:hidden">
                <HeaderHamburgerMenuButton />
                <HeaderLogo />
                <HeaderIconsBar />
            </div>
            <div className="hidden px-section-7xl py-section-lg backdrop-blur-md bg-header shadow-lg justify-between xl:flex">
                <HeaderLogo />
                <HeaderNavigationList />
                <HeaderIconsBar />
            </div>
        </header>
    );
};
