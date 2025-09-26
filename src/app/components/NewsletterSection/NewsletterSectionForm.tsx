import { SubmitHandler, useForm } from 'react-hook-form';
import { Text } from '@/core/Text/Text';
import { Button } from '@/core/Button/Button';

type NewsletterSectionContentFormData = {
    email: string;
};

export const NewsletterSectionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewsletterSectionContentFormData>();

    const handleNewsletterSectionContentFormSubmit: SubmitHandler<
        NewsletterSectionContentFormData
    > = () => {};

    const hasEmailError = !!errors.email;
    const emailErrorMessage = errors.email?.message;
    const emailErrorMarkup = hasEmailError && emailErrorMessage && (
        <>
            <div className="xl:hidden">
                <Text
                    fontSize={'lg'}
                    fontFamily={'roboto'}
                    color={'red'}
                    content={emailErrorMessage}
                />
            </div>
            <div className="hidden xl:block">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'roboto'}
                    color={'red'}
                    content={emailErrorMessage}
                />
            </div>
        </>
    );

    return (
        <form
            action="/example"
            method="post"
            className="flex flex-col gap-2xl w-full items-center md:items-start"
            onSubmit={handleSubmit(handleNewsletterSectionContentFormSubmit)}
        >
            <input
                type="email"
                placeholder="Enter your email"
                className="border-b-sm border-black placeholder:text-center placeholder:text-clay placeholder:text-placeholder-sm placeholder:font-roboto bg-transparent w-full py-el-sm text-center outline-none font-roboto md:text-start md:text-placeholder-md md:placeholder:text-start md:placeholder:text-placeholder-md"
                autoComplete="email"
                {...register('email', {
                    required: 'Required field!',
                    pattern: {
                        value: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/,
                        message: 'Enter correct email!',
                    },
                })}
            />
            {emailErrorMarkup}
            <div className="md:hidden">
                <Button
                    buttonSize={'md'}
                    borderRadius={'sm'}
                    variant={'contained'}
                    backgroundColor={'mint'}
                >
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'roboto'}
                        color={'white'}
                        content={'Subscribe'}
                    />
                </Button>
            </div>
            <div className="hidden md:block">
                <Button
                    buttonSize={'lg'}
                    borderRadius={'sm'}
                    variant={'contained'}
                    backgroundColor={'mint'}
                >
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'roboto'}
                        color={'white'}
                        content={'Subscribe'}
                    />
                </Button>
            </div>
        </form>
    );
};
