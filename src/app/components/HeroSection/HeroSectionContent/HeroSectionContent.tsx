import { HeroSectionContentButton } from '@/HeroSection/HeroSectionContent/HeroSectionContentButton';
import { HeroSectionContentTitle } from '@/HeroSection/HeroSectionContent/HeroSectionContentTitle/HeroSectionContentTitle';

export const HeroSectionContent = () => {
    return (
        <div className="flex w-full flex-col gap-7xl items-center md:items-start xl:gap-8xl">
            <HeroSectionContentTitle />
            <HeroSectionContentButton />
        </div>
    );
};
