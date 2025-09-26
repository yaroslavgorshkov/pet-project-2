import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import Image from 'next/image';

type OwnProductsSectionContentItemProps = {
    href: string;
    imgSrc: string;
    alt: string;
};

export const OwnProductsSectionContentItem = ({
    href,
    imgSrc,
    alt,
}: OwnProductsSectionContentItemProps) => {
    const handleOwnProductsSectionContentItemButtonClick = () => {
        // TODO: add OwnProductsSectionContentItem button click function
    };

    const handleOwnProductsSectionContentItemClick = () => {
        //TODO: add handleOwnProductsSectionContentItemClick logic
    };

    return (
        <article className="group relative w-auto min-w-md h-auto min-h-lg rounded-2xl shadow-lg md:min-w-2xl md:min-h-2xl">
            <div className="absolute inset-0 -z-10 group-hover:blur-sm group-hover:contrast-md transition-filter duration-200">
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 230px, 360px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg brightness-md"
                />
            </div>
            <a
                onClick={handleOwnProductsSectionContentItemClick}
                href={href}
                className="absolute bottom-el-xl left-half -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap hidden group-hover:block"
            >
                <Button
                    buttonSize={'sm'}
                    borderRadius={'sm'}
                    backgroundColor={'white'}
                    onClick={handleOwnProductsSectionContentItemButtonClick}
                    variant={'contained'}
                >
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'absolute-black'}
                        content={'Explore All Rooms'}
                    />
                </Button>
            </a>
        </article>
    );
};
