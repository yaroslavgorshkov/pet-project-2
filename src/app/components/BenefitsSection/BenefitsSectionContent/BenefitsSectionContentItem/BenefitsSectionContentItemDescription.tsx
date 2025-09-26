import { Text } from '@/core/Text/Text';

type BenefitsSectionContentItemDescriptionProps = {
    descriptionTop: string;
    descriptionBottom: string;
};

export const BenefitsSectionContentItemDescription = ({
    descriptionTop,
    descriptionBottom,
}: BenefitsSectionContentItemDescriptionProps) => {
    return (
        <>
            <div className="text-center xl:hidden">
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={descriptionTop}
                />
                <br />
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={descriptionBottom}
                />
            </div>
            <div className="hidden text-center xl:block">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={descriptionTop}
                />
                <br />
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={descriptionBottom}
                />
            </div>
        </>
    );
};
