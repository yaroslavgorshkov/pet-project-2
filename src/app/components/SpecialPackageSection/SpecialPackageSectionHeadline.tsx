import { Text } from '@/core/Text/Text';

export const SpecialPackageSectionHeadline = () => {
    return (
        <>
            <div className="md:hidden self-start">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Special Package'}
                    fontWeight={'bold'}
                />
            </div>
            <div className="hidden md:block self-center">
                <Text
                    fontSize={'8xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Special Package'}
                    fontWeight={'bold'}
                />
            </div>
        </>
    );
};
