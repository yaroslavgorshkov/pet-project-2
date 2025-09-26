import { Text } from '@/core/Text/Text';
import { FooterContent } from '@/Footer/FooterContent/FooterContent';

export const Footer = () => {
    return (
        <footer className="pt-section-3xl px-section-sm pb-section-xl md:px-section-xl lg:pt-section-5xl xl:px-section-7xl">
            <div className="flex flex-col gap-10xl">
                <FooterContent />
                <div className="md:hidden text-center">
                    <Text
                        fontSize={'sm'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Copyright ©2020 INWOOD. All Rights Reserved'}
                    />
                </div>
                <div className="hidden md:block">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Copyright ©2020 INWOOD. All Rights Reserved'}
                    />
                </div>
            </div>
        </footer>
    );
};
