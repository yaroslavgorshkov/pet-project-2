import { Text } from '@/core/Text/Text';

export const OwnProductsSectionContentFallback = () => {
    return (
        <>
            <div className="flex md:hidden justify-center items-center p-el-3xl bg-darken-white rounded-md w-full max-w-lg">
                <Text
                    fontSize={'xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No products available'}
                />
            </div>
            <div className="hidden md:flex xl:hidden justify-center items-center p-el-3xl bg-darken-white rounded-md w-full max-w-lg">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No products available'}
                />
            </div>
            <div className="hidden xl:flex justify-center items-center p-el-3xl bg-darken-white rounded-md w-full max-w-xl">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No products available'}
                />
            </div>
        </>
    );
};
