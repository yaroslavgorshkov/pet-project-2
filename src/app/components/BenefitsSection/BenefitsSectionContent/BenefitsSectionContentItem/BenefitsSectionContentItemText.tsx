import { Text } from '@/core/Text/Text';

type BenefitsSectionContentItemTextProps = {
    text: string;
};

export const BenefitsSectionContentItemText = ({
    text,
}: BenefitsSectionContentItemTextProps) => {
    return (
        <>
            <div className="text-center xl:hidden">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={text}
                    fontWeight="bold"
                />
            </div>
            <div className="hidden text-center xl:block">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    content={text}
                    fontWeight="bold"
                />
            </div>
        </>
    );
};
