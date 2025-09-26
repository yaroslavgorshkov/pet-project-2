import { Text } from '@/core/Text/Text';

type SpecialPackageSectionContentItemDescriptionProps = {
    description: string;
};

export const SpecialPackageSectionContentItemDescription = ({
    description,
}: SpecialPackageSectionContentItemDescriptionProps) => {
    return (
        <>
            <div className="md:hidden flex flex-col gap-2xl">
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
            <div className="hidden md:block">
                <Text
                    fontSize={'sm'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
        </>
    );
};
