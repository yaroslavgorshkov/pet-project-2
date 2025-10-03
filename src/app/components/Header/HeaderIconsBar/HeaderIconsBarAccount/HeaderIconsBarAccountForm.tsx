/* eslint-disable no-console */
import { Button } from '@/core/Button/Button';
import { Text } from '@/core/Text/Text';
import { cn } from '@/helpers/cn';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

type HeaderIconsBarAccountFormData = {
    phoneNumber: string;
    email: string;
};

export const HeaderIconsBarAccountForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<HeaderIconsBarAccountFormData>();

    const phoneNumberValue = watch('phoneNumber');
    const emailValue = watch('email');

    const isSubmitButtonDisabled = !(!!phoneNumberValue || !!emailValue);

    const submitButtonClassName = cn('disabled:opacity-20');

    const handleHeaderIconsBarAccountFormSubmit: SubmitHandler<
        HeaderIconsBarAccountFormData
    > = async (formData) => {
        try {
            const response = axios.post('example/api', formData);
            console.log('HeaderIconsBarAccountForm response:', response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('API error');
            } else {
                console.log('Unknown error');
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleHeaderIconsBarAccountFormSubmit)}
            className="flex flex-col gap-md"
        >
            <label className="flex flex-col gap-sm">
                <Text
                    fontSize={'md'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'Phone number:'}
                />
                <input
                    className="bg-transparent border rounded-sm p-el-xs font-opensans text-sm"
                    placeholder="+380XXXXXXXXX"
                    type="tel"
                    {...register('phoneNumber', {
                        validate: () => {
                            if (!phoneNumberValue && !emailValue) {
                                return 'Enter the phone number!';
                            }
                            return true;
                        },
                        pattern: {
                            value: /^\+380\d{9}$/,
                            message: 'Incorrect telephone number!',
                        },
                    })}
                />
            </label>
            {errors.phoneNumber?.message && (
                <Text
                    fontSize={'md'}
                    fontFamily={'opensans'}
                    color={'red'}
                    content={errors.phoneNumber?.message}
                />
            )}

            <div className="flex items-center">
                <div className="h-1 grow-4 bg-lapis" />
                <div className="flex justify-center grow-2">
                    <Text
                        fontSize={'md'}
                        fontFamily={'playfair'}
                        color={'lapis'}
                        content={'or'}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="h-1 grow-4 bg-lapis" />
            </div>

            <label className="flex flex-col gap-sm">
                <Text
                    fontSize={'md'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'Email:'}
                />
                <input
                    className="bg-transparent border rounded-sm p-el-xs font-opensans text-sm"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    {...register('email', {
                        validate: () => {
                            if (!phoneNumberValue && !emailValue) {
                                return 'Enter the email!';
                            }
                            return true;
                        },
                        pattern: {
                            value: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/,
                            message: 'Incorrect email value!',
                        },
                    })}
                />
            </label>
            {errors.email?.message && (
                <Text
                    fontSize={'md'}
                    fontFamily={'opensans'}
                    color={'red'}
                    content={errors.email?.message}
                />
            )}
            <Button
                variant={'contained'}
                backgroundColor="mint"
                borderRadius="md"
                buttonSize="sm"
                className={submitButtonClassName}
                disabled={isSubmitButtonDisabled}
            >
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'white'}
                    content={'Submit'}
                />
            </Button>
        </form>
    );
};
