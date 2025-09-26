import { Text } from '@/core/Text/Text';

export const OwnProductsSectionHeadlineDescription = () => {
    return (
        <>
            <div className="md:hidden">
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'white'}
                    content={'Designed in our studio'}
                />
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'white'}
                    content={'Designed in our studio'}
                    fontWeight="bold"
                />
            </div>
        </>
    );
};
