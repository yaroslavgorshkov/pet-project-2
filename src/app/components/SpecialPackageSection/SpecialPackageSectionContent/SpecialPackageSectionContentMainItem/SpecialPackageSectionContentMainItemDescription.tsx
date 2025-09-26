import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';
import { SpecialPackageSectionContentItemDescription } from '../SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDescription';

type SpecialPackageSectionContentMainItemDescriptionProps = {
    description: string;
};

export const SpecialPackageSectionContentMainItemDescription = ({
    description,
}: SpecialPackageSectionContentMainItemDescriptionProps) => {
    const specialPackageSectionContentMainItemDescriptionButtonEndIconProps: EndIconType =
        {
            iconType: 'see-more',
            iconFillColor: 'black',
            iconSize: 'lg',
        };

    return (
        <>
            <div className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentItemDescription
                    description={description}
                />
            </div>
            <div className="hidden md:flex 2xl:hidden flex-col gap-2xl">
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
            <div className="hidden 2xl:flex flex-col gap-lg">
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
                <div className="self-start">
                    <Button
                        variant={'secondary'}
                        endIcon={
                            specialPackageSectionContentMainItemDescriptionButtonEndIconProps
                        }
                    >
                        <Text
                            fontSize={'lg'}
                            fontFamily={'opensans'}
                            color={'absolute-black'}
                            content={'See More'}
                            fontWeight={'bold'}
                        />
                    </Button>
                </div>
            </div>
        </>
    );
};
