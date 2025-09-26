import { Text } from '@/core/Text/Text';

export const BenefitsSectionHeadline = () => {
    return (
        <>
            <div className="flex flex-col text-center md:hidden">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Benefits'}
                    fontWeight="bold"
                />
                <Text
                    fontSize={'4xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'for your expediency'}
                    fontWeight="bold"
                />
            </div>
            <div className="hidden text-center md:block xl:hidden">
                <Text
                    fontSize={'6xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Benefits for your expediency'}
                    fontWeight="bold"
                />
            </div>
            <div className="hidden text-center xl:block">
                <Text
                    fontSize={'7xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Benefits for your expediency'}
                    fontWeight="bold"
                />
            </div>
        </>
    );
};
