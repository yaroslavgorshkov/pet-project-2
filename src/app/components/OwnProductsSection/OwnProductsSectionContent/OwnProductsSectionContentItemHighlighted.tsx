import Image from 'next/image';
import { Text } from '@/core/Text/Text';
import { Button } from '@/core/Button/Button';

type OwnProductsSectionContentItemHighlightedProps = {
    href: string;
    imgSrc: string;
    alt: string;
};

export const OwnProductsSectionContentItemHighlighted = ({
    href,
    imgSrc,
    alt,
}: OwnProductsSectionContentItemHighlightedProps) => {
    const handleOwnProductsSectionContentItemHighlightedButtonClick = () => {
        // TODO: add OwnProductsSectionContentItemHighlighted button click function
    };

    const handleOwnProductsSectionContentItemHighlightedClick = () => {
        //TODO: add handleOwnProductsSectionContentItemHighlightedClick logic
    };

    return (
        <article className="relative w-auto min-w-xl h-auto min-h-xl md:min-w-3xl md:min-h-3xl">
            <div className="blur-sm contrast-md absolute inset-0 -z-10">
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 288px, 382px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-md brightness-md"
                />
            </div>
            <a
                onClick={handleOwnProductsSectionContentItemHighlightedClick}
                href={href}
                className="absolute bottom-el-xl left-half -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap"
            >
                <Button
                    buttonSize={'sm'}
                    borderRadius={'sm'}
                    backgroundColor={'white'}
                    onClick={
                        handleOwnProductsSectionContentItemHighlightedButtonClick
                    }
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
