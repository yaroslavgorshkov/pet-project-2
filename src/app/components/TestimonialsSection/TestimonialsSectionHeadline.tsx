import { Text } from '@/core/Text/Text';

export const TestimonialsSectionHeadline = () => {
    return (
        <div className="flex flex-col self-center gap-md xl:gap-2xl">
            <div className="self-center md:hidden">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    fontWeight={'bold'}
                    content={'Testimonials'}
                />
            </div>
            <div className="hidden md:block self-center xl:hidden">
                <Text
                    fontSize={'6xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    fontWeight={'bold'}
                    content={'Testimonials'}
                />
            </div>
            <div className="hidden self-center xl:block">
                <Text
                    fontSize={'7xl'}
                    fontFamily={'playfair'}
                    color={'lapis'}
                    fontWeight={'bold'}
                    content={'Testimonials'}
                />
            </div>

            <div className="md:hidden">
                <Text
                    fontSize={'lg'}
                    fontFamily={'roboto'}
                    color={'lapis'}
                    content={'Over 15,000 happy customers.'}
                />
            </div>
            <div className="hidden md:block xl:hidden">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'roboto'}
                    color={'lapis'}
                    content={'Over 15,000 happy customers.'}
                />
            </div>
            <div className="hidden xl:block">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'roboto'}
                    color={'lapis'}
                    content={'Over 15,000 happy customers.'}
                />
            </div>
        </div>
    );
};
