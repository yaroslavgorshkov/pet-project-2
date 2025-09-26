import Image from 'next/image';
import { Text } from '@/core/Text/Text';
import { FooterContentMainBlock } from '@/Footer/FooterContent/FooterContentMainBlock/FooterContentMainBlock';
import { FooterContentSocialMediaList } from '@/Footer/FooterContent/FooterContentSocialMediaList';

export const FooterContent = () => {
    return (
        <div className="flex flex-col gap-12xl lg:flex-row w-full">
            <div className="flex flex-col gap-lg">
                <a href="#home" className="w-fit">
                    <Image
                        src={'/img/logo.png'}
                        alt={'InWood Logo'}
                        width={144}
                        height={36}
                    />
                </a>
                <FooterContentSocialMediaList />
                <div className="flex flex-col gap-sm">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Address'}
                        fontWeight={'bold'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'+123 654 987'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'877  The Bronx, NY'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'14568, USA'}
                    />
                </div>
            </div>
            <FooterContentMainBlock />
        </div>
    );
};
