import { Text } from '@/core/Text/Text';

export const CategorySectionHeadlineTitle = () => {
    return (
        <>
            <div className="text-center md:hidden">
                <Text
                    fontSize="4xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content="Explore by Category"
                />
            </div>
            <div className="text-center hidden md:inline xl:hidden">
                <Text
                    fontSize="6xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content="Explore by Category"
                />
            </div>
            <div className="text-center hidden xl:inline">
                <Text
                    fontSize="7xl"
                    fontFamily="playfair"
                    color="lapis"
                    fontWeight="bold"
                    content="Explore by Category"
                />
            </div>
        </>
    );
};
