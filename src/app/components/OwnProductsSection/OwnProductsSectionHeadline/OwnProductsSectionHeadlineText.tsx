import { Text } from '@/core/Text/Text';

export const OwnProductsSectionHeadlineText = () => {
    return (
        <>
            <div className="md:hidden">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'playfair'}
                    color={'white'}
                    content={'Our Own Creation'}
                    fontWeight="bold"
                />
            </div>
            <div className="hidden md:block">
                <div className="flex flex-col">
                    <Text
                        fontSize={'6xl'}
                        fontFamily={'playfair'}
                        color={'white'}
                        content={'Our'}
                        fontWeight="bold"
                    />
                    <Text
                        fontSize={'6xl'}
                        fontFamily={'playfair'}
                        color={'white'}
                        content={'Own Creation'}
                        fontWeight="bold"
                    />
                </div>
            </div>
        </>
    );
};
