import { HeroSectionContentTitleDescription } from '@/HeroSection/HeroSectionContent/HeroSectionContentTitle/HeroSectionContentTitleDescription';
import { HeroSectionContentTitleText } from '@/HeroSection/HeroSectionContent/HeroSectionContentTitle/HeroSectionContentTitleText';

export const HeroSectionContentTitle = () => {
    return (
        <div className="flex flex-col items-center gap-md md:items-start xl:gap-8xl">
            <HeroSectionContentTitleText />
            <HeroSectionContentTitleDescription />
        </div>
    );
};
