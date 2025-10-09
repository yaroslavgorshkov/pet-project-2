import { OwnProductsSectionHeadlineDescription } from '@/OwnProductsSection/OwnProductsSectionHeadline/OwnProductsSectionHeadlineDescription';
import { OwnProductsSectionHeadlineText } from '@/OwnProductsSection/OwnProductsSectionHeadline/OwnProductsSectionHeadlineText';
import { Text } from '@/core/Text/Text';

export const OwnProductsSectionHeadline = () => {
    return (
        <div
            className="flex flex-col gap-2xl flex-none w-full max-w-sm px-el-sm py-el-5xl rounded-r-lg bg-mint
            md:px-el-md md:py-el-9xl md:max-w-md xl:pl-el-10xl xl:pr-el-8xl xl:w-full xl:max-w-lg"
        >
            <OwnProductsSectionHeadlineText />
            <OwnProductsSectionHeadlineDescription />
            <a href="/more-own-products/url">
                <Text
                    fontSize={'lg'}
                    fontFamily={'roboto'}
                    color={'white'}
                    content={'More'}
                    fontWeight="bold"
                />
            </a>
        </div>
    );
};
