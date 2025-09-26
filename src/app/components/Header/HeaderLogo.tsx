import Image from 'next/image';

export const HeaderLogo = () => {
    return (
        <a
            href="#home"
            className="w-logo-sm h-logo-sm relative md:w-logo-md md:h-logo-md md:order-0"
        >
            <Image
                src={'/img/logo.png'}
                alt={'InWood Logo'}
                fill
                sizes="(max-width: 768px) 104px, 144px"
            />
        </a>
    );
};
