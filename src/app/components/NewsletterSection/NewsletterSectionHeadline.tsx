import { Text } from '@/core/Text/Text';

export const NewsletterSectionHeadline = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-xl md:hidden">
                <div className="flex flex-col items-center">
                    <Text
                        fontSize={'5xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Join Our'}
                    />
                    <Text
                        fontSize={'5xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Newsletter'}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={'Receive exclusive deals, discounts'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={'and'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={'many offers.'}
                    />
                </div>
            </div>

            <div className="hidden flex-col gap-xl md:flex xl:hidden">
                <div className="flex flex-col">
                    <Text
                        fontSize={'6xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Join Our'}
                    />
                    <Text
                        fontSize={'6xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Newsletter'}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="flex flex-col">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={
                            'Receive exclusive deals, discounts and many offers.'
                        }
                    />
                </div>
            </div>

            <div className="hidden flex-col gap-xl xl:flex">
                <div className="flex flex-col">
                    <Text
                        fontSize={'7xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Join Our'}
                    />
                    <Text
                        fontSize={'7xl'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'Newsletter'}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="flex flex-col">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'roboto'}
                        color={'lapis'}
                        content={
                            'Receive exclusive deals, discounts and many offers.'
                        }
                    />
                </div>
            </div>
        </>
    );
};
