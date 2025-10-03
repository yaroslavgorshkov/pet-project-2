import Image from 'next/image';

type HeaderLogoProps = {
    setActiveElementId: React.Dispatch<React.SetStateAction<number>>;
};

export const HeaderLogo = ({ setActiveElementId }: HeaderLogoProps) => {
    const handleHeaderLogoClick = () => {
        setActiveElementId(0);
    };

    return (
        <a
            href="#home"
            className="w-logo-sm h-logo-sm relative md:w-logo-md md:h-logo-md md:order-0"
            onClick={handleHeaderLogoClick}
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
