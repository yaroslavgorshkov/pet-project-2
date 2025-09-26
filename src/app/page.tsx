'use client';

import { BenefitsSection } from '@/BenefitsSection/BenefitsSection';
import { CategorySection } from '@/CategorySection/CategorySection';
import { Footer } from '@/Footer/Footer';
import { Header } from '@/Header/Header';
import { HeroSection } from '@/HeroSection/HeroSection';
import { NewsletterSection } from '@/NewsletterSection/NewsletterSection';
import { OwnProductsSection } from '@/OwnProductsSection/OwnProductsSection';
import { PopularProductsSection } from '@/PopularProductsSection/PopularProductsSection';
import { SpecialPackageSection } from '@/SpecialPackageSection/SpecialPackageSection';
import { TestimonialsSection } from '@/TestimonialsSection/TestimonialsSection';

export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <CategorySection />
            <PopularProductsSection />
            <SpecialPackageSection />
            <OwnProductsSection />
            <BenefitsSection />

            <TestimonialsSection />

            <NewsletterSection />
            <Footer />
        </>
    );
}
