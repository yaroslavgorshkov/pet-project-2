import { Text } from '@/core/Text/Text';

export const PopularProductsSectionHeadline = () => {
    return (
        <>
            <div className="text-center md:hidden">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Popular Products'}
                    fontWeight={'bold'}
                />
            </div>
            <div className="text-center hidden md:block">
                <Text
                    fontSize={'7xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={'Popular Products'}
                    fontWeight={'bold'}
                />
            </div>
        </>
    );
};
