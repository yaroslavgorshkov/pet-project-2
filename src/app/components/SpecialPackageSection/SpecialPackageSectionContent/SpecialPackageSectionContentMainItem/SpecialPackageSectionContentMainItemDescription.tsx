import { Text } from '@/core/Text/Text';
import { SpecialPackageSectionContentItemDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDescription';

type SpecialPackageSectionContentMainItemDescriptionProps = {
    description: string;
};

export const SpecialPackageSectionContentMainItemDescription = ({
    description,
}: SpecialPackageSectionContentMainItemDescriptionProps) => {
    return (
        <>
            <div className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentItemDescription
                    description={description}
                />
            </div>
            <div className="hidden md:flex flex-col gap-2xl">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={'Description'}
                    fontWeight={'bold'}
                />
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
        </>
    );
};
