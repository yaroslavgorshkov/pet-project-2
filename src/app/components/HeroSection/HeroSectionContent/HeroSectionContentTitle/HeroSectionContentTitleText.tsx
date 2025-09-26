import { Text } from '@/core/Text/Text';

export const HeroSectionContentTitleText = () => {
    return (
        <>
            <div className="flex flex-col text-center md:hidden">
                <Text
                    fontSize="5xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Exclusive Deals'}
                />
                <Text
                    fontSize="5xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'of Furniture'}
                />
                <Text
                    fontSize="5xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Collection'}
                />
            </div>
            <div className="hidden text-start md:flex md:flex-col xl:hidden">
                <Text
                    fontSize="6xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Exclusive Deals of'}
                />
                <Text
                    fontSize="6xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Furniture Collection'}
                />
            </div>
            <div className="hidden text-start xl:flex xl:flex-col">
                <Text
                    fontSize="7xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Exclusive Deals of'}
                />
                <Text
                    fontSize="7xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content={'Furniture Collection'}
                />
            </div>
        </>
    );
};
