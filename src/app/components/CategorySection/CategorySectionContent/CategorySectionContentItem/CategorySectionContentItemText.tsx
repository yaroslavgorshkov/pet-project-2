import { Text } from '@/core/Text/Text';

type CategorySectionContentItemTextProps = {
    text: string;
};

export const CategorySectionContentItemText = ({
    text,
}: CategorySectionContentItemTextProps) => {
    return (
        <>
            <div className="2xl:hidden">
                <Text
                    fontSize="5xl"
                    fontFamily="playfair"
                    color="white"
                    content={text}
                />
            </div>
            <div className="hidden 2xl:block">
                <Text
                    fontSize="7xl"
                    fontFamily="playfair"
                    color="white"
                    content={text}
                />
            </div>
        </>
    );
};
