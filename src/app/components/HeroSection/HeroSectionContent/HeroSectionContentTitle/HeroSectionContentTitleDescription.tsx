import { Text } from '@/core/Text/Text';

export const HeroSectionContentTitleDescription = () => {
    return (
        <>
            <div className="text-center md:hidden">
                <Text
                    fontSize="lg"
                    fontFamily="opensans"
                    color="lapis"
                    content={
                        'Explore different categories. Find the best deals.'
                    }
                />
            </div>
            <div className="text-center hidden md:block">
                <Text
                    fontSize="3xl"
                    fontFamily="opensans"
                    color="lapis"
                    content={
                        'Explore different categories. Find the best deals.'
                    }
                />
            </div>
        </>
    );
};
