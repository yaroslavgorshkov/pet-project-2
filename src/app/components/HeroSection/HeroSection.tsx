import { HeroSectionContent } from '@/HeroSection/HeroSectionContent/HeroSectionContent';
import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="h-dvh relative box-content flex justify-center items-center px-section-sm py-section-5xl md:py-section-3xl md:px-section-md lg:px-section-xl xl:px-section-7xl xl:pb-section-5xl">
            <HeroSectionContent />
            <div className="absolute inset-0 -z-10 rounded-b-3xl">
                <Image
                    src={'/img/hero-section-image.jpg'}
                    alt={'Hero section image'}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-50 rounded-b-3xl"
                />
            </div>
        </section>
    );
};
