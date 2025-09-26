import Image from 'next/image';
import { NewsletterSectionHeadline } from '@/NewsletterSection/NewsletterSectionHeadline';
import { NewsletterSectionForm } from '@/NewsletterSection/NewsletterSectionForm';

export const NewsletterSection = () => {
    return (
        <section className="pt-section-3xl md:pt-section-5xl">
            <div className="flex flex-col lg:flex-row">
                <div className="relative h-el-xl w-full md:h-el-6xl lg:w-half lg:h-el-7xl">
                    <Image
                        src={'/img/newsletter.jpg'}
                        alt={'Newsletter Section Main Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col px-el-sm py-el-5xl gap-4xl bg-lite-green items-center w-full md:px-el-3xl md:py-el-8xl md:items-start lg:w-half xl:p-0 xl:px-el-10xl xl:justify-center">
                    <NewsletterSectionHeadline />
                    <NewsletterSectionForm />
                </div>
            </div>
        </section>
    );
};
